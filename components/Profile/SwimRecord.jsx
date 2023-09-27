import StarRating from "react-native-star-rating";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/swimReviewData";
import { useFonts } from "expo-font";
import { Stats } from "../reuse/Stats";

export function SwimRecord({ swim, navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SingleLocation", { uid: swim.location.id });
      }}
    >
      <View style={styles.swimRecord}>
        <View style={styles.swimRecord__text}>
          <Text style={styles.swimRecord__name}>{swim.location.name}</Text>
          <Text style={styles.swimRecord__date}>
            {new Date(swim.date).toDateString()}
          </Text>
        </View>
        <View style={styles.swimRecord__stats}>
          <View style={styles.starRatingDisplay}>
            <StarRating
              disabled={true}
              maxStars={5}
              starSize={18}
              rating={swim.stars}
              fullStarColor="#FFC033"
              emptyStarColor="#DBDBDB"
            />
          </View>
          <Stats data={swim} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
