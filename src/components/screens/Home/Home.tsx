import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './HomeStyle'
import { COLOURS, Items } from '../../../assets/Database'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { IItem } from './Home.types'

export function Home({ navigation }: any) {

  const [products, setProducts] = useState<IItem[]>([])
  const [accessories, setAccessories] = useState<IItem[]>([])

  const getDataFromDB = () => {
    let productList: IItem[] = []
    let accessoryList: IItem[] = []

    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category === 'product') productList.push(Items[index])
      if (Items[index].category === 'accessory') accessoryList.push(Items[index])
    }

    setProducts(productList)
    setAccessories(accessoryList)
  }

  const ItemCard = ({ item }: { item: IItem }) => (
    <TouchableOpacity style={styles.itemTouchCard} onPress={() => navigation.navigate('ItemInfo', { itemId: item.id })}>
      <View style={styles.itemContainer}>
        {item.isOff && (
          <View style={styles.isOffContainer}>
            <Text style={styles.isOffText}>{item.offPercentage}%</Text>
          </View>
        )}
        <Image source={item.productImage} style={styles.itemImage} />
      </View>
      <Text style={styles.itemName}>{item.productName}</Text>
      {item.category === 'accessory' ? (item.isAvailable ? (
        <View style={styles.circleContainer}>
          <FontAwesome name='circle' style={styles.circle} />
          <Text style={styles.circleText}>Available</Text>
        </View>
      ) : (
        <View style={styles.circleContainer}>
          <FontAwesome name='circle' style={[styles.circle, { color: COLOURS.red }]} />
          <Text style={[styles.circleText, { color: COLOURS.red }]}>Unavailable</Text>
        </View>
      )) : null
      }
      <Text style={{ color: COLOURS.backgroundMedium }}>&#36; {item.productPrice}</Text>
    </TouchableOpacity >
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

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* top icons */}
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Entypo name="shopping-bag" style={styles.iconShop} />
            </TouchableOpacity>
            <TouchableOpacity onPress={(() => navigation.navigate('MyCart'))}>
              <MaterialCommunityIcons name="cart" style={styles.iconCart} />
            </TouchableOpacity>
          </View>

          {/* introduction screen */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Hi-Fi Shop &amp; Service</Text>
            <Text style={styles.introText}>Audio shop on Rustaveli Ave 57.{'\n'}This shop offers both products & services</Text >
          </View>

          {/* products */}
          <View style={{ padding: 16 }}>

            {/* products info title */}
            <View style={styles.mainItemsContainer}>
              <View style={styles.itemsContainer}>
                <Text style={styles.textItem}>Products</Text>
                <Text style={styles.numberItem}>41</Text>
              </View>
              <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
            </View>

            {/* products list */}
            <View style={styles.itemCard}>
              {products.map((product: IItem) => <ItemCard key={product.id} item={product} />)}
            </View>

          </View>

          {/* accessories */}
          <View style={{ padding: 16 }}>

            {/* accessories info title */}
            <View style={styles.mainItemsContainer}>
              <View style={styles.itemsContainer}>
                <Text style={styles.textItem}>Accessories</Text>
                <Text style={styles.numberItem}>78</Text>
              </View>
              <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
            </View>

            {/* accessories list */}
            <View style={styles.itemCard}>
              {accessories.map((accessory: IItem) => <ItemCard key={accessory.id} item={accessory} />)}
            </View>

          </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}
