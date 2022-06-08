import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,PermissionsAndroid } from 'react-native';
import Navigations from './routes/Navigations';
import React,{useEffect,useState} from 'react';

const App = ()=> {

  const [page, setPage] = useState(true)
  const accordPermision = async() => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,{
        title:"Acces aux medias",
        message:"J'aimerais avoir access a tes medias ",
        buttonPositive:"D'accord",
        buttonNegative:"Non",
        buttonNeutral:"Pas maintenant"
      })
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log("Super");
      }else if(granted === PermissionsAndroid.RESULTS.DENIED){
          console.log("Echec");
      }
    } catch (error) {
      console.log("Echec Total");
    }
  }
  useEffect(accordPermision, [])
  
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
