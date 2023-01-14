import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import Card from "./Card";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      name: "Opening Hours",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: clock,
      backColor: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      name: "Visit Our Location",
      desc: "Brooklyn, NY 10036, United States",
      image: location,
      backColor: "bg-gradient-to-r from-accent to-accent",
    },
    {
      id: 3,
      name: "Opening Hours",
      desc: "+000 123 456789",
      image: phone,
      backColor: "bg-gradient-to-r from-secondary to-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {cards.map((card) => {
        return <Card key={card.id} card={card}></Card>;
      })}
    </div>
  );
};

export default InfoCards;
