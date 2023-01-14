import React from "react";

const Service = ({ card }) => {
  const { image, name, desc } = card;
  return (
    <div className={`card shadow-xl text-white px-12 py-12 border`}>
      <figure>
        <img className="" src={image} alt="Movie" />
      </figure>
      <div className="text-accent text-center mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="w-[80%] mx-auto">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
