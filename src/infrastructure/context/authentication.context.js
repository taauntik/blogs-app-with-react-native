import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthenticationContext.Provider
      value={[isAuthenticated, setIsAuthenticated]}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
