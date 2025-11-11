import React from "react";
import styled from "styled-components";

import makingImg from "../../assets/control.png";

import AnimationY from "../../Animation/AnimationY";
import AnimationLTR from "../../Animation/AnimationLTR";
import AnimationRTL from "../../Animation/AnimationRTL";

const MakingLives = () => {
  return (
    <AnimationY>
           

        <div
      className="w-full relative  bg-cover bg-center  mx-auto my-15 flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${makingImg})`,
        backgroundColor: "#0000",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
       <div><h1 className="text-4xl relative z-10 text-white mt-20 text-center font-semibold">Why Build Habits?</h1></div>
      <div className="max-w-6xl relative z-10 mx-auto my-20 px-5 py-10 grid grid-cols-1 md:grid-cols-2  gap-x-8 gap-y-10 ">
        
        <AnimationLTR>
            <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white  ">
              <div className="card-details ">
                <h1 className="text-2xl">🎯</h1>
                <p className="text-title">Better Focus</p>
                <p className="text-body ">
                Building consistent habits helps improve concentration and allows you to stay focused on your goals for longer periods.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
        </AnimationLTR>

        <AnimationRTL>
            <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <h1 className="text-2xl">⚡</h1>
                <p className="text-title">Improved Productivity</p>
                <p className="text-body">
                  Good habits reduce wasted time, increase efficiency, and help you accomplish more each day.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
        </AnimationRTL>

     <AnimationLTR>
           <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <h1 className="text-2xl">🌸</h1>
                <p className="text-title">Reduced Stress</p>
                <p className="text-body">
                 Following a steady routine lowers anxiety and stress, helping you feel calm and balanced throughout the day.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
     </AnimationLTR>

       <AnimationRTL>
         <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <h1 className="text-2xl">📈</h1>

                <p className="text-title">Personal Growth</p>
                <p className="text-body">
                  Small daily habits lead to self-discipline, confidence, and long-term personal development.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
       </AnimationRTL>


      </div>
    </div>
    </AnimationY>
  );
};

const StyledWrapper = styled.div`
  .card {
    // width: 300px;
    // height: 140px;
    //    background: transparent;
    position: relative;
    padding: 30px;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    color: #ffff;
  }

  .card-details {
    // color: #059669;
    height: 100%;
    gap: 0.5em;
    display: grid;
    place-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;

    border: none;
    background-color: #008bf8;
    // color: green;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body:hover {
    color: #ffff;
  }
  .text-body {
    // color: rgb(134, 134, 134);
  }

  /*Text*/
  .text-title {
    font-size: 1.5em;
    font-weight: bold;
  }

  /*Hover*/
  .card:hover {
    color: #ffff;
    // border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export default MakingLives;
