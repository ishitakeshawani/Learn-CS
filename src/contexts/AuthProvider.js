import { React, useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [encodedToken, setEncodedToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const userData = localStorage.getItem("user");
      const value = await axios.post("/api/auth/signup", userData);
      setEncodedToken(value.data.encodedToken);
    };
    fetch();
  }, [encodedToken]);

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <authContext.Provider
      value={{ user, setUser, encodedToken, isLoggedIn, setIsLoggedIn, logOut }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
