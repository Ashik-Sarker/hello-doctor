import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import appointmentBackImage from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div
      style={{ backgroundImage: `url(${appointmentBackImage})` }}
      className=" mx-auto my-[200px]"
    >
      <div className="hero-content p-0 flex-col lg:flex-row">
        <img alt="" src={doctor} className="hidden lg:flex max-w-[600px] rounded-lg -mt-32" />
        <div className="ml-12 text-white my-12 lg:my-0">
          <h4 className="text-secondary font-bold mb-2">Appointment</h4>
          <h1 className="text-5xl font-bold">Make an Appointment Today</h1>
          <p className="py-6 max-w-[80%]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton> Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
