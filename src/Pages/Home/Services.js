import React from 'react';
import cardiology from '../../Images/Vector.png'
import cardiology1 from '../../Images/Vector12.png'
import MonthlyCheckUp from '../../Images/Vector (1).png'
import DentalCare from '../../Images/Vector (2).png'
import Opthalmology from '../../Images/Vector (3).png'
import Service from './Service';
const Services = () => {
    const service= [
        {
            _id: 1,
            name: 'Cardiology',
            description: "Seduahag perspiciati under omnised atused error.",
            img: cardiology,
            
        },
        {
            _id: 2,
            name: 'Monthly Check Up',
            description: "Seduahag perspiciati under omnised atused error.",
            img: MonthlyCheckUp
        },
        {
            _id: 3,
            name: 'Dental Care',
            description: "Seduahag perspiciati under omnised atused error.",
            img: DentalCare,
        }, 
        {
            _id: 4,
            name: 'Opthalmology',
            description: "Seduahag perspiciati under omnised atused error.",
            img: Opthalmology
        },
    ]
    return (
        <div>
            <div>
                <h4 className='text-accent font font-semibold'>Our Services</h4>
                <h1 className='service-text mt-3 '>Services For Your Health</h1>
            </div>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                {
                    service.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;