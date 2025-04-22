import React from "react";
import CountUp from "react-countup";

function ServicesCard({ icon, title, count }) {
  return (
    <div className="rounded-2xl bg-gray-100 border border-primary-border py-10 px-12 space-y-6">
      <img src={icon} alt={title} className="object-contain w-12" />
      <p className="text-5xl font-bold">
        <CountUp
          start={0}
          end={count}
          duration={5}
          useEasing={true}
          enableScrollSpy={true}
          separator=","
        />
        +
      </p>
      <p className="text-secondary">{title}</p>
    </div>
  );
}

export default ServicesCard;
