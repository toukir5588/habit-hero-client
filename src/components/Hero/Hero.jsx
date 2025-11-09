import React from "react";
import AnimationY from "../../Animation/AnimationY";
import { GoChevronRight } from "react-icons/go";
import AnimationLTR from "../../Animation/AnimationLTR";
import AnimationRTL from "../../Animation/AnimationRTL";

const Hero = () => {
  const heroSlog = (
    <>
      <div className="text-primary text-center space-y-1.5 md:space-y-5 my-10">
        <AnimationLTR>
          <h3 className="text-2xl md:text-3xl ">Welcome</h3>
        </AnimationLTR>
        <AnimationRTL>
          <h1 className=" text-3xl md:text-6xl font-bold">
            It's Time <span className="text-2xl md:text-4xl font-medium">for</span> <br />
            Smart Living
          </h1>
        </AnimationRTL>
        <AnimationLTR>

        <p className="text-xl">A system designed for your ease</p>
        </AnimationLTR>
         <AnimationRTL>

        <button className="btn gb-gradient">
          Get Started <GoChevronRight />
        </button>
         </AnimationRTL>
      </div>
    </>
  );

  return (
    <div className="w-screen ">
      <AnimationY>
        <div className="carousel w-full ">
          <div
            id="slide1"
            className="carousel-item relative w-full  max-h-[600px] object-cover"
          >
            <img
              src="https://i.ibb.co.com/G4089xrk/Screenshot-1.jpg"
              className="w-full "
            />

            <div className="absolute left-5 right-5 top-1/2 flex items-center -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>

              <div>{heroSlog}</div>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full max-h-[600px] object-cover"
          >
            <img
              src="https://i.ibb.co.com/0RP0H64H/aziz-acharki-U3-C79-Se-Ha7k-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex items-center -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              {heroSlog}
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full max-h-[600px] object-cover"
          >
            <img
              src="https://i.ibb.co.com/39f1pgVk/content-pixie-l6-I8jpz-KJQU-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex items-center -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              {heroSlog}
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full max-h-[600px] object-cover"
          >
            <img
              src="https://i.ibb.co.com/dsJbfdXb/nubelson-fernandes-78-XYr-OOtk-DQ-unsplash.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex items-center -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              {heroSlog}
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </AnimationY>
    </div>
  );
};

export default Hero;
