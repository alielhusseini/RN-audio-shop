import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, Animated, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOURS, Items } from '../../../assets/Database'
import { IItem } from './ItemInfo.types'
import { styles } from './ItemIntoStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function ItemInfo({ navigation, route: { params } }: any) {

  const { itemId } = params
  const [item, setItem] = useState<IItem>()

  const width = Dimensions.get('window').width
  const scrollX = new Animated.Value(0)
  let position = Animated.divide(scrollX, width)

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id === itemId) {
        await setItem(Items[index])
        break
      }
    }
  }

  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <View key={index} style={{ width, height: 240, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={item} style={styles.imageHeader} />
      </View>
    )
  }

  const addToCart = async (id: number) => {
    let itemArray = await AsyncStorage.getItem('cartItems')
    if (itemArray !== null) {
      itemArray = JSON.parse(itemArray)
      if (itemArray) {
        let arr = [...itemArray]
        arr.push(id.toString())

        try {
          await AsyncStorage.setItem('cartItems', JSON.stringify(arr))
          ToastAndroid.show('Item added to cart successfully', ToastAndroid.SHORT)
          navigation.navigate('Home')
        } catch (err: any) {
          return err
        }
      }
    } else {
      let arr: string[] = []
      arr.push(id.toString())

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(arr))
        ToastAndroid.show('Item added to cart successfully', ToastAndroid.SHORT)
        navigation.navigate('Home')
      } catch (err: any) {
        return err
      }
    }
  }

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

          {/* header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name='chevron-left' style={styles.back} />
              </TouchableOpacity>
            </View>
            <FlatList
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
              bounces={false}
              snapToInterval={width}
              decelerationRate={.8}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={item?.productImageList}
              renderItem={renderItem}
            />
            <View style={styles.pagination}>
              {item?.productImageList && item?.productImageList.map((data, index) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [.2, 1, .2],
                  extrapolate: 'clamp',
                })
                return (
                  <Animated.View key={index} style={{ width: '16%', height: 2.4, backgroundColor: COLOURS.black, opacity, marginHorizontal: 4, borderRadius: 100 }}></Animated.View>
                )
              })}
            </View>
          </View>

          {/* body */}
          <View style={styles.bodyContainer}>
            <View style={styles.main}>
              <Entypo name='shopping-cart' style={styles.iconCart} />
              <Text style={{ fontSize: 12, color: COLOURS.black }}>Shopping</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 4, alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, fontWeight: '600', letterSpacing: .5, marginVertical: 4, color: COLOURS.black, maxWidth: '84%' }}>{item?.productName}</Text>
              <Ionicons name="link-outline" style={styles.iconLink} />
            </View>
            <Text style={{ fontSize: 12, color: COLOURS.black, fontWeight: '400', letterSpacing: 1, opacity: .5, lineHeight: 20, maxWidth: '85%', maxHeight: 44, marginBottom: 18 }}>{item?.description}</Text>
            <View style={styles.addressContainer}>
              <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.locationPinContainer}>
                  <Entypo name="location-pin" style={styles.iconPin} />
                </View>
                <Text style={{ color: COLOURS.backgroundMedium }}>Rustaveli Ave 57,{'\n'}17-001, Batume</Text>
              </View>
              <Entypo name='chevron-right' style={styles.iconRight} />
            </View>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={{ color: COLOURS.black, fontWeight: '500', fontSize: 18, maxWidth: '85%', marginBottom: 4 }}>&#36; {item?.productPrice}</Text>
              <Text style={{ color: COLOURS.black }}>Tax Rate 2%~ &#36;{item?.productPrice as number / 20} (&#36; {(item?.productPrice as number) + (item?.productPrice as number / 20)})</Text>
            </View>
          </View>

        </ScrollView>

        {/* button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => item?.isAvailable && addToCart(item.id)}>
            <Text style={{ fontSize: 12, fontWeight: '500', letterSpacing: 1, color: COLOURS.white, textTransform: 'uppercase' }}>{item?.isAvailable ? 'Add to cart' : 'Not Available'}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}