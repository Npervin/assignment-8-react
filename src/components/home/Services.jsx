import React from "react";
import lawyerIcon from "../../assets/success-doctor.png";
import reviewIcon from "../../assets/success-review.png";
import casesIcon from "../../assets/success-patients.png";
import stuffIcon from "../../assets/success-staffs.png";

// components
import ServicesCard from "../shared/cards/ServicesCard";

const servicesData = [
  { id: 1, icon: lawyerIcon, count: 199, title: "Total Lawyer" },
  { id: 2, icon: reviewIcon, count: 467, title: "Total Reviews" },
  { id: 3, icon: casesIcon, count: 1900, title: "Cases Initiated" },
  { id: 4, icon: stuffIcon, count: 300, title: "Total Stuffs" },
];

function Services() {
  return (
    <section className="space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-4xl font-extrabold">
          {" "}
          We Provide Best Law Services{" "}
        </h2>
        <p className="text-secondary max-w-5xl mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {servicesData.map((item) => (
          <ServicesCard
            key={item.id}
            title={item.title}
            count={item.count}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
