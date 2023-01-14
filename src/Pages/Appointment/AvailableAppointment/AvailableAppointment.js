import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "../../../Components/Button/Modal/AppointmentModal";
import AppointmentCart from "./AppointmentCart";

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
    const [data, setData] = useState([]);
    const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("Appointment_options.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-24 text-xl">
      <p className="text-center text-secondary font-bold">
        Available appointments on {format(selectedDate, "PP")}
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item) => {
          return <AppointmentCart key={item._id} item={item} setTreatment={setTreatment}/>;
        })}
      </div>
      {
        treatment !== null && <AppointmentModal treatment={treatment} selectedDate={selectedDate}/>
      }
    </div>
  );
};

export default AvailableAppointment;
