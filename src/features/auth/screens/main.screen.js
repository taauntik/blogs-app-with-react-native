import React from "react";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const AuthButton = styled(Button).attrs({
  colors: "tomato",
})`
  padding: 16px;
  margin: 5px;
`;

export const MainScreen = ({ navigation }) => {
  return (
    <BackgroundImg
      source={{
        uri: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      }}
    >
      <Container>
        <AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          mode="contained"
          icon="email"
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </AuthButton>
      </Container>
    </BackgroundImg>
  );
};
