// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(true);
        setUserDetails(decoded);
        setAuthHeader(token);
      } catch (error) {
        console.error("Error decoding token: ", error);
      }
    }
  }, []);

  const setAuthHeader = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  const login = async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:10000/v1/api/user/login`,
        formData
      );
      const { token } = response.data;
      localStorage.setItem("user", token);
      setAuthHeader(token);
      const decoded = jwtDecode(token);
      setIsLoggedIn(true);
      setUserDetails(decoded);
      
    } catch (error) {
     console.log(error)
    }
  };

  const signup = async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:10000/v1/api/user/signup`,
        formData
      );
      const { token } = response.data;
      localStorage.setItem("user", token);
      setAuthHeader(token);
      const decoded = jwtDecode(token);
      setIsLoggedIn(true);
      setUserDetails(decoded);
      
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`http://localhost:10000/v1/api/user/logout`);
      toast.success("Successfully Logged Out!");
    } catch (error) {
      console.error("Error during logout: ", error);
      if (error.response && error.response.status === 401) {
        toast.success("Already Login expired!");
      } else {
        toast.error("Error during logout");
        return;
      }
    }

    localStorage.removeItem("user");
    setAuthHeader(null);
    setIsLoggedIn(false);
    setUserDetails({});
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userDetails, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
