import React, { createContext, useState, useEffect } from "react";
import fire from "./firebaseConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAuth, setIsAuth] = useState(false);
console.log(isAuth)

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        setIsAuth(true);
      } else {
        setUser("");
        setIsAuth(false);
      } 
    });
  },[]);

  return (
    <AuthContext.Provider
      value={{ value: [user, setUser], value2: [isAuth,setIsAuth] }}
    >
      {children}
    </AuthContext.Provider>
  );
};
