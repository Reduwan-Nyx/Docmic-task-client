import React from "react";
import pose from "../../Images/pose_2.png";
import { AiOutlineCheckCircle } from "react-icons/ai";

import doctor1 from '../../Images/Ellipse 6.png'
import doctor2 from '../../Images/Ellipse 7.png'
import doctor3 from '../../Images/Ellipse 8.png'
import doctor4 from '../../Images/Ellipse 9.png'
import reactangle1 from '../../Images/Rectangle 4.png'
import reactangle2 from '../../Images/Rectangle 5.png'
import ellips from '../../Images/Ellipse 5.png'

import {BsPlusCircleFill} from 'react-icons/bs'
const Banner = () => {
  return (
    <section className=" body-font banner ">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="banner-text text-gray-900 mb-3">
            Your <span className="text-primary">Health</span> Is Our <br /> Top{" "}
            <span className="text-accent">Priority</span>
          </h1>
          <p className="font mb-4">
            There are many variations of passages of lpsum <br /> available, but
            the majority hae suffered.
          </p>
          <div className="flex justify-center">
            <button className="btn btn-primary">Meet Our Specialist</button>
            {/* start */}
          </div>
          <div class="stats stats-vertical lg:stats-horizontal shadow">
            <div class="stat mt-4">
              <div class="text-accent state">262k+</div>
              <div class="stat-desc font-bold">Recovered Patients</div>
            </div>

            <div class="stat  mt-4">
              <div class="text-accent state">96%</div>
              <div class="stat-desc font-bold">Satisfaction Rate</div>
            </div>

            <div class="stat  mt-4">
              <div class="text-accent state">86+</div>
              <div class="stat-desc font-bold">Expert Doctors</div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 relative ">
        
          <img
            className="object-cover object-center rounded"
            src={pose}
            alt="hero"
          />
          <img className="banner-ellips hidden lg:block " src={ellips} alt="" />
          
<div className=" hidden lg:block  ">
    
<button class=" mt-5 banner-button banner-text-right flex justify-center align-center ">
            {" "}
            <span>
              <AiOutlineCheckCircle className="icon-right "></AiOutlineCheckCircle>
            </span>
            <span className="mt-4 mx-2"> Regular Checkup</span>
          </button>

          <div class=" banner-card lg:absolute">
            <div class="">
              <h2 class="text-start p-2 inter-font text-[14px] font-bold">
                Meet Our Doctors
              </h2>
             <div className="flex">
             <div class="avatar ">
                <div class=" rounded-full">
                  <img src={doctor1} />
                </div>
              </div>
              <div class="avatar ">
                <div class="rounded-full">
                  <img src={doctor2} />
                </div>
              </div><div class="avatar ">
                <div class=" rounded-full">
                  <img src={doctor3} />
                </div>
              </div><div class="avatar ">
                <div class=" rounded-full">
                  <img src={doctor4} />
                  
                </div>
              
              </div>
              <span><BsPlusCircleFill className="doctor-icon mx-2"></BsPlusCircleFill></span>
             </div>
                <img width={150} className="m-2" src={reactangle1} alt="" /> 
                <img width={150} className="m-2" src={reactangle2} alt="" />
            </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
