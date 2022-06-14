import React from 'react'
import { View,TouchableOpacity } from 'react-native'

import { AntDesign,Ionicons,MaterialIcons } from '@expo/vector-icons'; 

const Bottom = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
            <MaterialIcons name="queue-music" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Ionicons name="musical-notes-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
            <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Bottom
