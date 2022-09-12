import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <>
         <Banner></Banner>  
         <Services></Services> 
         <Info></Info>
        <Appointment></Appointment>
        
        </>
    );
};

export default Home;