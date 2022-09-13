import React from "react";
import question from "../../Images/pose_8.png";
import blood from '../../Images/Blood Pressure.png'
import gloves from '../../Images/Gloves.png'
import def from '../../Images/Defibrillator (1).png'
import ellipse1 from '../../Images/Ellipse 10.png'
import ellipse from '../../Images/Ellipse 11.png'
import light from '../../Images/light.png'
const Question = () => {
  return (
    <section className=" body-font banner  ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="text-accent info-uppertext mb-5 ml-4">FAQ Questions</h3>
          <h1 className="service-text mb-5 ml-3">Get Your General Answer </h1>

          <div tabindex="0" class="collapse collapse-plus    rounded-box">
  <div class="collapse-title text-xl font-medium">
  Will I always see my own doctor?                                 
  </div>
  <div class="collapse-content"> 
    <p></p>
  </div>
</div> <div tabindex="0" class="collapse collapse-plus   rounded-box">
  <div class="collapse-title text-xl font-medium">
  What is one Medical’s care?                                  
  </div>
  <div class="collapse-content"> 
    <p></p>
  </div>
</div> <div tabindex="0" class="collapse collapse-plus  rounded-box">
  <div class="collapse-title text-xl font-medium">
  What is evidence based medicine?                                 
  </div>
  <div class="collapse-content"> 
    <p></p>
  </div>
</div> <div tabindex="0" class="collapse collapse-plus  rounded-box">
  <div class="collapse-title text-xl font-medium">
  What is an academic medical center?                         
  </div>
  <div class="collapse-content"> 
    <p></p>
  </div>
</div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2  relative">
          <img
            className="object-cover object-center rounded"
            src={question}
            alt="hero"
          />
          <img className="blood" src={blood} alt="" />
          <img className="gloves" src={gloves} alt="" />
          <img className="def" src={def} alt="" />
          <img className="ellipse1" src={ellipse1} alt="" />
          <img className="ellipse-info" src={ellipse} alt="" />
          <div className="bulp flex ">
          <img className="" src={light} alt="" />
          <h5 className="question-text">Get Solutions From Our Experts</h5>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Question;
