import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import all CSS files
import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/ridecard.css';
import './styles/home.css';
import './styles/login.css';
import './styles/signup.css';

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
