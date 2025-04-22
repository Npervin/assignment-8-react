import React from "react";
import { useParams } from "react-router";

function LawyerDetails() {
  const { id } = useParams();

  return <div>LawyerDetails {id}</div>;
}

export default LawyerDetails;
