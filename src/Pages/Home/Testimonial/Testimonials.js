import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
import testBackImg from '../../../assets/icons/quote.svg';

const Testimonials = () => {
  const testimonials = [
    {
      p: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people1,
      name: "Lionel Messi",
      address: "Argentina",
    },
    {
      p: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people2,
      name: "Cristiano Ronaldo",
      address: "Portugal",
    },
    {
      p: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people3,
      name: "Neymar Jr.",
      address: "Brazil",
    },
  ];
  
    
  
  return (
    <section className="mb-28 mt-20 mx-4 lg:mx-0">
      <div className="flex justify-between">
        <div className="lg:mx-4">
          <h4 className="text-secondary font-bold mb-2">Testimonial</h4>
          <h1 className="text-5xl">What Our Patient Says</h1>
        </div>
        <img className="max-w-[100px] lg:max-w-[200px]" src={testBackImg} alt="" />
      </div>

      <div className="mt-20 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-20">
        {testimonials.map((testimonial) => {
          return <Testimonial key={testimonial.id} testimonial={testimonial} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
