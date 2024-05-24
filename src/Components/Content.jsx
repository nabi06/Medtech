import React, { useState, useEffect } from "react";
import right from "../assets/arrowright.png";
import left from "../assets/arrowleft.png";
function Context() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex justify-center">
      <div
        className={` ${
          animate ? "translate-x-0" : "translate-x-full"
        } transition duration-500 ease-in-out`}
      >
        <img src={right} />
      </div>
      <div
        className={` ${
          animate ? "translate-x-0" : "-translate-x-full"
        } transition duration-500 ease-in-out`}
      >
        {/* <!-- Content of div 2 --> */}
        <img src={left} />
      </div>
    </div>
  );
}

export default Context;
