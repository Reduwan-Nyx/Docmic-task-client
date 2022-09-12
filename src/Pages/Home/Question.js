import React from "react";
import question from "../../Images/pose_8.png";
import { AiOutlinePlus } from "react-icons/ai";

const Question = () => {
  return (
    <section className=" body-font banner ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="text-accent info-uppertext mb-5">FAQ Questions</h3>
          <h1 className="service-text mb-5">Get Your General Answer </h1>

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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src={question}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Question;
