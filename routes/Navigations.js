import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Play from '../screens/Play';
import Playlist from '../screens/Playlist';
 
const Tab = createBottomTabNavigator()
import Ionicons from "@expo/vector-icons/Ionicons"

const Navigations = () => {
  return (
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName
            if (route.name === "Home") {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }else if(route.name === "Playlist"){
                iconName = focused ? 'ios-list' : 'ios-list';
            }else if(route.name === 'Play'){
                iconName = focused ? 'ios-list' : 'ios-list';
            }
            
            return <Ionicons size={size} color={color} name={iconName} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
          
      })}>
          
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Play' component={Play} />
          <Tab.Screen name='Playlist' component={Playlist} />
      </Tab.Navigator>
  );
}


export default Navigations;