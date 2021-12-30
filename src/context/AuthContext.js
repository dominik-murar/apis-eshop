import React, { useState } from "react";

export const AuthContext = React.createContext({
  loggedUser: "",
  setLoggedUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("");
  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};
