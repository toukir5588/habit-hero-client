import React from "react";
import styled from "styled-components";
import AnimationY from "../../Animation/AnimationY";
import AnimationLTR from "../../Animation/AnimationLTR";
import AnimationRTL from "../../Animation/AnimationRTL";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Card = ({ habit }) => {
  return (
    <AnimationY>
      <div>
        <StyledWrapper>
          <div className="card">
           <AnimationLTR>
             <div className="w-full h-[200px]">
              <img
                className="h-full w-full rounded-2xl"
                src={habit.image}
                alt=""
              />
            </div>
           </AnimationLTR>
           <AnimationRTL>
             <p className="card-title h-4 mt-5">{habit.title}</p>
            <p className="small-desc line-clamp-3 ">{habit.description}</p>
           </AnimationRTL>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
           <AnimationY>
             <button className="btn w-full mt-7 transform transition-transform duration-200 ease-out hover:scale-110">Vew details <MdOutlineKeyboardDoubleArrowRight /></button>
           </AnimationY>
          </div>
        </StyledWrapper>
      </div>
    </AnimationY>
  );
};

const StyledWrapper = styled.div`
  .card-title {
    color: #262626;
    font-size: 1.2em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #059669, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    max-width: 450px;
    // max-height: 320px;
    background-color: #059669;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #10b981, #059669);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(28);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
`;

export default Card;
