import React from "react";
import { NavLink, useLocation } from "react-router";

// logo
import logo from "../assets/logo.png";
import { FilledButton } from "../components/shared/ui/Button";

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
    <header
      className={pathname !== "/" ? "border-b border-primary-border" : ""}
    >
      <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto ">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 object-contain" />
          <span className="font-plusJakartaSans opacity-80 font-extrabold text-3xl">
            Law.BD
          </span>
        </NavLink>

        <ul className="flex items-center space-x-10">
          {navList.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  let base =
                    "navlink font-medium text-lg hover:opacity-100 transition-opacity duration-300 ease-linear";
                  if (isActive) {
                    base += " active opacity-100";
                  } else {
                    base += " opacity-70";
                  }
                  return base;
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <FilledButton to="/contact-us">Contact Now</FilledButton>
      </nav>
    </header>
  );
}

export default Header;
