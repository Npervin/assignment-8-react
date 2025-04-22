import React from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router";

// logo
import logo from "../assets/logo.png";

const navList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Bookings",
    path: "/my-bookings",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex items-center justify-between py-6 max-w-7xl px-4 mx-auto">
      <NavLink to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 object-contain" />
        <span className="font-plusJakartaSans opacity-80 font-extrabold text-3xl">
          Law.BD
        </span>
      </NavLink>
      <nav>
        <ul className="flex items-center space-x-10">
          {navList.map((item, idx) => (
            <li
              key={idx}
              className={`navlink ${
                pathname === item.path ? "active opacity-100" : "opacity-70"
              } font-medium text-lg hover:opacity-100 transition-opacity duration-300 ease-linear`}
            >
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink
        to="/contact-us"
        className="bg-primary-btn text-xl font-semibold text-white rounded-full px-4 leading-normal py-2"
      >
        Contact Now
      </NavLink>
    </header>
  );
}

export default Header;
