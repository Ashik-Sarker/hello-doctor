import React from "react";
import PrimaryButton from "../../../Components/Button/PrimaryButton";

const AppointmentCart = ({ item, setTreatment }) => {
  const { name, slots } = item;
  return (
    <div className="card shadow-xl border font-semibold mx-4 lg:mx-0">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p className="text-sm">{slots[0]}</p>
        <p className="text-sm">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions">
          <label
            disabled = {slots.length === 0}
            onClick={() => setTreatment(item)}
            htmlFor="appointment_modal"
            className="btn btn-accent"
          >
            Set Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCart;
