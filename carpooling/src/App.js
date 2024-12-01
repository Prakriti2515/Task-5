import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Import all CSS files
import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/ridecard.css';
import './styles/home.css';
import './styles/login.css';
import './styles/signup.css';
import './styles/forgot-password.css';
import './styles/reset-password.css';

// Import components and pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RideCard from "./components/RideCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const location = useLocation();

  // Define the routes where the footer should not be displayed
  const noFooterRoutes = ["/login", "/signup", "/forgot-password"];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
