import React from 'react';

const Service = ({service}) => {
    
    return (
        <div class="card  ">
            
        <div class="card-body">
        <figure className=" service-image">
        <img width={18} src={service.img} alt="Shoes" className="" />
      </figure>
          <h2 class="text-start service-div">{service.name}</h2>
          <p className='text-start  service-div'>{service.description}</p>
          <div class="card-actions justify-start">
            <button class="font font-bold">Explore Now</button>
          </div>
        </div>
      </div>
    );
};

export default Service;