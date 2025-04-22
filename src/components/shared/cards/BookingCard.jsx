import React from "react";
import { toast } from "react-toastify";
import { CancelButton } from "../ui/Button";

export function AppointmentCard({ handleCancel, name, speciality, fee }) {
  return (
    <div className="rounded-2xl p-6 border border-primary-border">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-dashed border-primary-border">
        <div className="space-y-2">
          <h6 className="text-xl font-bold">{name}</h6>
          <p className="font-plusJakartaSans text-secondary font-medium text-lg">
            {speciality}
          </p>
        </div>
        <p className="font-plusJakartaSans text-secondary font-medium text-lg">
          Appointment Fee : {fee} Taka
        </p>
      </div>

      <CancelButton className="mt-4 w-full" onClick={handleCancel}>
        Cancel Appointment
      </CancelButton>
    </div>
  );
}
