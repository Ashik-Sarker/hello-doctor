import { format } from "date-fns";
import React from "react";
import "../../../CommonCSS/Common.css";

const AppointmentModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const submitBookingModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const appointmentInfo = {
      serviceName: name,
      bookingSlot: slot,
      patientName: name,
      patientPhone: phone,
      patientEmail: email
    }

    console.log(appointmentInfo);
    
    setTreatment(null);
  };

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
          <form onSubmit={submitBookingModal}>
            <input
              type="text"
              name="date"
              value={date}
              className="input input-bordered w-full mb-3 h-10"
              disabled
            />

            <select
              name="slot"
              className="select select-bordered select-sm w-full h-10 mb-3"
            >
              {slots.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full mb-3 h-10"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Name"
              className="input input-bordered w-full mb-3 h-10"
            />
            <input
              type="email"
              name="email"
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
