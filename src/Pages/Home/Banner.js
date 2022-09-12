import React from 'react';
import pose from '../../Images/pose_2.png'



const Banner = () => {
    return (
        <section className='text-gray-600 body-font banner '>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center '>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='banner-text text-gray-900'>Your <span className='text-primary'>health</span> is Our <br /> Top <span className='text-accent'>Priority</span></h1>
                    <p className='font mb-4'>There are many variations of passages of lpsum <br /> available, but the majority hae suffered.</p>
                    <div className='flex justify-center'>
                      
                        <button className='btn btn-primary'>Meet Our Specialist</button>
                        {/* start */}
                    </div>
                    <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat mt-4">
   
    <div class="text-accent state">262k+
</div>
    <div class="stat-desc font-bold">Recovered Patients</div>
  </div>
  
  <div class="stat  mt-4">

    <div class="text-accent state">96%
</div>
    <div class="stat-desc font-bold">Satisfaction Rate</div>
  </div>
  
  <div class="stat  mt-4">
    <div class="text-accent state">86+
</div>
    <div class="stat-desc font-bold">Expert Doctors</div>
  </div>
  
</div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img className='object-cover object-center rounded' src= {pose} alt="hero" />
                </div>
            </div>
        </section>
    );
};

export default Banner;