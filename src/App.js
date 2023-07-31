import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <hr className="navbarHeading"/>
        {/* <img
          id="frame"
          src="https://m.media-amazon.com/images/I/71jVP5NuuTL._AC_UF1000,1000_QL80_.jpg"
          alt=""
        /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="//onlineyogaclasses" element={<About />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
