import React from "react";
import Buy from "../assets/Buy.png";
import Cart from "../assets/Cart.png";
import bid from "../assets/Bid.png";
import hand from "../assets/Join.png";
import sale from "../assets/Sell.png";
import { useRef, useEffect } from "react";

function PLefts() {
  const sidebarRef = useRef(null);

  return (
    <div className="fixed inset-y-0 z-40 left-0 px-2 flex items-center justify-center overflow-y-auto">
      <ul className="sticky flex flex-col items-center gap-4">
        <li>
          <img
            src={Buy}
            alt="Buy"
            className="w-20 h-20 border-2 border-black rounded-full p-2"
          />
          <p className="text-sm text-center">BUY</p>
        </li>
        <li>
          <img
            src={hand}
            alt="Join"
            className="w-20 h-20 border-2 border-black rounded-full p-2"
          />
          <p className="text-sm text-center">JOIN</p>
        </li>
        <li>
          <img
            src={sale}
            alt="Sell"
            className="w-20 h-20 border-2 border-black rounded-full p-2"
          />
          <p className="text-sm text-center">SELL</p>
        </li>
        <li>
          <img
            src={bid}
            alt="Bid"
            className="w-20 h-20 border-2 border-black rounded-full p-2"
          />
          <p className="text-sm text-center">BID</p>
        </li>
      </ul>
    </div>
  );
}

export default PLefts;
