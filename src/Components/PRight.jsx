import React from "react";
import { Link } from "react-router-dom";
import addcart from "../assets/addcart.png";
import fav from "../assets/fav.png";
import nature from "../assets/img1.png";
import other from "../assets/other.png";
import Items from "./Items";
import { useNavbarContext } from "./NavbarContext";
function PRight() {
  const { pop, setPop } = useNavbarContext();
  const imgaes = [
    nature,
    nature,
    nature,
    nature,
    nature,
    nature,
    nature,
    nature,
  ];
  const handleClick = (event) => {
    event.stopPropagation();
    console.log("hi");
    console.log("PRodutc", pop);
    setPop(true);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    console.log("Clicked to close Items");
    setPop(false);
  };
  return (
    <div className="w-full">
      <div className="flex justify-around  items-center ">
        <p className="w-fit p-2  border-2 bg-pro-col text-white rounded-lg">
          Medications
        </p>
        <Link
          to="/"
          className="w-fit p-2  border-2 bg-pro-col text-white rounded-lg"
        >
          Home
        </Link>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
        {imgaes.map((img, index) => (
          <div
            className="w-full max-w-lg border p-2 rounded-xl"
            onClick={handleClick}
          >
            <div className="flex justify-center">
              <img src={img} className="h-48 w-36 pl-3 bg-foots rounded-lg" />
            </div>
            <div className="w-full py-2">
              <h2 className="text-fonts">SKU 6545555</h2>
              <h1 className="text-fonts"> $50.99</h1>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-1">
              <div className="text-foot text-xs">UPN member price:</div>
              <div className="text-lg font-semibold">$45.00</div>
            </div>
            <ul className="flex flex-row justify-around gap-5 py-4">
              <li>
                <img src={addcart} className="size-8" />
              </li>
              <li>
                <img src={fav} className="size-8" />
              </li>
              <li>
                <img src={other} className="size-8" />
              </li>
            </ul>
            {pop && <Items onClose={handleClose} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PRight;
