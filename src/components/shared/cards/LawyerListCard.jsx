import React from "react";

// icons
import { PiTrademarkRegistered } from "react-icons/pi";

function LawyerListCard() {
  return (
    <div class="flex gap-8 rounded-2xl bg-white p-6 border border-primary-border">
      <div class="w-4/12 rounded-lg bg-red-300 h-full"></div>
      <div class="space-y-4 w-auto">
        <div class="flex items-center gap-4">
          <span class="bg-primary-btn-opacity rounded-full text-primary-btn text-xs px-2 py-1">
            Available
          </span>
          <span class="bg-secondary-btn-opacity rounded-full text-secondary-btn text-xs px-2 py-1">
            5+ Years Experience
          </span>
        </div>
        <div>
          <h5 class="font-extrabold text-2xl"> Awlad Gsa </h5>
          <p class="text-secondary"> Criminal Expert </p>
          <p class="flex items-center text-secondary  gap-1">
            <PiTrademarkRegistered />
            <span>License No: BD 12451254</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LawyerListCard;
