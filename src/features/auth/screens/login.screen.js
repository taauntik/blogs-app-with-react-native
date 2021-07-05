import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import firebase from "firebase";
import { TextInput, Button } from "react-native-paper";
import { AuthenticationContext } from "../../../infrastructure/context/authentication.context";

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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useContext(
    AuthenticationContext
  );

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentails) => {
        const user = userCredentails.user;
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setIsAuthenticated(false);
      });
  };

  return (
    <BackgroundImg
      source={{
        uri: "https://images.unsplash.com/photo-1548195667-1d329af0a472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      }}
    >
      <LoginCover />
      <Container>
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
        <AuthButton icon="lock-open-outline" mode="contained" onPress={onLogin}>
          Login
        </AuthButton>
      </Container>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </BackgroundImg>
  );
};
