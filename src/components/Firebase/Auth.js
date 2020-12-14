import React, { createContext, useState, useEffect } from "react";
import fire from "./firebaseConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [userId, setUserId] = useState("");


  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setUser(user.email);
        setLoaded(false);
      } else {
        setUser(null);
        setLoaded(true);
      }
    });
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        value: [user, setUser],
        czoko: loaded,
        userId: userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
