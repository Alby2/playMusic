import {SafeAreaView,Pressable,Text,View,Dimensions, Image} from "react-native"

const {width,height} = Dimensions.get("window")
const SongView = ({ item, index }, parallaxProps) => {
  return (
    <SafeAreaView>
        <View style={{alignItems:"center",justifyContent:"center",marginRight:5,borderRadius:5,flex:1,height:200}}>
            <Image source={item.image?{uri:item.image}:{uri:"https://us.123rf.com/450wm/butenkow/butenkow1603/butenkow160300622/54523736-abstract-logo-for-music-and-sound-vector-pattern.jpg?ver=6"}} style={{width:"80%",borderRadius:5,flex:4}}/>
            {/* <Image source={require("../assets/splash.png")} style={{width:"80%",borderRadius:5,flex:4}}/> */}
            <Text style={{paddingTop:10,color:"#fff",flex:1,lineHeight:1}}>{item.filename.split('_')[0]}</Text>
        </View>
    </SafeAreaView>
  )
}

export default SongView