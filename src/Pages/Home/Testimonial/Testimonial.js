import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, image, address, p } = testimonial;
  return (
    <div className="shadow-lg p-8 rounded-xl border">
      <p>{p}</p>
      <div className="flex items-center mt-6">
        <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt=""/>
            </div>
        </div>
        <div className="ml-2">
            <h1>{name}</h1>
            <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
