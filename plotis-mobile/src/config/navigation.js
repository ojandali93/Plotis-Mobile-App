import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'

const HomeStack = createStackNavigator()
const HomeStackScreen = () => {
  <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='Favorites' component={FavoriteScreen}/>
    </HomeStack.Navigator>
  </NavigationContainer>
}

module.exports = HomeStackScreen