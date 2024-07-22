import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDoctors } from "../data/doctors";
import Loader from "../components/Loader";
import Doctor from "../components/Doctor";
import { TypeDoctor } from "../types/Doctor";

const DoctorsList = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: [`TodoList`],
    queryFn: async () => {
      const doctors = await getDoctors();
      return doctors;
    },
  });
  if (isError) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <p className="text-lg text-center p-2">Error fetching doctors</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 py-10 fixed inset-0 overflow-hidden pb-16 px-4">
      <h1 className="text-center py-4 text-3xl font-bold">Doctors List</h1>
      {isLoading && <Loader/>}
       { data && <ul className="overflow-y-auto h-full">
            {data.map((doctor: TypeDoctor) => <Doctor key={doctor.id} doctor={doctor} />)}
        </ul>}
    </div>
  );
};

export default DoctorsList;
