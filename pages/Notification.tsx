import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Arrow from "react-native-vector-icons/AntDesign";
import {firebase} from "../config"

const Notification = ({navigation}:any) => {

    const [notifyData, setNotifyData]= useState([] as any) 

useEffect(() => {
   firebase.firestore().collection("notify").get().then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setNotifyData(data)
  }).catch((err)=>{
    console.log('====================================');
    console.log(err);
    console.log('====================================');
   })

}, [])


const renderItem = ({item} : any)=>(
    
            <View style={{height:123 , padding:20 , backgroundColor:"#DCD9EF" , borderRadius:16 , gap:5 , marginTop:10}}>
        <Text style={{fontSize:14 , lineHeight:21 , color:"#2B2B30" , fontWeight:"400" , textAlign:"left"}}>
            {item.notifyData}
        </Text>
        <Text style={{marginLeft:"auto" , fontSize:10 , color:"#2B2B30"}}>
        Jan 12, 2024
        </Text>

    </View>
       
)


  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View
          style={{
            height: 42,
            width: "100%",
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Arrow name="left" size={20} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Profile</Text>
          </View>
          <Image source={require("../assets/notification.png")} />
        </View>
            <FlatList  style={{marginTop:20 , gap:10}}
            data={notifyData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            />

      </SafeAreaView>
    </>
  );
};

export default Notification;
