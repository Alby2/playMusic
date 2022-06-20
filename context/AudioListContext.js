import React, { Children, createContext,useState,useEffect } from 'react'
import { View,Alert } from 'react-native'
import * as MediaLibrary from 'expo-media-library';


export const AudioList = createContext();

const AudioListContext = ({children}) => {
    const [listAudio, setListAudio] = useState([])
    const requestPermission = async()=>{
        const {status,canAskAgain} = await MediaLibrary.requestPermissionsAsync()

        if (status === 'denied' && canAskAgain) {
            Alert.alert("Permission pour acceder a vos audios","L'application a besoin de votre permission pour acceder aux audios",[
                {
                    text:"Fermer",
                    onPress:()=>{}
                },
                {
                    text:"D'accord",
                    onPress:()=>{requestPermission()}
                }
            ])
        }
        if(status === 'denied' && !canAskAgain){
            Alert.alert("Impossible de fonctionne","L'application ne peut pas fonctionner sans votre permission",[{
                text:"Fermer",
                onPress:()=>{}
            }])
        }
    }
    const getPermission = async()=>{
        const permission = await MediaLibrary.getPermissionsAsync()
        if(permission.granted){
            getAudioList()
        }
         if(!permission.granted && permission.canAskAgain){
          requestPermission()
        }
       console.log(permission);
    }
    const getAudioList = async()=>{
        let listAudios = await MediaLibrary.getAssetsAsync({
            mediaType:"audio",
           
        })
        listAudios = await MediaLibrary.getAssetsAsync({
            mediaType:"audio",
            first:10
        })
        setListAudio(listAudios.assets);
    }
    useEffect(() => {
        getPermission()
       
    }, ["s"])
  return (
    <AudioList.Provider value={{list:listAudio}}>
        {children}
    </AudioList.Provider>
  )
}

export default AudioListContext;
