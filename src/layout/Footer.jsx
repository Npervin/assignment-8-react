import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo-footer.png";

// icons
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";

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

const socialLinks = [
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com",
    icon: facebookIcon,
  },
  {
    name: "Twitter",
    icon: "fa-brands fa-twitter",
    link: "https://www.x.com",
    icon: twitterIcon,
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com",
    icon: linkedinIcon,
  },
];

function Footer() {
  return (
    <footer className="mt-20 bg-black py-20 px-6">
      <div className="flex flex-col items-center gap-8">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 object-contain" />
          <span className="font-plusJakartaSans opacity-80 font-extrabold text-white text-3xl">
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
                    "navlink font-medium text-lg text-white hover:opacity-100 transition-opacity duration-300 ease-linear";
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
      </div>
      <div className="my-8 border-t border-dashed opacity-70 border-white"></div>
      <div className="flex items-center justify-center gap-5">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:opacity-80 transition-opacity duration-300 ease-linear"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 object-contain"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
