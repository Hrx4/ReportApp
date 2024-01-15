import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const Events = () => {

    const data = [
        {
          image: require("../assets/summarize1.png"),
          text: "Science Fair Showcase",
          date : "18",
          month : "JAN"
        },
        {
          image: require("../assets/emoji_events.png"),
          text: "Math Olympiad",
          date : "24",
          month : "JAN"
        },
        {
          image: require("../assets/calculate.png"),
          text: "Sports Day Extravaganza",
          date : "27",
          month : "JAN"
        },
        {
          image: require("../assets/emoji_events.png"),
          text: "Payment",
          date : "5",
          month : "FEB"
        },
        {
            image: require("../assets/summarize1.png"),
            text: "Test",
            date : "10",
            month : "FEB"
          },
      ];

  return (
    <>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            marginLeft: 8,
          }}
        >
          Upcomming Events (07)
        </Text>
        {
            data.map((item , index)=>(
                <View
          style={{
            height: 52,
            backgroundColor: "#DCD9EF",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingRight: 10,
            paddingLeft: 10,
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image source={item.image} />
            <Text>{item.text}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 10 }}>{item.month}</Text>
            <Text style={{ fontSize: 24 }}>{item.date}</Text>
          </View>
        </View>
            ))
        }
        
       
      </View>
    </>
  );
};

export default Events;
