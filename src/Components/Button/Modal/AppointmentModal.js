import { format } from "date-fns";
import React from "react";
import '../../../CommonCSS/Common.css'

const AppointmentModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  return (
    <div>
      <input type="checkbox" id="appointment_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment_modal"
            className="btn btn-accent btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">{name}</h3>
          <form>
            <input
              type="text"
              value={date}
              className="input input-bordered w-full mb-3 h-10"
              disabled
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-3 h-10"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-3 h-10"
            />
            <input
              type="text"
              placeholder="Phone Name"
              className="input input-bordered w-full mb-3 h-10"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-10 h-10"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
