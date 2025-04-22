import React from "react";
import { NavLink, useParams } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";

function LawyerNotFound() {
  const { license } = useParams();

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          No Lawyer Found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find any lawyer with the License No -
        </p>
        <p className="flex items-center justify-center font-semibold text-secondary  gap-1">
          <PiTrademarkRegistered />
          <span>{license}</span>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="rounded-md bg-primary-btn px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-transparent transition-all duration-200 ease-linear border border-primary-btn hover:text-primary"
          >
            View All Lawyers
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default LawyerNotFound;
