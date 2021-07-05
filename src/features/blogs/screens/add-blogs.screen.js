import React from "react";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";

const Container = styled.View`
  margin: 20px;
`;

const Title = styled.TextInput`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.TextInput`
  font-size: 15px;
`;

export const AddBlogs = () => {
  return (
    <SafeArea>
      <Container>
        <Title placeholder="Write your fantastic title" />
        <Description placeholder="write your description" />
      </Container>
    </SafeArea>
  );
};
