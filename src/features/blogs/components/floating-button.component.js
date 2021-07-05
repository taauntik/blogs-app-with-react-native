import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

const RoundedButton = styled(TouchableOpacity)`
  position: absolute;
  width: 50;
  height: 50;
  align-items: center;
  justify-content: center;
  right: 30;
  bottom: 30;
  background: blue;
  border-radius: 999px;
`;

const ButtonText = styled(Text)`
  font-size: 30px;
  color: white;
`;

export const FloatingButton = ({ onPress }) => {
  return (
    <RoundedButton onPress={onPress}>
      <ButtonText>+</ButtonText>
    </RoundedButton>
  );
};
