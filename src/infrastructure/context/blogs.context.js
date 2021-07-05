import React, { createContext, useState } from "react";
import firebase from "firebase";

const db = firebase.firestore();

export const BlogsContext = createContext();

export const BlogsContextProvider = ({ children }) => {
  const createBlog = () => {};

  return <BlogsContext.Provider>{children}</BlogsContext.Provider>;
};
