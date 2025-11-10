import React from "react";
import styled from "styled-components";

import makingImg from "../../assets/control.png";
import { FaDatabase } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { RiBatteryChargeLine } from "react-icons/ri";
import { IoAccessibilityOutline } from "react-icons/io5";
import { TbHomeSignal } from "react-icons/tb";
import AnimationY from "../../Animation/AnimationY";

const MakingLives = () => {
  return (
    <AnimationY>
        <div
      className="w-full relative  bg-cover bg-center  mx-auto my-15 flex justify-center items-center "
      style={{
        backgroundImage: `url(${makingImg})`,
        backgroundColor: "#0000",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-6xl relative z-10 mx-auto my-20 py-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 ">
        
        <AnimationY>
            <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white  ">
              <div className="card-details ">
                <FaDatabase color="#ffff" size="25px" />
                <p className="text-title">Data Safety</p>
                <p className="text-body ">
                  Sodales tortor porta ultrices finibus magnis purus integer
                  tempor.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
        </AnimationY>

        <AnimationY>
            <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <PiDownloadSimpleFill color="#ffff" size="30px" />
                <p className="text-title">Plug & Play</p>
                <p className="text-body">
                  Sodales tortor porta ultrices finibus magnis purus integer
                  tempor.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
        </AnimationY>

     <AnimationY>
           <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <MdOutlineKeyboardVoice color="#ffff" size="30px" />
                <p className="text-title">Voice Control</p>
                <p className="text-body">
                  Sodales tortor porta ultrices finibus magnis purus integer
                  tempor.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
     </AnimationY>

       <AnimationY>
         <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <RiBatteryChargeLine color="#ffff" size="25px" />

                <p className="text-title">Save Energy</p>
                <p className="text-body">
                  Sodales tortor porta ultrices finibus magnis purus integer
                  tempor.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
       </AnimationY>

      <AnimationY>
          <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <IoAccessibilityOutline color="#ffff" size="25px" />

                <p className="text-title">Remote Access</p>
                <p className="text-body">
                  Sodales tortor porta ultrices finibus magnis purus integer
                  tempor.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
      </AnimationY>

        
       <AnimationY>
         <div>
          <StyledWrapper>
            <div className="card hover:bg-gray-400 hover:text-white ">
              <div className="card-details">
                <TbHomeSignal color="#ffff" size="25px" />
                <p className="text-title">Safety Home</p>
                <p className="text-body">
                  Sodales tortor porta ultrices finibus magnis purus integer
                  tempor.
                </p>
              </div>
            </div>
          </StyledWrapper>
        </div>
       </AnimationY>

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
