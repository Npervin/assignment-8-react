import React from "react";
import { AppointmentCard } from "../components/shared/cards/BookingCard";

function MyBookings() {
  return (
    <main className="mx-auto max-w-7xl px-4 mt-12 space-y-20">
      <section className="space-y-3 rounded-2xl text-center">
        <h2 className="text-[40px] font-extrabold"> My Today Appointments </h2>
        <p className="text-secondary max-w-5xl mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </section>
      <section className="space-y-10">
        <AppointmentCard />
      </section>
    </main>
  );
}

export default MyBookings;
