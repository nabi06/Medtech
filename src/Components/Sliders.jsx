import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import right from "../assets/arrowright.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import left from "../assets/arrowleft.png";
import mobile from "../assets/mobile.png";
import { useNavbarContext } from "./NavbarContext";
import screen1 from "../assets/Icons/Screen dummy-1.png";
import screen2 from "../assets/Icons/Screen dummy-2.png";
import screen3 from "../assets/Icons/Screen dummy-3.png";
import screen4 from "../assets/Icons/Screen dummy-4.png";
import other from "../assets/other.png";
import addcart from "../assets/addcart.png";
import fav from "../assets/love.png";
import mask from "../assets/mask.png";
import covid from "../assets/covid.png";
import { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

function Sliders() {
  const [images] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
    screen1,
  ]);
  const mobiles = [screen2, screen1, mobile, screen3, screen4];
  const screens = [
    [mask, covid],
    [covid, mask],
  ];
  const { pop } = useNavbarContext();
  const [showAll, setShowAll] = useState(screens.slice(0, screens.length - 1));
  const [curIndex, setCurIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    console.log("prev");
    const nextInd = curIndex + screens.length - 1;
    if (nextInd < images.length) {
      const nextVisibleImages = screens.slice(nextInd, nextInd + 5);
      setShowAll(nextVisibleImages);
      setCurIndex(nextInd);
    }
  };

  const handlePrevious = () => {
    const previousInd = curIndex - screens.length - 1;
    console.log("next");
    if (previousInd >= 0) {
      const previousVisibleImages = screens.slice(previousInd, previousInd + 5);
      setShowAll(previousVisibleImages);
      setCurIndex(previousInd);
    }
  };

  const handleClickNext = () => {
    console.log("prev");
    const nextInd = currentIndex + 5;
    if (nextInd < images.length) {
      const nextVisibleImages = images.slice(nextInd, nextInd + 5);
      setVisibleImages(nextVisibleImages);
      setCurrentIndex(nextInd);
    }
  };

  const handleClickPrevious = () => {
    const previousInd = currentIndex - 5;
    console.log("next");
    if (previousInd >= 0) {
      const previousVisibleImages = images.slice(previousInd, previousInd + 5);
      setVisibleImages(previousVisibleImages);
      setCurrentIndex(previousInd);
    }
  };
  return (
    <div className="pl-20">
      <div className="flex flex-col justify-center gap-10 mt-5 ">
        {/* <button className="text-xl "><img src={covid} className='w-24'/></button> */}

        <div>
          <div className="flex flex-row justify-center text-fonts font-semibold text-3xl items-center">
            <p>Special offers</p>
          </div>
          {/* <div className="flex justify-end mr-20 gap-2">
            <button className="bg-foots rounded-full p-2 ">
              <img src={left} className="w-4 h-4" onClick={handlePrevious} />
            </button>
            <button className="bg-foots rounded-full px-2 py-2">
              <img src={right} className="w-4 h-4" onClick={handleNext} />
            </button>
          </div> */}
        </div>
        <Carousel
          className="w-[90%] mx-auto border-x"
          infiniteLoop
          swipeable
          useKeyboardArrows
          showArrows
          showStatus={false}
          showIndicators
          showThumbs={false}
        >
          {screens.map((items) => (
            <div>
              {items.map((item) => (
                <img
                  src={item}
                  className="rounded-lg p-2"
                  style={{ width: "70vh" }}
                />
              ))}
            </div>
          ))}
        </Carousel>

        {/* <button className="text-xl ml-4"><img src={right} className='w-24'/></button> */}
      </div>

      <div className="flex flex-col justify-center gap-10 mt-5 ">
        {/* <button className="text-xl "><img src={left} className='w-24'/></button> */}

        <div>
          <div className="flex justify-between mr-20 gap-2">
            <h1 className="ml-20 mt-10 text-3xl font-semibold text-fonts">
              {" "}
              New Product
            </h1>
            <div className="flex items-center ">
              <button className="flex items-center bg-foots rounded-full px-2 py-2">
                <img
                  src={left}
                  onClick={handleClickPrevious}
                  className="w-4 h-4"
                />
              </button>
              <button className="bg-foots rounded-full px-2 py-2">
                <img
                  src={right}
                  onClick={handleClickNext}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" ml-20 flex overflow-x-scroll snap-x snap-mandatory gap-10 ">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="snap-center shrink-0 first:ml-4 last:mr-4"
            >
              <div className="">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="h-64 w-56 object-contain rounded-xl bg-foots"
                />
                <div>
                  <h2 className="text-foot">Nature Mask</h2>
                  <h3 className="font-semibold text-box-blue">$99.00</h3>
                </div>
                <div className="flex flex-row gap-5 items-center mt-3 ml-10 mb-2">
                  <div>
                    <img
                      src={addcart}
                      className="h-10 border bg-foots p-1 rounded-full"
                    />
                  </div>
                  <div>
                    <img
                      src={fav}
                      className="h-10 border bg-foots p-1 rounded-full"
                    />
                  </div>
                  <div>
                    <img
                      src={other}
                      className="h-10 border bg-foots p-1 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="text-xl ml-4"><img src={right} className='w-24'/></button> */}
      </div>
      <div
        className={
          pop
            ? " getTouchs w-100% relative h-fit mt-48 mx-10 rounded-md p-10 flex flex-col justify-center"
            : " getTouchs w-100% relative h-fit mt-48 mx-10 rounded-md p-10 flex flex-col justify-center"
        }
      >
        <div className="border-2  border-white w-3/4 h-80  ml-32 rounded-md">
          <p className="absolute top-4 z-5 left-96 h-fit bg-box-blue text-white px-4 py-2 rounded-md  text-3xl">
            Get in touch{" "}
          </p>
          <div className="ml-10 flex flex-row justify-center gap-10 items-center">
            <div className="w-fit">
              <ul className=" text-2xl font-light  w-fit">
                <li className="w-fit">Manage Inventory</li>
                <li>Increase cash flow </li>
                <li>Grow you business</li>
                <li>Promote products and deals</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col gap-5 mr-48 mt-7 justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-14 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Contact"
                  className="w-96 h-14 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-96 h-14 px-5"
                />
                <button className="bg-box-blue text-white rounded-lg w-fit p-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <div className="flex justify-center items-center w-fit mt-32">
          {mobiles.map((item, key) => {
            return (
              <div key={key} className=" mr-4">
                <img
                  src={item}
                  alt={`Mobile ${key}`}
                  className=" hover:scale-110 transition duration-300 ease-in-out rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sliders;
