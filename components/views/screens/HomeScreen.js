import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../const/color";
import authStore from "../../../stores/authStore";
import tripStore from "../../../stores/tripStore";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import authstore from "../../../stores/authStore";

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  if (tripStore.isLoading) return <Spinner />;
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("OnBoardScreen");
    console.log("signedOut");
  };

  const categoryIcons = [
    <Icon1
      name="create"
      size={25}
      color={COLORS.primary}
      onPress={() => navigation.navigate("CreateTrip")}
    />,
    <Icon2 name="place" size={25} color={COLORS.primary} />,
    <Icon3 name="user" size={25} color={COLORS.primary} />,
    <Icon4
      name="logout"
      size={25}
      color={COLORS.primary}
      onPress={handleSubmit}
    />,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", { place })}
      >
        <ImageBackground style={style.cardImage} source={{ uri: place.image }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {place.title}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {place.location}
              </Text>
            </View>
            {/* <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
            </View> */}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        {/* <Icon name="sort" size={28} color={COLORS.white} /> */}
        {/* <Icon name="notifications-none" size={28} color={COLORS.white} /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Welcome Back</Text>
            <Text style={style.headerTitle}>
              {authStore.user && authstore.user.username}
            </Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search for Trip"
                style={{ color: COLORS.grey }}
              />
            </View>
          </View>
        </View>

        <ListCategories />
        <Text style={style.sectionTitle}>Trips</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tripStore.trips}
            renderItem={({ item }) => <Card place={item} />}
          />
          {/* <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default observer(HomeScreen);

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    // backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
