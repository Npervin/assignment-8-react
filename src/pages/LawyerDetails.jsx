import React from "react";
import { useLoaderData } from "react-router";
import { GiInfo } from "react-icons/gi";

import { LawyerDetailsCard } from "../components/shared/cards/LawyerCard";
import { FilledButton } from "../components/shared/ui/Button";

function LawyerDetails() {
  const data = useLoaderData();
  const {
    name,
    experience,
    license,
    speciality,
    availability,
    fee,
    profileImage,
    bio,
  } = data;

  return (
    <main className="max-w-7xl mx-auto px-4 space-y-20 mt-12">
      <section className="space-y-3 rounded-2xl py-16 px-12 text-center bg-gray-100">
        <h2 className="text-4xl font-extrabold"> Lawyer’s Profile Details </h2>
        <p className="text-secondary max-w-5xl mx-auto">{bio}</p>
      </section>

      <LawyerDetailsCard
        name={name}
        experience={experience}
        license={license}
        speciality={speciality}
        profileImage={profileImage}
        availability={availability}
        fee={fee}
      />

      <section className="rounded-2xl bg-white p-6 border border-primary-border">
        <div className="pb-4 border-b border-dashed border-primary-border">
          <h3 className="text-2xl font-bold"> Book an Appointment </h3>
        </div>
        <div className="py-4 border-b border-primary-border flex justify-between items-center gap-4">
          <h4 className="font-extrabold text-lg">Availability</h4>
          <span className="bg-primary-btn-opacity rounded-full text-primary-btn font-medium text-sm px-2 py-1">
            Lawyer Available Today
          </span>
        </div>
        <div className="space-y-8 mt-4">
          <p className="flex items-center gap-2 bg-tertiary-btn-opacity rounded-full font-medium text-tertiary-btn border text-xs px-3 py-1">
            <GiInfo />
            <span>
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </span>
          </p>
          <FilledButton component="button" className="w-full block">
            Book Appointment Now
          </FilledButton>
        </div>
      </section>
    </main>
  );
}

export default LawyerDetails;
