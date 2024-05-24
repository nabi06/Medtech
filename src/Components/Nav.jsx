import React from "react";
import Logo from "../assets/Icons/Etrade.png";
import Search from "../assets/search.png";
import Buy from "../assets/Buy.png";
import Cart from "../assets/Cart.png";
import bid from "../assets/Bid.png";
import like from "../assets/Icons/Favorate.png";
import note from "../assets/Icons/Compare.png";
import sale from "../assets/Sell.png";
import hand from "../assets/Join.png";
import BackgroundImage from "../assets/BackgroundImage.png";
import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../assets/add.png";

function Nav({ topDivRef }) {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option
  const [inputText, setInputText] = useState("");
  function handleredirect() {
    console.log("hello");
    navigate("/login");
  }
  return (
    <div
      ref={topDivRef}
      className=" fixed top-0 w-screen z-10 bg-white w-100% h-fit text-grey-500"
    >
      <div className=" flex flex-col justify-center ">
        <ul className=" text-3xl ">
          <div
            className="flex flex-row font-extralight justify-between  text-lg  items-center bg-white text-gray-500 font-sans "
            style={{ fontFamily: "helveticaNeue" }}
          >
            <div>
              <li>
                <img src={Logo} className="w-fit h-20 ml-10" />
              </li>
            </div>
            <div className="ml-36  mr-10 flex flex-row gap-8  text-md  font-thin items-center">
              <li className=" w-fit">Home</li>
              <li className=" w-fit">Products </li>
              <li className="">Why ParamETrade</li>
              <li className="">About Us</li>
              <li className="">Contact Us </li>
              <li className="">Offers</li>

              <div className="flex flex-row gap-2 text-md items-center font-thin">
                <img src={add} className="w-8 h-fit" />
                <li className="">
                  <button className="  text-gray-500  text-md  font-thin  ">
                    <p className=" font-thin"> Signup / </p>
                  </button>
                </li>
                <li className="">
                  <button
                    onClick={handleredirect}
                    className=" text-gray-500 text-md  font-thin text-md"
                  >
                    Signin
                  </button>
                </li>
                <li>
                  <button>
                    <img src={Cart} className="w-fit pt-2 h-12" />{" "}
                  </button>
                </li>
                <li>
                  <button>
                    <img src={like} className="w-fit pt-2 h-12" />{" "}
                  </button>
                </li>
              </div>
            </div>
          </div>
        </ul>
        <div className="flex flex-row   items-center h-fit bg-white text-black border-2 border-grey-500 shadow-lg">
          <div className=" w-fit ml-10">
            <div className="relative" style={{ width: "43rem" }}>
              <select
                className="bg-inp pl-4 text-lg h-full  font-sans rounded-md rounded-l-full focus:outline-none "
                onChange={(e) => setSelectedOption(e.target.value)}
                value={selectedOption}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  width: "11rem",
                }}
              >
                <option value="">All category</option>
                <option value="Option1">Medicine</option>
                <option value="Option2">Drugs</option>
                <option value="Option3">Allergies</option>
              </select>

              <input
                type="text"
                className="relative  text-black  pr-12 py-2 rounded-full bg-inp focus:outline-none"
                style={{ paddingLeft: "1100px", width: "23rem" }}
              />
              <p
                className="absolute -top-1 text-gray-400 left-48 font-extralight text-4xl"
                style={{ zIndex: 10 }}
              >
                |
              </p>
            </div>
            <button
              className="absolute inset-y-0 top-20  flex items-center py-2 px-2 pr-3"
              style={{ left: "42rem" }}
            >
              <img src={Search} className="w-fit h-6" />
            </button>
          </div>
          <div className="">
            <ul className="list-none text-lg  ml-32 font-thin">
              <div
                className="flex flex-row gap-10 justify-between text-gray-500    items-center py-2 px-2 "
                style={{ fontFamily: "helveticaNeue" }}
              >
                <div className="flex flex-row gap-2 items-center">
                  <img src={Buy} className="w-fit h-10" />
                  <li>Buy</li>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={hand} className="w-fit  h-10" />
                  <li>Join</li>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={sale} className="w-fit  h-10" />
                  <li>Sell</li>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={bid} className="w-fit  h-10" />
                  <li>Bid</li>
                </div>
                {/* <div className="flex flex-row gap-2 items-center">
                  <button>
                    <img src={note} className="w-fit  h-10" />{" "}
                  </button>
                </div> */}
                <div className="flex flex-row gap-2 items-center"></div>
                <div className="flex flex-row gap-2 items-center"></div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
