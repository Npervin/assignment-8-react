import React from "react";

// icons
import { PiTrademarkRegistered } from "react-icons/pi";

// components
import { OutlinedButton } from "../ui/Button";

export function LawyerListCard({
  name,
  experience,
  license,
  speciality,
  profileImage,
}) {
  return (
    <div className="flex gap-8 rounded-2xl bg-white p-6 border border-primary-border">
      <div
        className="w-4/12 aspect-square rounded-lg h-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${profileImage}')`,
        }}
      ></div>
      <div className="space-y-3 w-8/12">
        <div className="flex items-center gap-4">
          <span className="bg-primary-btn-opacity rounded-full font-medium text-primary-btn text-xs px-3 py-1">
            Available
          </span>
          <span className="bg-secondary-btn-opacity rounded-full font-medium text-secondary-btn text-xs px-3 py-1">
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

export function LawyerDetailsCard({
  name,
  experience,
  license,
  speciality,
  profileImage,
  availability,
  fee,
}) {
  return (
    <div className="flex items-center gap-8 rounded-2xl bg-white p-6 border border-primary-border">
      <div
        className="w-4/12 aspect-square rounded-lg h-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${profileImage}')`,
        }}
      ></div>
      <div className="space-y-4 w-8/12">
        <div className="flex items-center gap-4">
          <span className="bg-secondary-btn-opacity rounded-full font-medium text-secondary-btn text-sm px-3 py-1">
            {experience}
          </span>
        </div>
        <div className="space-y-4">
          <h5 className="font-extrabold text-3xl"> {name} </h5>
          <div className="flex items-center text-lg font-medium gap-12">
            <p className="text-secondary"> {speciality} </p>
            <p className="flex items-center text-secondary  gap-1">
              <PiTrademarkRegistered />
              <span>{license}</span>
            </p>
          </div>
          <div className="flex items-center text-lg gap-4">
            <label className="font-semibold text-secondary">Availability</label>
            <ul className="flex items-center gap-4">
              {availability.map((day) => (
                <li className="bg-tertiary-btn-opacity rounded-full font-medium text-tertiary-btn border text-xs px-3 py-1">
                  {day}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-lg gap-4">
            <label className="font-semibold text-secondary">
              Consultation Fee:
            </label>
            <span className="text-primary-btn font-extrabold">
              {" "}
              Taka: {fee}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
