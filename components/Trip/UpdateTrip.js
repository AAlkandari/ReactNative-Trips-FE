import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import tripStore from "../../stores/tripStore";
import {
  Button,
  FormControl,
  Input,
  VStack,
  HStack,
  Center,
  Box,
  Heading,
} from "native-base";
import COLORS from "../const/color";
import { observer } from "mobx-react";

const UpdateTrip = ({ navigation, route }) => {
  const { trip } = route.params;
  const [updatedTrips, setUpdatedTrips] = useState({
    title: trip.title,
    image: trip.image,
    description: trip.description,
  });

  const handleUpdate = () => {
    console.log(
      "🚀 ~ file: UpdateTrip.js ~ line 25 ~ handleUpdate ~ trip",
      trip
    );
    tripStore.updateTrips(trip._id, updatedTrips, navigation);

    setUpdatedTrips({
      title: "",
      image: "",
      description: "",
    });
    navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Center w="100%">
        <Box safeArea p="10" py="12" w="90%" maxW="290">
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Update Your Trip !{" "}
          </Heading>
          <View>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Trip Name: </FormControl.Label>
                <Input
                  onChangeText={(title) =>
                    setUpdatedTrips({ ...updatedTrips, title })
                  }
                  placeholder="Please Enter Your Trip Name"
                  value={trip.title}
                ></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Image: </FormControl.Label>
                <Input
                  onChangeText={(image) =>
                    setUpdatedTrips({ ...updatedTrips, image })
                  }
                  placeholder="Please Put Your Image Link"
                ></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Description: </FormControl.Label>
                <Input
                  onChangeText={(description) =>
                    setUpdatedTrips({ ...updatedTrips, description })
                  }
                  placeholder="Please Enter Your Description"
                ></Input>
              </FormControl>
              <VStack mt="6" justifyContent="center">
                <Button style={styles.btn} onPress={handleUpdate}>
                  Update Trip
                </Button>
                <Button
                  style={styles.btn}
                  onPress={() => navigation.replace("HomeScreen")}
                >
                  Back
                </Button>
              </VStack>
            </VStack>
          </View>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

export default observer(UpdateTrip);

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.primary,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
