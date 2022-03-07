import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IItem } from './MyCart.types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Items } from '../../../assets/Database'

export function MyCart({ navigation }: any) {

  const [product, setProduct] = useState<IItem[] | boolean>()
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
        setProduct(productData);
        getTotal(productData);
      } else {
        setProduct(false);
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB()
    })

    return unsubscribe
  }, [navigation])

  return (
    <SafeAreaView>
      <View>

      </View>
    </SafeAreaView>
  )
}