import React, { useState } from "react";

// components
import { LawyerListCard } from "../shared/cards/LawyerCard.jsx";
import { FilledButton } from "../shared/ui/Button.jsx";

function Lawyers({ lawyersData }) {
  const [data, setData] = useState({
    lawyers: lawyersData.slice(0, 6),
    currentPage: 1,
    totalPage: lawyersData.length / 6,
  });

  const handleViewAll = () => {
    const newPage = data.currentPage + 1;
    const newLawyers = lawyersData.slice(0, newPage * 6);
    setData({
      ...data,
      lawyers: newLawyers,
      currentPage: newPage,
    });
  };

  return (
    <section className="space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-4xl font-extrabold"> Our Best Lawyers </h2>
        <p className="text-secondary max-w-5xl mx-auto">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-12">
          {data.lawyers.map((lawyer) => (
            <LawyerListCard
              key={lawyer.license}
              name={lawyer.name}
              experience={lawyer.experience}
              license={lawyer.license}
              speciality={lawyer.speciality}
              profileImage={lawyer.profileImage}
            />
          ))}
        </div>
        {data.currentPage < data.totalPage && (
          <FilledButton
            component="button"
            className="mx-auto block"
            onClick={handleViewAll}
          >
            View All Lawyers
          </FilledButton>
        )}
      </div>
    </section>
  );
}

export default Lawyers;
