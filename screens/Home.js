import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
  Modal,
  TextInput
} from "react-native";
import {
  Ionicons,
  Entypo,
  Feather
} from "@expo/vector-icons";

import { AudioList } from "../context/AudioListContext";
import Carousel from "react-native-snap-carousel";
import data from "../layouts/data";
import SongView from "../layouts/SongView";


const { width, height } = Dimensions.get("window");

const Home = () => {
  const [modalNewPlayList, setModalNewPlayList] = useState(false)
  const listAudios = useContext(AudioList);
  console.log(listAudios);
  const settings = {
    sliderWidth: width,
    sliderHeight: 100,
    itemWidth: width/3,
    data: listAudios.list,
    renderItem: SongView,
    hasParallaxImages: true,
  };
  const showModalNewPlayList = ()=>{
    setModalNewPlayList(true)
  }
  const colorApk = "#ff7f00"
  return (
    <SafeAreaView style={{flex: 1,paddingTop: StatusBar.currentHeight,backgroundColor:"#000"}}>
      
        
          <Modal animationType="fade"  transparent={true}  visible={modalNewPlayList} onRequestClose={()=>setModalNewPlayList(false)}>
            <View style={{backgroundColor:"#ff7f00ef",position:"absolute",bottom:0,left:0,right:0,zIndex: 1000,minHeight:200,paddingHorizontal:20,paddingVertical:20,borderTopRightRadius:25,borderTopLeftRadius:25,alignItems:"center"}} >
            <Text style={{color:"white"}}>Entrer le nom de votre playlist</Text>
            <TextInput value="text" style={{width:width-50,borderWidth:1,height:40,margin:20,borderColor:"white"}} />
            </View>
          </Modal>
      
      <View style={{paddingTop:10,flex:1}}>
        <ScrollView style={{width:width,marginBottom:25}}>
          <View style={{width:width,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Image style={{width:90,height:50}} source={{uri:"https://us.123rf.com/450wm/butenkow/butenkow1603/butenkow160300622/54523736-abstract-logo-for-music-and-sound-vector-pattern.jpg?ver=6"}} />
            </View>
            <TouchableOpacity>
              <Ionicons name="ios-settings-outline" size={30} color={colorApk} />
              {/*  */}
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
            <Carousel {...settings} />
          </View>
          <View style={{width:width,justifyContent:"space-between",paddingHorizontal:10,flexDirection:"row"}}>
            <Text style={{fontSize:15,color:colorApk}} color={colorApk}>Playlist</Text>
            <Pressable onPress={()=>showModalNewPlayList()}>
                <Text style={{color:colorApk}} color={colorApk}>New Playlist</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View style={{width:width,height:60,paddingHorizontal:width/30}}>
        <View style={{flexDirection:"row",height:60,alignItems:"center",justifyContent:"space-between",paddingHorizontal:25,backgroundColor:"#ff7f002f",borderRadius:20}}>
              <Entypo name="folder-music" size={30} color="white" />
              
              <Ionicons name="ios-home-outline" size={30} color={colorApk} />
              <Feather name="music" size={30} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021",
    paddingTop: StatusBar.currentHeight,
  },
  main: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical:10,
    justifyContent: "space-between",
  },
  textheader: {
    color: "#ff7f00",
    fontSize: 25,
    fontFamily: "Roboto",
  },
  stretch: {
    marginTop: 100,
    width: width - 80,
    height: 280,
    resizeMode: "stretch",
    borderRadius: 15,
  },
});
export default Home;
