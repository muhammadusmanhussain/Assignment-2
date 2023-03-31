import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "./Components/About";
import { Home } from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Context";

import './App.css';

export const App = () => {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route path="login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
};
