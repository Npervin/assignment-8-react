import React from "react";

// icons
import { PiTrademarkRegistered } from "react-icons/pi";

// components
import { OutlinedButton } from "../ui/Button";

function LawyerListCard({ name, experience, license, speciality }) {
  return (
    <div className="flex gap-8 rounded-2xl bg-white p-6 border border-primary-border">
      <div className="w-4/12 rounded-lg bg-red-300 h-full"></div>
      <div className="space-y-3 w-8/12">
        <div className="flex items-center gap-4">
          <span className="bg-primary-btn-opacity rounded-full text-primary-btn text-xs px-2 py-1">
            Available
          </span>
          <span className="bg-secondary-btn-opacity rounded-full text-secondary-btn text-xs px-2 py-1">
            {experience}
          </span>
        </div>
        <div>
          <h5 className="font-extrabold text-2xl"> {name} </h5>
          <p className="text-secondary"> {speciality} </p>
          <p className="flex items-center text-secondary  gap-1">
            <PiTrademarkRegistered />
            <span>{license}</span>
          </p>
          <OutlinedButton
            to={`/lawyers/${license.split(" ").join("-")}`}
            className="mt-2 w-full block font-bold"
          >
            View Details
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
}

export default LawyerListCard;
