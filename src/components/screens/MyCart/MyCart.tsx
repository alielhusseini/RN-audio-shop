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

  const renderProducts = (data: IItem, index: number): ReactElement => (
    <TouchableOpacity key={data.id} style={styles.productsCart}>
      <View style={styles.imageContainer}>
        <Image source={data.productImage} style={styles.image} />
      </View>
      <View style={{ flex: 1, height: '100%', justifyContent: 'center' }}>
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{data.productName}</Text>
          <View style={styles.prices}>
            <Text style={{ fontSize: 14, fontWeight: '400', maxWidth: '85%', marginRight: 4 }}>&#36; {data.productPrice}</Text>
            <Text>(~&#36; {data.productPrice + data.productPrice / 20})</Text>
          </View>
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

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}