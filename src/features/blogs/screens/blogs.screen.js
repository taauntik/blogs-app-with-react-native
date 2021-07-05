import React from "react";
import { ScrollView } from "react-native";
import { BlogPost } from "../components/blog-post.component";
import { FloatingButton } from "../components/floating-button.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const BlogsScreen = ({ navigation }) => {
  const onPress = () => navigation.navigate("Create");
  return (
    <SafeArea>
      <ScrollView>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </ScrollView>
      <FloatingButton onPress={onPress} />
    </SafeArea>
  );
};
