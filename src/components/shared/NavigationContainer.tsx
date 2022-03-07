import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyCart, ItemInfo, Home } from '../screens'
import { ScreenOptions } from '../../utils'

const Stack = createNativeStackNavigator()

export function NavigationContainerComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenOptions} initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MyCart" component={MyCart} />
                <Stack.Screen name="ItemInfo" component={ItemInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}