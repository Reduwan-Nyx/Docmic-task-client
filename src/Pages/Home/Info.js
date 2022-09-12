import React from 'react';
import info from '../../Images/pose_4.png'
const Info = () => {
    return (
        <section className=' body-font banner '>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center '>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h3 className='text-accent info-uppertext'>16+ Years Experiences </h3>
                    <h1 className='service-text '>We Are Always ensure Best Medical Treatment For Your Health</h1>
                    <p className='info-des mb-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                 
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img className='object-cover object-center rounded' src= {info} alt="hero" />
                </div>
            </div>
        </section>
    );
};

export default Info;