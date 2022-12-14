import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import Question from './Question';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
         <Banner></Banner>  
         <Services></Services> 
         <Info></Info>
        <Appointment></Appointment>
        <Question></Question>
        <Testimonial></Testimonial>
        <Footer></Footer>
        
        </>
    );
};

export default Home;