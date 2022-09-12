import React from "react";
import image1 from "../../Images/image 5.png";
import image2 from "../../Images/image 6.png";
import image3 from "../../Images/image 7.png";
import image4 from "../../Images/image 8.png";
import image from "../../Images/pose_7.png";
const Appointment = () => {
  
  return (
    <div>
      <section className=" body-font banner ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              src={image}
              alt="hero"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-accent info-uppertext mb-3">
              Our Hospital Feature
            </h3>
            <h1 className="service-text mb-4">
              Make An Appointment Easy And Fast Services{" "}
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2">
              <div className="card w-96">
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
              <div className="card w-96 ">
              <div class="card-body">
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
              </div><div className="card w-96 ">
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
              <div className="card w-96 ">
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
                  <h2 class="text-start ">24 Hours Doctor Support</h2>
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
