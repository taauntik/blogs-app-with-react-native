import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { BlogsScreen } from "../../features/blogs/screens/blogs.screen";
import { AddBlogs } from "../../features/blogs/screens/add-blogs.screen";
import { BlogsDetail } from "../../features/blogs/screens/blogs-detail.screen";

const BlogsStack = createStackNavigator();

export const BlogsNavigator = () => {
  return (
    <BlogsStack.Navigator>
      <BlogsStack.Screen name="My Blogs" component={BlogsScreen} />
      <BlogsStack.Screen name="Create" component={AddBlogs} />
      <BlogsStack.Screen name="Detail" component={BlogsDetail} />
    </BlogsStack.Navigator>
  );
};
