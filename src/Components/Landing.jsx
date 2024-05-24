import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import BackgroundImage from "../assets/Icons/banner-12 1.png";
import PLefts from "./PLefts";
import { useState, useEffect, useRef } from "react";
import Footers from "./Footers";
import Landing2 from "./Landing2";
import Product from "./Product";
import Sliders from "./Sliders";
function Landing({ topMargin }) {
  return (
    <div className=" h-fit w-screen ">
      <PLefts />
      <div className="h-fit  w-full">
        <div
          className="w-screen background-animation"
          style={{
            // backgroundImage: `url(${BackgroundImage})`,
            // backgroundPosition: "center top",
            // backgroundRepeat: "no-repeat",
            // width: "100%",
            // height: "80vh",
            marginTop: `${topMargin}px`,
          }}
        >
          <p className="text-left pt-20 ml-36 overflow-y-hidden text-4xl w-fit">
            <div className="mb-10 bounce-in-top overflow-y-hidden">
              <span className="text-8xl mb-20 text-box font-extralight">
                Your{" "}
              </span>
              <br></br>
            </div>
            <div className="mb-10 bounce-in-top">
              <span className="font-semibold text-box mb-3 overflow-y-hidden text-7xl">
                Trusted Online
              </span>
              <br></br>
            </div>
            <div className="mb-10 bounce-in-top">
              <span className="font-semibold text-box overflow-y-hidden mt-5 text-7xl">
                {" "}
                Market Place
              </span>
              <br></br>
            </div>
            <div>
              <p className="font-extralight bounce-in-top text-box mb-5">
                to <span className="font-medium">Buy</span>,
                <span className="font-medium">SELL</span> and{" "}
                <span className="font-medium">Bid</span> on{" "}
                <span className=" font-medium ">Overstock</span>&{" "}
              </p>
            </div>
            <p className="text-box bounce-in-top font-light">
              Short Date Prescription Medications
            </p>
          </p>
        </div>
        <Landing2 />
        <Sliders />
        <Footers />
      </div>
    </div>
  );
}

export default Landing;
