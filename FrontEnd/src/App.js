import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/PrivateRoute";
// Pages
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Charities from "./component/Charities";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Volunteers from "./component/Volunteers";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/UserDashboard" element={<PrivateRoute />}>
          <Route exact path="/UserDashboard" element={<UserDashboard />} />
        </Route>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/Volunteers" element={<Volunteers />} />
        <Route path="*" element={<div>Page Not Found!</div>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
