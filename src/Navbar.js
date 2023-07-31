import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const navigations = [
  { label: "Home", path: "/" },
  // { label: "Online Yoga Classes", path: "/onlineyogaclasses" },
  // { label: "Yoga Classes at Center", path: "/yogaclassesatcenter" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src="https://i.postimg.cc/XYLq7vH2/images-removebg-preview.png"
          alt=""
        />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5mvFEAHdOcT_W1RxGUn2kyFckcxWveEQbg&usqp=CAU" alt="" /> */}
      </div>
      <nav>
        <ul>
          {navigations.map(({ path, label }) => (
            <li>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
