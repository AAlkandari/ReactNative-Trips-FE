import {
  Link,
  NavigationContainer,
  useLinkProps,
} from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
} from "native-base";
import React, { useState } from "react";
import StackNavigation from "../Navigation/StackNavigation";
const Signin = ({ navigation }) => {
  const { user, setUser } = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    authStore.signin(user);
    navigation.goBack;
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;
