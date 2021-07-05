import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";
import firebase from "firebase";
import { AuthenticationContext } from "../../../infrastructure/context/authentication.context";
import { UserContext } from "../../../infrastructure/context/user.context";

import { BackgroundImg } from "./main.screen";

const LoginCover = styled.View`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Input = styled(TextInput)`
  width: 250px;
  margin: 5px;
`;

const AuthButton = styled(Button).attrs({
  colors: "tomato",
})`
  padding: 10px;
  margin: 5px;
`;

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useContext(
    AuthenticationContext
  );

  const [userData, setUserData] = useContext(UserContext);

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        console.log("User account Created and Sign in");
        const user = userInfo.user;
        user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            setUserData(user);
            setIsAuthenticated(true);
          })
          .catch((error) => {
            setError(error);
          });
        console.log(user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
        console.log(error);
        setIsAuthenticated(false);
      });
  };

  return (
    <BackgroundImg
      source={{
        uri: "https://images.unsplash.com/photo-1548684486-f61d163b2f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      }}
    >
      <LoginCover />
      <Container>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          label="Name"
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          label="Email"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
        />
        <AuthButton icon="email" mode="contained" onPress={onSignUp}>
          Sign Up
        </AuthButton>
      </Container>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </BackgroundImg>
  );
};
