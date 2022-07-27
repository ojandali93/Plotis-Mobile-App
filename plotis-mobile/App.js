import React, { useState } from 'react'
import { app } from './firebase.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './src/screens/HomeScreen.js';
import PropertyDetail from './src/screens/PropertyDetail.js';
import FavoriteScreen from './src/screens/FavoriteScreen.js';
import ActivityScreen from './src/screens/ActivityScreen.js';
import MessagesScreen from './src/screens/MessagesScreen.js';
import ThreadScreen from './src/screens/ThreadScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import RecommendedScreen from './src/screens/RecommendedScreen.js';
import DetailScreen from './src/screens/DetailScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen.js';

const TabNav = createBottomTabNavigator();
const StackNav = createStackNavigator();

const HomeStack = () => {

  return (
    <StackNav.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <StackNav.Screen name="HomeStack" component={HomeScreen}/>
      <StackNav.Screen name="HomeDetailsStack" component={DetailScreen} />
     </StackNav.Navigator>
  )
}

const FavoriteStack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="FavoritesStack" component={FavoriteScreen} />
      <StackNav.Screen name="FavoriteDetailsStack" component={PropertyDetail} />
    </StackNav.Navigator>
  )
} 

const ActivityStack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="ActivityStack" component={ActivityScreen} />
      <StackNav.Screen name="ActivityDetailsStack" component={PropertyDetail} />
    </StackNav.Navigator>
  )
}

// const RecommendedStack = () => {
//   return (
//     <StackNav.Navigator>
//       <StackNav.Screen name="RecommendedStack" component={RecommendedScreen} />
//       <StackNav.Screen name="RecommendedDetailStack" component={PropertyDetail} />
//     </StackNav.Navigator>
//   )
// }

// const MessagesStack = () => {
//   return (
//     <StackNav.Navigator>
//       <StackNav.Screen name="MessagesStack" component={MessagesScreen} />
//       <StackNav.Screen name="ThreadStack" component={ThreadScreen} />
//     </StackNav.Navigator>
//   )
// }

const ProfileStack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="ProfileStack" component={ProfileScreen} />
      <StackNav.Screen name="LoginStack" component={LoginScreen} />
      <StackNav.Screen name="SignUpStack" component={SignUpScreen} />
    </StackNav.Navigator>
  )
}

const MainTabkNavigation = () => {
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOptions={{headerShown: false}}>
        <TabNav.Screen key='Home' name="Home" component={HomeStack} /> 
        {/* <TabNav.Screen key='Recommended' name="Recommended" component={RecommendedStack} /> */}
        <TabNav.Screen key='Favorites' name="Favorites" component={FavoriteStack} />
        {/* <TabNav.Screen key='Activity' name="Activity" component={ActivityStack} /> */}
        {/* <TabNav.Screen key='Messages' name="Messages" component={MessagesStack} />  */}
        <TabNav.Screen key='Profile' name="Profile" component={ProfileStack} /> 
      </TabNav.Navigator>
    </NavigationContainer>
  )
}

export default MainTabkNavigation;