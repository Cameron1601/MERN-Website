import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
// Pages
import Navbar from "./elements/Navbar";
import Home from "./elements/Home";
import About from "./elements/About";
import Services from "./elements/Services";
import Footer from "./elements/Footer";
import Charities from "./elements/Charities";
import Login from "./elements/Login";
import Register from "./elements/Register";
import Dashboard from "./elements/Dashboard";
import Logout from "./elements/Logout";
import Volunteers from "./elements/Volunteers";

const App = () => {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        setauth(true);
        setauth1(false);
      }
      if (res.status === 401) {
        setauth(false);
        setauth1(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div>
      <Navbar auth={auth1} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/Volunteers" element={<Volunteers />} />
        <Route path="/login" element={<Login />} auth={auth1} />
        <Route path="/register" element={<Register />} auth={auth1} />
        <Route path="/dashboard" element={<Dashboard />} auth={auth} />
        <Route path="/logout" element={<Logout />} auth={auth} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
