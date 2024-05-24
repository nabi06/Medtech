import React from "react";
import nature from "../assets/nature.png";
import { useState, useEffect } from "react";
import logo from "../assets/pharmalogo.png";
import arrowleft from "../assets/leftarr.png";
import heart from "../assets/love.png";
import gal from "../assets/gal.png";
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product";
function Items({ onClose }) {
  // const handleClick = () => {
  //     console.log(pop, "pop before update");
  //     setPop(!pop);
  // };`

  // useEffect(() => {
  //     console.log(pop, "pop after update"); // This will log the updated value of pop after re-render
  // }, [pop]);
  const [count, setCount] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const components = {
    div1: (
      <div>
        <h2> Vitamin - C</h2>
        <h2> Syrup</h2>
        <h2> 1000Mg</h2>
        <h2> Nature</h2>
      </div>
    ),
    div2: (
      <div>
        <h2>More info</h2>
      </div>
    ),
    div3: (
      <div>
        <h2>Review</h2>
      </div>
    ),
  };
  let navigate = useNavigate();

  return (
    <div className="overflow-y-auto">
      <div className="fixed pb-2 inset-0 border-4 border-black   overflow-y-hidden  bg-opacity-100 flex flex-col justify-center items-center  w-full h-full mt-10">
        <div>
          <div className=" pb-2 rounded-lg flex flex-row gap-20 justify-around bg-white ">
            <div>
              <h2 className="text-blue-900 text-xl font-light">
                Home . Products . OTC Items .{" "}
                <span className="font-semibold">Vitamin C</span>
              </h2>
              <div className="flex justify-center">
                <img src={nature} className="w-72" />
              </div>
            </div>
            <div>
              <div className="flex flex-row">
                <div>
                  <h1 className="text-3xl font-semibold text-box">Vitamin C</h1>
                  <h3 className="text-3xl font-semibold text-box">$9.99</h3>
                  <h3 className="text-pink-600 font-light text-lg">
                    UPN Member Price{" "}
                    <span className="text-pink-600 font-semibold">$0.00</span>
                  </h3>
                </div>
                <a href="#" className="text-red-600 font-light">
                  {" "}
                  Be the First to review this product
                </a>
                <img
                  src={arrowleft}
                  onClick={onClose}
                  className="w-12 h-12 bg-foot rounded-full ml-10 py-2 px-1"
                />
              </div>
              <h2>
                .................................................................................................................................
              </h2>
              <div className="flex flex-row gap-10 text-blue-800">
                <div>
                  <input
                    type="checkbox"
                    name="In Stock"
                    placeholder="In Stock"
                  />
                  <label> In Stock</label>
                  <h2> SKU:6545555</h2>
                </div>
                <div className="flex flex-col text-blue-800">
                  <h2>NDC/ UPC : 6545555</h2>
                  <h2>Expiration Date: 12/21/2022</h2>
                </div>
              </div>
              <h2>
                .................................................................................................................................
              </h2>
              <div className="flex flex-row gap-4 items-center">
                <h2>QTY</h2>
                <div className="flex flex-row border-2 border-blue-900 p-1 items-center gap-2">
                  <button
                    onClick={() => setCount((prevCount) => prevCount - 1)}
                    className="text-xl"
                  >
                    -
                  </button>
                  <h2 className="text-xl">{count}</h2>
                  <button
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <h2>
                .................................................................................................................................
              </h2>
              <div className="flex flex-row gap-2 items-center mt-4">
                <div className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box p-1 px-7">
                  Add to Cart
                </div>
                <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl  text-white p-1 px-7">
                  Buy now{" "}
                </div>
                <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white p-1 px-7">
                  {" "}
                  Make Offer
                </div>
                <div>
                  <img src={heart} className="w-12 h-12" />
                </div>
                <div>
                  <div>
                    <img src={gal} className="w-12 h-12" />
                  </div>
                </div>
              </div>
              <h2>
                .................................................................................................................................
              </h2>
              <div className="flex flex-row gap-5 mt-4 ">
                <div
                  className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white  px-7"
                  onClick={() => setSelectedDiv("div1")}
                >
                  {" "}
                  Details
                </div>
                <Link
                  to={"/pops"}
                  className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
                >
                  More Information
                </Link>
                <div
                  className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
                  onClick={() => setSelectedDiv("div3")}
                >
                  Reviews
                </div>
              </div>
              <h2 className="-mt-4">
                .................................................................................................................................
              </h2>
              <div className="bg-coll w-100% h-48 bg-foots rounded-lg pl-2 -mt-2 text-blue-800">
                {selectedDiv ? components[selectedDiv] : components["div1"]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
