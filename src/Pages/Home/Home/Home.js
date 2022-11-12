import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Cover from '../Cover/Cover';
import GetAService from '../GetAService/GetAService';
import InfoCards from '../InfoCards/InfoCards';
import Appointment from '../MakeAppoinment/Appointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
          <Cover></Cover>
          <InfoCards></InfoCards>
          <Services></Services>
          <GetAService></GetAService>
          <Appointment></Appointment>
          <Testimonials></Testimonials>
          <ContactForm></ContactForm>
        </div>
    );
};

export default Home;