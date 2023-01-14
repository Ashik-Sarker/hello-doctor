import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import teeth from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceCards = [
    {
      id: 1,
      image: fluoride,
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      image: cavity,
      name: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      image: teeth,
      name: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    ];
    


  return (
    <div className="mt-28 px-2">
      <section className="text-center">
        <h1 className="text-xl font-bold text-secondary uppercase">Our Services</h1>
        <p className="text-4xl mt-2">Services We Provide</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {
            serviceCards.map(card => {
                return <Service key = {card.id} card = {card}/>
            })
        }
      </section>
    </div>
  );
};

export default Services;
