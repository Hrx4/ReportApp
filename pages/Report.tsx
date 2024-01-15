import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Arrow from "react-native-vector-icons/AntDesign";
import { firebase } from "../config";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";
const Report = ({ navigation }: any) => {
  const data = [
    {
      note: "Mid-terms9324.pdf",
    },
    {
      note: "Unit-test1_9324.pdf",
    },
    {
      note: "Unit-test2_9324.pdf",
    },
  ];

  const [reportData, setReportData] = useState({} as any);

  const saveAndroidFile = async (fileUri: any, fileName = "File") => {
    try {
      const fileString = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (!permissions.granted) {
        return;
      }

      try {
        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          fileName,
          "application/pdf"
        )
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, fileString, {
              encoding: FileSystem.EncodingType.Base64,
            });
            alert("Report Downloaded Successfully");
          })
          .catch((e) => {});
      } catch (err: any) {
        throw new Error(err);
      }
    } catch (err) {}
  };

  const handleDownload = async (url: any, fileName: any) => {
    try {
      const fileUri = FileSystem.cacheDirectory + fileName;

      const downloadFile = FileSystem.createDownloadResumable(url, fileUri, {});
      const { uri }: any = await downloadFile.downloadAsync();
      if (Platform.OS == "android") saveAndroidFile(uri, fileName);
      Alert.alert("File saved");
    } catch (error) {
      console.log("====================================");
      console.log(error, "this is error");
      console.log("====================================");
    }
  };

  useEffect(() => {
    firebase
      .app()
      .storage("gs://reportapp-764a7.appspot.com")
      .ref("list")
      .listAll()
      .then(async (data) => {
        const pdfData = await Promise.all(
          data.items.map(async (item) => {
            const pdfName = item.name;
            const pdfUrl = await item.getDownloadURL();
            return { pdfName: pdfName, pdfUrl: pdfUrl };
          })
        );

        setReportData(pdfData);
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  }, []);

  const renderItem = ({ item }: any) => (
    <View
      style={{
        height: 70,
        borderRadius: 8,
        borderColor: "#9E77ED",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginTop: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            height: 38,
            width: 38,
            borderRadius: 100,
            borderColor: "#5140B1",
            backgroundColor: "#978CD0",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderWidth: 1,
          }}
        >
          <Image source={require("../assets/description.png")} />
        </View>
        <Text style={{ fontSize: 14, color: "#344054" }}>{item.pdfName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleDownload(item.pdfUrl, item.pdfName)}
      >
        <Image source={require("../assets/cloud_download.png")} />
      </TouchableOpacity>
    </View>
  );

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Arrow name="left" size={20} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Profile</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <Image source={require("../assets/notification.png")} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={reportData}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default Report;
