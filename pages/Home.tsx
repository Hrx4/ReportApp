import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import Down from "react-native-vector-icons/AntDesign";
import Events from "../components/Events";
import QuickLinks from "../components/QuickLinks";
const Home = ({ navigation }: any) => {
  return (
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
        <Image source={require("../assets/hamburger.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
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
          <Image source={require("../assets/home.png")} />
        </View>
        <Image source={require("../assets/calendar_today.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../assets/account_box.png")} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 203,
            width: "100%",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <View style={{ height: 39, marginLeft: 8 }}>
            <Text>Welcome back</Text>
            <Text style={{ fontSize: 24, fontWeight: "500" }}>Kamal Paul</Text>
          </View>
          <View
            style={{
              height: 144,
              backgroundColor: "#978CD0",
              borderRadius: 20,
              marginTop: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text style={{ color: "#DCD9EF" }}>Attendance</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 20, color: "#DCD9EF", fontWeight: "400" }}
                >
                  Jan 2024{" "}
                </Text>
                <Down name="down" size={20} color="#DCD9EF" />
              </View>
            </View>
            <CircularProgress
              value={93}
              valueSuffix={"%"}
              progressValueColor={"#DCD9EF"}
              activeStrokeColor={"#DCD9EF"}
            />
          </View>
        </View>
        <QuickLinks navigation={navigation} />
        <Events />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
