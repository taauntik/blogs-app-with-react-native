import React, { useContext } from "react";

import { AuthenticationContext } from "../context/authentication.context";
import { AuthNavigator } from "./auth.navigator";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(
    AuthenticationContext
  );
  return isAuthenticated ? <AuthNavigator /> : <AppNavigator />;
};
