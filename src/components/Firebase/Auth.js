import React, { createContext, useState, useEffect } from "react";
import fire from "./firebaseConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [userId, setUserId] = useState("");
  const [logInUser, setLogInUser] = useState(
    localStorage.getItem("logIn") === "true"
  );

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setUser(user.email);
        setLoaded(false);
        setLogInUser(true);
      } else {
        setUser(null);
        setLoaded(true);
        localStorage.removeItem("logIn");
      }
    });
  }, [user]);

  useEffect(() => {
    localStorage.setItem("logIn", logInUser);
  }, [logInUser]);

  return (
    <AuthContext.Provider
      value={{
        value: [user, setUser],
        czoko: loaded,
        userId: userId,
        logInUser: logInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
