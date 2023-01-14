import React from "react";
import chair from '../../../assets/images/chair.png'
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import bgImage from '../../../assets/images/bg.png'

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`}}
      className=" max-w-[90%] mx-auto lg:mt-12 py-8 lg:py-24 text-accent">
      <div className="flex flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={chair}
          className="max-w-xl rounded-lg shadow-2xl"
        />
        <div className="my-12">
          <h1 className="text-[56px] lg:text-5xl font-bold">Your New Smile Starts 
           Here</h1>
          <p className="py-6 lg:max-w-[90%] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad 
            deserunt sed, ex consequuntur soluta illo voluptatum minus sunt sequi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
