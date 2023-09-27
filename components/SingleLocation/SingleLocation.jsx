import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import NavBar from "../NavBar";
import { getLocationByID, test } from "../../scripts/axios";
import { useEffect, useState } from "react";
import { styles, props } from "../../styles/singleLocation";
import ApiDataOthersCard from "./components/ApiDataOthersCard";
import UserDataCard from "./components/UserDataCard";
import SwimReviewData from "./components/SwimReviewData";
import ApiDataSeaCard from "./components/ApiDataSeaCard";
import InfoCard from "./components/InfoCard";
import { useFonts } from "expo-font";

export function capitalise(str) {
  return str[0].toUpperCase() + str.split("").slice(1).join("");
}

export default function SingleLocation({
  route: {
    params: { uid },
  },
  navigation,
}) {
  const [userData, setUserData] = useState({});
  const [apiData, setApiData] = useState({});
  const [swimsData, setSwimsData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [infoData, setInfoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Regular_Italic": require("../../assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  });

  useEffect(() => {
    setIsLoading(true);
    getLocationByID(uid)
      .then((data) => {
        const { apiData, userData, swims, location, info } = data;
        const requestedUserData = userData;
        const requestedApiData = apiData;
        const requestedSwimsData = swims;
        const requestedLocationData = location;
        const requestInfoData = info;
        setUserData((userData) => requestedUserData);
        setSwimsData((swimsData) => requestedSwimsData);
        setApiData((apiData) => requestedApiData);
        setLocationData((locationData) => requestedLocationData);
        setInfoData((infoData) => requestInfoData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function formatCoords(coords) {
    return `${coords[0].toFixed(4)}°N, ${coords[0].toFixed(4)}°W`;
  }

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} size="xlarge" />;
  }

  return (
    <KeyboardAvoidingView
      behavior={props.KeyboardAvoidingView.behavior}
      keyboardVerticalOffset={props.KeyboardAvoidingView.keyboardVerticalOffset}
      style={styles.KeyboardAvoidingView}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <NavBar navigation={navigation} />
            <View style={styles.display}>
              {!Object.keys(locationData).length ? (
                <>
                  <ActivityIndicator size="large" />
                </>
              ) : (
                <View style={styles.title}>
                  <Text style={styles.title__text}>{locationData.name}</Text>
                  <Text style={styles.title__type}>
                    {capitalise(locationData.type)}
                  </Text>
                  <Text style={styles.title__coords}>
                    {formatCoords(locationData.coords)}
                  </Text>
                </View>
              )}
              <UserDataCard userData={userData} />
              {!Object.keys(apiData).length &&
              !Object.keys(locationData).length ? (
                <>
                  <ActivityIndicator size="large" />
                </>
              ) : locationData.type === "sea" ? (
                <ApiDataSeaCard apiData={apiData} uid={uid} />
              ) : (
                <ApiDataOthersCard apiData={apiData} uid={uid} />
              )}

              <InfoCard info={infoData} />
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("PostSwims", {
                    location: {
                      name: locationData.name,
                      id: locationData._id,
                    },
                  })
                }
              >
                <View>
                  <Text style={styles.postButton}>Record a swim!</Text>
                </View>
              </TouchableWithoutFeedback>
              <SwimReviewData swimsData={swimsData} navigation={navigation} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
