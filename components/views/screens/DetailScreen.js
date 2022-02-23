import { observer } from "mobx-react";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import tripStore from "../../../stores/tripStore";
import COLORS from "../../const/color";
import authstore from "../../../stores/authStore";

const DetailsScreen = ({ navigation, route }) => {
  const { place } = route.params;
  const handleRemove = () => {
    tripStore.removeTrips(place._id);
    navigation.navigate("HomeScreen");
  };
  const handleUpdate = () => {
    tripStore.updateTrips(trip._id);
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={{ uri: place.image }}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              color: COLORS.white,
              marginBottom: 20,
            }}
          >
            {place.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{ color: COLORS.white, fontWeight: "bold", fontSize: 20 }}
            >
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon2
            name="trash-o"
            color={COLORS.primary}
            size={30}
            onPress={handleRemove}
          />
        </View>
        <View style={style.iconContainer2}>
          <Icon2
            name="edit"
            color={COLORS.primary}
            size={30}
            onPress={handleUpdate}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {place.location}
          </Text>
        </View>

        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          About the trip
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>
          {place.description}
        </Text>
      </View>
      <View style={style.footer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.white,
            }}
          >
            By: "{place.owner?.profile}"
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: COLORS.grey,
              marginLeft: 2,
            }}
          ></Text>
        </View>

        {authstore.user && authstore.user._id == place.owner && (
          <View style={style.bookNowBtn}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              View Profile
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default observer(DetailsScreen);
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 100,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },

  iconContainer: {
    height: 60,
    width: 60,
    top: 40,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    left: 510,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer2: {
    height: 60,
    width: 60,
    top: -95,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: -510,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    top: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
