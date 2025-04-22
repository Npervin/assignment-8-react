import React from "react";
import { NavLink } from "react-router";

export const OutlinedButton = ({ children, className, ...props }) => {
  return (
    <NavLink
      className={
        "text-center border border-secondary-btn-opacity text-secondary-btn rounded-full px-4 py-2 hover:bg-secondary-btn-opacity transition-all duration-300 " +
        className
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
export const FilledButton = ({ children, className, component, ...props }) => {
  if (component === "button") {
    return (
      <button
        className={
          "bg-primary-btn text-lg cursor-pointer font-semibold text-white rounded-full px-4 leading-normal py-2 " +
          className
        }
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <NavLink
      className={
        "bg-primary-btn text-lg font-semibold text-white rounded-full px-4 leading-normal py-2 " +
        className
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
