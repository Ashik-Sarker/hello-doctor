import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/Button/PrimaryButton";

const ExceptionalDental = () => {
  return (
    <div className="w-[80%] mx-auto my-32">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt=""
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:ml-24">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 lg:max-w-[80%] text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDental;
