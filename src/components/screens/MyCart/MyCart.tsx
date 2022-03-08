import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, ReactElement } from 'react'
import { IItem } from './MyCart.types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLOURS, Items } from '../../../assets/Database'
import { styles } from './MyCartStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export function MyCart({ navigation }: any) {

  const [products, setProducts] = useState<IItem[] | boolean>()
  const [total, setTotal] = useState<number>(null!)

  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    if (items !== null) {
      items = JSON.parse(items);
      let productData: IItem[] = [];
      if (items) {
        Items.forEach(data => {
          if (items?.includes(data.id.toString())) {
            return productData.push(data);
          }
        });
        setProducts(productData);
        getTotal(productData);
      } else {
        setProducts(false);
        getTotal(false);
      }
    }
  };

  const getTotal = (productData: boolean | IItem[]) => {
    let total = 0
    if (typeof productData === 'object') {
      for (let index = 0; index < productData.length; index++) {
        let productPrice = productData[index].productPrice;
        total += productPrice;
      }
    }
    setTotal(total);
  }

  const removeItemFromCart = async (id: number) => {
    try {
      let itemArray = await AsyncStorage.getItem('cartItem')
      if (itemArray !== null) {
        itemArray = JSON.parse(itemArray)
        if (itemArray !== null) {
          let array = [...itemArray]
          for (let index = 0; index < array.length; index++) {
            if (array[index].toString() == id.toString()) array.splice(index, 1)
            await AsyncStorage.setItem('cartItems', JSON.stringify(array))
            getDataFromDB()
          }
        }
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  const renderProducts = (data: IItem): ReactElement => (
    <TouchableOpacity onPress={() => navigation.navigate('ItemInfo', { itemId: data.id })} key={data.id} style={styles.productsCart}>
      <View style={styles.imageContainer}>
        <Image source={data.productImage} style={styles.image} />
      </View>
      <View style={{ flex: 1, height: '100%', justifyContent: 'space-around' }}>
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{data.productName}</Text>
          <View style={styles.prices}>
            <Text style={{ fontSize: 14, fontWeight: '400', maxWidth: '85%', marginRight: 4 }}>&#36; {data.productPrice}</Text>
            <Text>(~&#36; {data.productPrice + data.productPrice / 20})</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.minusIconContainer}>
              <MaterialCommunityIcons name="minus" style={styles.signIcon} />
            </View>
            <Text>1</Text>
            <View style={styles.plusIconContainer}>
              <MaterialCommunityIcons name="plus" style={styles.signIcon} />
            </View>
          </View>
          <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
            <MaterialCommunityIcons name="delete-outline" style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB()
    })

    return unsubscribe
  }, [navigation])

  return (
    <SafeAreaView>
      <View style={styles.body}>

        <StatusBar animated={true} backgroundColor={COLOURS.backgroundLight} barStyle="dark-content" />

        <ScrollView>

          {/* header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="chevron-left" style={styles.left} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '400', color: COLOURS.black, fontSize: 14 }}>Order Details</Text>
            <View></View>
          </View>

          {/* header title */}
          <Text style={{ fontSize: 20, color: COLOURS.black, fontWeight: '500', letterSpacing: 1, paddingTop: 20, paddingLeft: 16, marginBottom: 10, }}>My Cart</Text>

          <View style={styles.productsCartContainer}>
            {typeof products === 'object' && products.map(renderProducts)}
          </View>

          <View></View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}