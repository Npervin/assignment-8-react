import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

import { AppointmentCard } from "../components/shared/cards/BookingCard";
import { FilledButton } from "../components/shared/ui/Button";
import Chart from "../components/Chart";

function MyBookings() {
  const initialData = useLoaderData();
  const [data, setData] = useState(initialData);

  const handleCancel = (license, name) => {
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
      appointments.splice(index, 1);
      localStorage.setItem("lawyer_appointments", JSON.stringify(appointments));
      setData(appointments);
      toast.info(`Appointment cancelled successfully with ${name}.`);
    } else {
      toast.error("Appointment not found.");
    }
  };

  if (!data || data.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 mt-12 space-y-20">
        <section className="rounded-2xl text-center">
          <h2 className="text-[40px] font-extrabold">
            {" "}
            No Appointments Found{" "}
          </h2>
          <p className="mt-3 text-secondary max-w-5xl mx-auto">
            You have no appointments booked yet. Please book an appointment with
            a lawyer.
          </p>
          <div className="mt-6">
            <FilledButton to="/">Book an Appointment</FilledButton>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 mt-12 space-y-20">
      <section className="h-[600px] rounded-2xl border border-primary-border p-8 text-center">
        <Chart appointments={data} />
      </section>
      <section className="space-y-3 rounded-2xl text-center">
        <h2 className="text-[40px] font-extrabold"> My Today Appointments </h2>
        <p className="text-secondary max-w-5xl mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </section>
      <section className="space-y-10">
        {data.map((lawyer, idx) => (
          <AppointmentCard
            key={idx}
            name={lawyer.name}
            speciality={lawyer.speciality}
            fee={lawyer.fee}
            license={lawyer.license}
            handleCancel={() => handleCancel(lawyer.license, lawyer.name)}
          />
        ))}
      </section>
    </main>
  );
}

export default MyBookings;
