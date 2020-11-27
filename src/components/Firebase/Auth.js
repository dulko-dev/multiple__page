import React, { createContext, useState, useEffect } from "react";
import fire from "./firebaseConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser("");
      }
    });
  }, []);

  return <AuthContext.Provider value={{value:[user,setUser]}}>{children}</AuthContext.Provider>;
};
