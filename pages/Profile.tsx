import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Arrow from "react-native-vector-icons/AntDesign";
import {firebase} from '../config'

const Profile = ({navigation}:any) => {

    const [profileData, setProfileData]= useState({} as any) 

    useEffect(() => {
       firebase.firestore().collection("profile").get().then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProfileData(data[0])
      }).catch((err)=>{
        console.log('====================================');
        console.log(err);
        console.log('====================================');
       })
       console.log('====================================');
       console.log(profileData);
       console.log('====================================');
    
    }, [])

    

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
          <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
          <Image source={require("../assets/notification.png")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            height: 70,
            zIndex: 100,
            bottom: 10,
            width: "100%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Image source={require("../assets/home1.png")} />
          </TouchableOpacity>
          <Image source={require("../assets/calendar_today.png")} />
          <View
            style={{
              backgroundColor: "#978CD0",
              height: 38,
              width: 38,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <Image source={require("../assets/account_box1.png")} />
          </View>
        </View>
        <View style={{ height: 412, marginTop: 20 , justifyContent:"space-between"}}>
          <View
            style={{
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 24 }}>Kamal Paul</Text>
            <Image source={require("../assets/avatar.png")} />
          </View>
          <View
            style={{
              height: 324,
              backgroundColor: "#DCD9EF",
              borderRadius:20,
              padding:20,
              justifyContent:"space-evenly"
            }}
          >
            
                    <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Student ID Number:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData?.id}
                        </Text>
                    </View>
                    <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Class/Grade:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData.class}
                        </Text>
                    </View><View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Contact Number:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData.contact}
                        </Text>
                    </View><View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Email Address:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData.email}
                        </Text>
                    </View><View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Parent/Guardian:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData.parent}
                        </Text>
                    </View><View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Parent Contact:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData.parentContact}
                        </Text>
                    </View><View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{color:"#666666" , fontSize:13}}>
                        Address:
                        </Text>
                        <Text style={{color:"#666666", fontSize:13}}>
                            {profileData.address}
                        </Text>
                    </View>
                
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
