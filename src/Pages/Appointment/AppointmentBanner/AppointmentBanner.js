import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  
  return (
    <div className=" max-w-[75%] mx-auto lg:mt-12 pt-8 pb-8 text-accent">
      <div className="flex flex-col justify-around lg:flex-row-reverse">
        <img alt="" src={chair} className="max-w-xl rounded-lg shadow-2xl" />
        <div className="my-12">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
