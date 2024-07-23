import React from "react";
import { TypeDoctor } from "../types/Doctor";

type DoctorProps = {
  doctor: TypeDoctor;
};
/**
 * Renders a single doctor component.
 *
 * @param {DoctorProps} props - The props object containing the doctor data.
 * @param {Doctor} props.doctor - The doctor object containing the doctor's information.
 * @returns {JSX.Element} The rendered doctor component.
 */
const Doctor = ({ doctor }: DoctorProps) => {
  return (
    <li className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center w-full md:w-4/5 mx-auto mb-4 rounded-3xl">
      <img
        src={doctor.photo}
        alt={doctor.fullname}
        className="w-20 h-20 rounded-full mx-auto mb-4 md:mb-0"
      />
      <div className="flex-1 ml-0 md:ml-4 text-center md:text-left">
        <h2 className="text-xl font-semibold">{doctor.fullname}</h2>
        <p className="font-semibold">{doctor.clinic}</p>
      </div>
      <div className="flex-1 text-center md:text-left">
        <p className="text-gray-500">Phone: {doctor.phone}</p>
        <p className="text-gray-500">Gender: {doctor.gender}</p>
        <p className="text-gray-500">Email: {doctor.email}</p>
      </div>
    </li>
  );
};

export default Doctor;
