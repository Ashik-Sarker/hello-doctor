import React from "react";
// import image from '../../../assets/icons/clock.svg'

const Card = ({ card }) => {
  const { name, desc, image, backColor } = card;

  return (
    <div className={`card lg:card-side shadow-xl text-white px-12 py-4 ${backColor}`}>
      <figure>
        <img className="" src={image} alt="Movie" />
      </figure>
      <div className="card-body text-center lg:text-left">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
