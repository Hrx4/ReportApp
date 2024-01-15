import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

const QuickLinks = ({ navigation }: any) => {
  const data = [
    {
      image: require("../assets/summarize.png"),
      text: "Report",
    },
    {
      image: require("../assets/article.png"),
      text: "Syllabus",
    },
    {
      image: require("../assets/square_foot.png"),
      text: "Unit Test",
    },
    {
      image: require("../assets/credit_card.png"),
      text: "Payment",
    },
  ];
  return (
    <>
      <View
        style={{
          height: 140,
          justifyContent: "space-between",
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
          Quick Links
        </Text>
        <View
          style={{
            height: 110,
            borderRadius: 20,
            backgroundColor: "#DCD9EF",
            flexDirection: "row",
          }}
        >
          {data.map((item, index) => (
            <View
              style={{
                justifyContent: "space-around",
                flexDirection: "column",
                height: "80%",
                marginTop: "auto",
                marginBottom: "auto",
                flex: 1,
                alignItems: "center",
              }}
              key={item.text}
            >
              <View
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 100,
                  borderColor: "#5140B1",
                  backgroundColor: "#978CD0",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                }}
              >
                {item.text === "Report" ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Report")}
                  >
                    <Image source={item.image} />
                  </TouchableOpacity>
                ) : (
                  <Image source={item.image} />
                )}
              </View>
              <Text
                style={{ fontWeight: "400", fontSize: 13, color: "#666666" }}
              >
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default QuickLinks;
