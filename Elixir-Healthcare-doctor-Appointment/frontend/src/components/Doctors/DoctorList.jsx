import React from "react";
import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((item, index) => (
        <div className="bg-white rounded-lg shadow-lg p-5" key={index}>
          <DoctorCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
