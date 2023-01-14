import React from 'react';
import Banner from './Banner/Banner';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <ExceptionalDental />
            <MakeAppointment />
            <Testimonial/>
        </div>
    );
};

export default Home;