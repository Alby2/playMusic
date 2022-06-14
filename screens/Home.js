import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView,Image } from 'react-native';
import { Ionicons, SimpleLineIcons, AntDesign, MaterialIcons } from "@expo/vector-icons"

 const { width, height } = Dimensions.get("window")
const Home = () => {
   
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.header}>
                    
                    <Text style={styles.textheader}>Music</Text>
                    
                    <TouchableOpacity style={{paddingTop:5}} >
                        <SimpleLineIcons name="logout" size={24} color="#ff7f00" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems: 'center',}}>
                <Image style={styles.stretch}  source={{uri:"https://direct.rhapsody.com/imageserver/images/alb.524442149/600x600.jpg"}} />
                <Text style={{marginTop:20,fontSize:25,color:"#ff7f00",fontWeight:"500"}}>Ninho N.I</Text>
                </View>
                <View >
                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:10,paddingVertical: 15,}}>
                        <TouchableOpacity>
                            <MaterialIcons name="queue-music" size={20} color="#ff7f00" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="musical-notes-outline" size={30} color="#ff7f00" />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <AntDesign name="hearto" size={20} color="#ff7f00" />
                        </TouchableOpacity>

                    </View>
                </View>
            </View></SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    main: {
        flex: 1,
  
    },
    header: {
       
        paddingTop: 50,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent:"space-between",
       
        
    },
    textheader: {
        color: "#ff7f00",
        fontSize:25,
        fontFamily: 'Roboto',

    },
    stretch: {
        marginTop:100,
        width: width-80,
        height: 280,
        resizeMode: 'stretch',
        borderRadius: 15,
    }

})
export default Home;