import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { GiInfo } from "react-icons/gi";
import useToday from "../hooks/useToday";

import { LawyerDetailsCard } from "../components/shared/cards/LawyerCard";
import { FilledButton } from "../components/shared/ui/Button";
import usePageTitle from "../hooks/usePageTitle";

function LawyerDetails() {
  const data = useLoaderData();
  usePageTitle({ lawyerName: data.name });

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

  const { isAvailable } = useToday(availability);

  const handleAppointment = () => {
    let appointments = localStorage.getItem("lawyer_appointments");
    if (!appointments) {
      appointments = [];
    } else {
      appointments = JSON.parse(appointments);
    }

    let index = appointments.findIndex(
      (appointment) => appointment.license === license
    );

    if (index !== -1) {
      toast.error(`You already have an appointment with ${name}.`);
      return;
    }

    appointments.push(data);

    localStorage.setItem("lawyer_appointments", JSON.stringify(appointments));
    toast.success(`Appointment booked successfully with ${name}.`);
  };

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
          {isAvailable ? (
            <span className="bg-primary-btn-opacity rounded-full text-primary-btn border font-medium text-sm px-2 py-1">
              Lawyer Available Today
            </span>
          ) : (
            <span className="bg-tertiary-btn-opacity rounded-full text-tertiary-btn border font-medium text-sm px-2 py-1">
              Lawyer Unavailable Today
            </span>
          )}
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
          <FilledButton
            component="button"
            className="w-full block"
            onClick={handleAppointment}
          >
            Book Appointment Now
          </FilledButton>
        </div>
      </section>
    </main>
  );
}

export default LawyerDetails;
