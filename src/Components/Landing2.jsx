import React, { useState } from "react";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";

import bg2 from "../assets/bg2.png";
import product from "../assets/product.png";
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import right2 from "../assets/right.png";
import Context from "./Content";
function Landing2() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const slides = [slider1, slider2, slider3, slider4, slider5];
  const texts = [
    "Boost sales by promoting new and special products.",
    "Receive payments more quickly.",
    "Increase your profits by reducing your inventory.",
    "Utilize deals and discounts to attract pharmacies.",
    "Compare and list products with competitive prices.",
    "Save up to 60% with deals and discounts.",
    "Cashbacks and rewards.",
    "Multi-order merge shipment.",
  ];
  return (
    <div className="ml-10 pt-10">
      <div className=" items-center overflow-hidden mx-20">
        <div className=" flex flex-row  " style={{ width: "500vh" }}>
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 transition duration-300 ease-in-out max-w-sm flex justify-center items-center p-2"
            >
              <img
                src={item}
                alt={`Slide ${key}`}
                className="h-auto max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex  flex-col items-center ">
        <p className="text-text-blue text-4xl font-semibold mt-10">
          Grow your buisness with Pharm Etrade
        </p>
        <br></br>
        <p className="text-2xl font-light ">
          We understand your needs. We care about your buisness.
        </p>
        <br></br>
        <p className="text-2xl font-light">
          We've designed a platform especially for you Start saving today.{" "}
        </p>
      </div>
      <div className="ml-24 flex  flex-row justify-between ">
        <div
          className=" bg-inp mt-10  "
          style={{ width: "200vh", height: "fit-content" }}
        >
          <ul className="  space-y-5 w-100% text-3xl mt-12 font-light pl-8 ">
            {texts.map((items, key) => (
              <li className="flex flex-row items-center gap-2">
                <img src={right2} className="w-8 bg-bg-colors rounded-full" />
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "contain",
            backgroundPosition: "top ",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "80vh",
            marginTop: 10,
          }}
        ></div>
      </div>
      <div className="flex -mt-20 justify-center ">
        <Link to="/products">
          <img
            src={product}
            alt="Descriptive Alt Text"
            className="cursor-pointer w-96" // Make the image clickable
            onClick={() => setIsVisible(true)} // Change state on click
          />
        </Link>
      </div>
      {/* <Context /> */}
    </div>
  );
}

export default Landing2;
