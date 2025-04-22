import React from "react";
import { CancelButton } from "../ui/Button";

export function AppointmentCard() {
  return (
    <div className="rounded-2xl p-6 border border-primary-border">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-dashed border-primary-border">
        <div className="space-y-2">
          <h6 className="text-xl font-bold">Anaw jasu</h6>
          <p className="font-plusJakartaSans text-secondary font-medium text-lg">
            Criminal Expert
          </p>
        </div>
        <p className="font-plusJakartaSans text-secondary font-medium text-lg">
          Appointment Fee : 2000 Taka
        </p>
      </div>

      <CancelButton className="mt-4 w-full">Cancel Appointment</CancelButton>
    </div>
  );
}
