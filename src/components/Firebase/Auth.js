import React, { createContext, useState, useEffect } from "react";
import fire from "./firebaseConfig";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState("");
  const [loaded, setLoaded] = useState(true);

  console.log(loaded)

  useEffect(() => {
    const authorizated = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        setLoaded(false);
      } else {
        setUser(null);
        setLoaded(true)
      }
    });

    return () => authorizated();
  }, [user]);

  return (
    <AuthContext.Provider value={{ value: [user, setUser], czoko: loaded}}>
     
        {children}
      
    </AuthContext.Provider>
  );
};
