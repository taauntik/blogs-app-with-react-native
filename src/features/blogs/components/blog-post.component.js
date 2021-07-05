import React from "react";
import styled from "styled-components/native";
import { Card, Avatar } from "react-native-paper";

const BlogCard = styled(Card)`
  margin: 20px;
`;

const Icon = styled(Avatar.Image)`
  position: absolute;
  top: 25;
  right: 25;
`;

export const BlogPost = ({ blog = {} }) => {
  const {
    name = "Windows 11",
    thumbnail = "https://www.techadvisor.com/cmsdata/features/3805403/windows-11-release-date-price-features_thumb800.jpg",
    photoURL = "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  } = blog;
  return (
    <BlogCard elevation={5}>
      <Card.Cover source={{ uri: thumbnail }} />
      <Card.Title title={name} />
      <Icon source={{ uri: photoURL }} size={32} />
    </BlogCard>
  );
};
