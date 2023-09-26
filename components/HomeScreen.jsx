import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import LocationSearch from "./HomeScreen/LocationSearch";
import GoogleMapComponent from "./HomeScreen/GoogleMapComponent";
import LocationPermission from "./HomeScreen/LocationPermission";
import NavBar from "./NavBar";
import { getAllLocations } from "../scripts/axios";
import { LocationPreview } from "./HomeScreen/LocationPreview";

export default function HomeScreen({ navigation }) {
  const [noLocationsFound, setNoLocationsFound] = useState(false);
  const [userLocation, setUserLocation] = useState({
    latitude: 54.636,
    longitude: -3.3631,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });
  const [locations, setLocations] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(true);

  useEffect(() => {
    setLoadingLocations(true);
    getAllLocations([userLocation.latitude, userLocation.longitude, 1000]).then(
      (data) => {
        setLocations((locations) => [...data]);
        setLoadingLocations(false);
      }
    );
  }, [userLocation]);

  const handlePermissionChange = (isGranted) => {
    if (isGranted) {
      // set user location to device location
      Location.getCurrentPositionAsync({}).then(({ coords }) => {
        const { latitude, longitude } = coords;
        setUserLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0922 * 2,
          longitudeDelta: 0.0421 * 2,
        });
      });
    }
  };

  function handleClick(uid) {
    return navigation.navigate("SingleLocation", { uid });
  }

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <LocationPermission onPermissionChange={handlePermissionChange} />
      <View style={styles.mapContainer}>
        <GoogleMapComponent
          region={userLocation}
          onRegionChange={setUserLocation}
          locations={locations}
          userLocation={userLocation}
          navigation={navigation}
        />
        <View style={styles.locationSearch}>
          <LocationSearch
            style={styles.locationSearch}
            setUserLocation={setUserLocation}
          />
        </View>
      </View>

      <View style={styles.locationList}>
        <ScrollView>
          {locations &&
            locations.map((location) => (
              <TouchableOpacity onPress={() => handleClick(location._id)}>
                <LocationPreview
                  key={location._id}
                  name={location.name}
                  type={location.type}
                  distance={location.distanceKm.toFixed(2)}
                  avStars={location.avStars}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>

      {/* {noLocationsFound && <Text style={styles.noLocationsText}>No locations found nearby!</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff"
  },
  noLocationsText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    margin: 10,
  },
  mapContainer: {
    flex: 3,
    marginBottom: 4,
  },
  locationSearch: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    width: "100%",
  },
  locationList: {
    flex: 2,
  },
});
