import React from "react";
import { useLoaderData } from "react-router";

import { LawyerDetailsCard } from "../components/shared/cards/LawyerCard";

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
      <div className="space-y-3 rounded-2xl py-16 px-12 text-center bg-gray-100">
        <h2 className="text-4xl font-extrabold"> Lawyer’s Profile Details </h2>
        <p className="text-secondary max-w-5xl mx-auto">{bio}</p>
      </div>
      <div>
        <LawyerDetailsCard
          name={name}
          experience={experience}
          license={license}
          speciality={speciality}
          profileImage={profileImage}
          availability={availability}
          fee={fee}
        />
      </div>
    </main>
  );
}

export default LawyerDetails;
