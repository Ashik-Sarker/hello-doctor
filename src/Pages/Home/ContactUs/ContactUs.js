import React from "react";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import appointmentBack from '../../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointmentBack})` }}
      className="border py-12"
    >
      <div className="max-w-[400px] mx-auto text-center">
        <h1 className="text-secondary font-bold">Contact Us</h1>
        <p className="text-3xl text-white">Stay Connected with us</p>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-primary w-full h-10"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-primary w-full mt-4 h-10"
          />
          <br />
          <textarea
            className="textarea textarea-primary w-full mt-4 mb-5 h-32"
            placeholder="Your message"
          ></textarea>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
