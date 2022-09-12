import React from 'react';
import character from '../../Images/Ikbal 1.png'
const Testimonial = () => {
    return (
        <div>
            <div className='text-accent font font-semibold'>Testimonial</div>
            <div className='service-text mt-3'>What they say?</div>
            <div>
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
  <section className=' body-font banner '>
            <div className='container  flex px-5 py-24 md:flex-row flex-col items-center lg:mx-20'>
                <div className='lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-20'>
                <h3 className='text-accent info-uppertext'>David Jeams </h3>
                    <h1 className='service-text '>Pratient</h1>
                    <p className='info-des mb-4'>simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                 
                </div>
                <div className='testimonial-image'>
                    <img className='' src= {character} alt="hero" />
                </div>
            </div>
        </section>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 text-neutral ">
      <a href="#slide4" class="btn btn-circle text-primary">❮</a> 
      <a href="#slide2" class="btn btn-circle text-primary">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
  <section className=' body-font banner '>
            <div className='container  flex px-5 py-24 md:flex-row flex-col items-center lg:mx-20'>
                <div className='lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-20'>
                <h3 className='text-accent info-uppertext'>David Jeams </h3>
                    <h1 className='service-text '>Pratient</h1>
                    <p className='info-des mb-4'>simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                 
                </div>
                <div className='testimonial-image'>
                    <img className='' src= {character} alt="hero" />
                </div>
            </div>
        </section>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 text-neutral">
      <a href="#slide1" class="btn btn-circle text-primary">❮</a> 
      <a href="#slide3" class="btn btn-circle text-primary">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
  <section className=' body-font banner '>
            <div className='container  flex px-5 py-24 md:flex-row flex-col items-center lg:mx-20'>
                <div className='lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-20'>
                <h3 className='text-accent info-uppertext'>David Jeams </h3>
                    <h1 className='service-text '>Pratient</h1>
                    <p className='info-des mb-4'>simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                 
                </div>
                <div className='testimonial-image'>
                    <img className='' src= {character} alt="hero" />
                </div>
            </div>
        </section>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 text-neutral">
      <a href="#slide2" class="btn btn-circle text-primary">❮</a> 
      <a href="#slide4" class="btn btn-circle text-primary">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
  <section className=' body-font banner '>
            <div className='container  flex px-5 py-24 md:flex-row flex-col items-center lg:mx-20'>
                <div className='lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-20'>
                <h3 className='text-accent info-uppertext'>David Jeams </h3>
                    <h1 className='service-text '>Pratient</h1>
                    <p className='info-des mb-4'>simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                 
                </div>
                <div className='testimonial-image'>
                    <img className='' src= {character} alt="hero" />
                </div>
            </div>
        </section>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 text-neutral">
      <a href="#slide3" class="btn btn-circle text-primary">❮</a> 
      <a href="#slide1" class="btn btn-circle text-primary">❯</a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Testimonial;