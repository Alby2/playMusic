    import React from 'react'
import { View,TouchableOpacity,Text,Dimensions } from 'react-native'
import { EvilIcons,MaterialCommunityIcons  } from '@expo/vector-icons';
    const {width,height} = Dimensions.get("window")
    const ListAudio = ({name}) => {
      return (
        
        <TouchableOpacity>
            <View style={{width:width-20,height:height/10,marginHorizontal:10,paddingHorizontal:3,borderRadius:25,backgroundColor:"white",shadowColor:"#ff7f0084",shadowOpacity:1,marginBottom:4,borderColor:"#ff7f0084",borderStyle:"solid",shadowOffset:{width: 10,height:5},}}>
                <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",width:width-20}}>
                    <View style={{flexDirection:"row",width:width-60,}}>
                        <MaterialCommunityIcons name="music" size={height/12} color="#ff7f0084" />
                        <View style={{flex:1,justifyContent:"center",alignItems:"center",paddingLeft:10}}>
                            <Text style={{color: "#ff7f00",fontSize: 18,fontFamily: "Roboto",width:width-100,overflow:"hidden"}}>{name}</Text>
                        </View>
                    </View>
                    <View>
                        <EvilIcons name="play" size={height/12} color="#ff7f0084" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
      )
    }
    
    export default ListAudio