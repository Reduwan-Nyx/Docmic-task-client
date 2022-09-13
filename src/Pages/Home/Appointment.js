import React from "react";
import image1 from "../../Images/image 5.png";
import image2 from "../../Images/image 6.png";
import image3 from "../../Images/image 7.png";
import image4 from "../../Images/image 8.png";
import image from "../../Images/pose_7.png";
import masker from '../../Images/Masker.png'
import gun from '../../Images/ThermoGun.png'
import hand from '../../Images/Hand Sanitizer.png'
import ellipse1 from '../../Images/Ellipse 10.png'
import ellipse from '../../Images/Ellipse 11.png'

const Appointment = () => {
  
  return (
    <div>
      <section className=" body-font banner ">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2  relative">
            <img
              className="object-cover object-center rounded"
              src={image}
              alt="hero"
            />
            <img className="masker" src={masker} alt="" /> 
             <img className="gun" src={gun} alt="" /> 
              <img className="hand" src={hand} alt="" /> 
              <img className="ellipse1 " src={ellipse1} alt="" />
              <img className="ellipse-info " src={ellipse} alt="" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 mt-20 md:mb-0 items-center text-center">
            <h3 className="text-accent info-uppertext mb-3 ">
              Our Hospital Feature
            </h3>
            <h1 className="service-text mb-4 w-96">
              Make An Appointment Easy And Fast Services{" "}
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mt-2 ">
              <div className="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <div className="flex">
                  <figure className=" service-image">
                    <img
                      width={25}
                      src={image1}
                      alt="Shoes"
                      className="appointment-image"
                    />
                  </figure>
                  <h2 class="text-start ">24 Hours Doctor Support</h2>
                </div>
                <p className="text-start ">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl ml-5">
              <div class="card-body ">
                <div className="flex">
                  <figure className=" service-image">
                    <img
                      width={25}
                      src={image2}
                      alt="Shoes"
                      className="appointment-image"
                    />
                  </figure>
                  <h2 class="text-start ">24 Hours Doctor Support</h2>
                </div>
                <p className="text-start ">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              </div><div className="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <div className="flex">
                  <figure className=" service-image">
                    <img
                      width={25}
                      src={image3}
                      alt="Shoes"
                      className="appointment-image"
                    />
                  </figure>
                  <h2 class="text-start ">24 Hours Doctor Support</h2>
                </div>
                <p className="text-start ">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl mx-5">
              <div class="card-body">
                <div className="flex">
                  <figure className=" service-image">
                    <img
                      width={25}
                      src={image4}
                      alt="Shoes"
                      className="appointment-image"
                    />
                  </figure>
                  <h2 class="appointment-text">24 Hours Doctor Support</h2>
                </div>
                <p className="text-start ">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
