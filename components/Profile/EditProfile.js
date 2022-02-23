import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
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
import profileStore from "../../stores/profileStore";

const EditProfile = ({ navigation, route }) => {
  const { userProfile } = route.params;
  const [editProfile, setEditProfile] = useState({
    image: userProfile.image,
    bio: userProfile.bio,
  });
  const handleUpdate = () => {
    profileStore.editProfile(editProfile, userProfile._id, navigation);
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
            Update Your Profile
          </Heading>
          <View>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Bio: </FormControl.Label>
                <Input
                  onChangeText={(bio) =>
                    setEditProfile({ ...editProfile, bio })
                  }
                  placeholder="Please Enter Your Trip Name"
                ></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Image: </FormControl.Label>
                <Input
                  onChangeText={(image) =>
                    setEditProfile({ ...editProfile, image })
                  }
                  placeholder="Please Put Your Image Link"
                ></Input>
              </FormControl>

              <VStack mt="6" justifyContent="center">
                <Button style={styles.btn} onPress={handleUpdate}>
                  Update Profile
                </Button>
                <Button
                  style={styles.btn}
                  onPress={() => navigation.replace("UserProfile")}
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

export default EditProfile;

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
