import React from "react";
import { useState } from "react";

function Checkout({ topMargin }) {
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setIsCheck(!ischeck);
  };
  const handleCheck = () => {
    setIsCheck(!ischeck);
    setIsActive(!isActive);
  };
  return (
    <div
      style={{ marginTop: `${topMargin}px` }}
      className="bg-check  md:w-screen lg:h-fit lg:text-md lg:text-lg text-gray-500 p-8"
    >
      <h1 className="ml-20 lg:text-2xl lg:mb-2 text-black">
        PharmaTrade {`>`} Checkout
      </h1>
      <div className="bg-white p-8 pl-24  md:w-full lg:h-full">
        <h1 className="lg:text-3xl  lg:mb-8 ">Checkout</h1>
        <div className="lg:flex lg:items-center lg:justify-center lg:text-xl lg:mb-8">
          <h1>
            Have a coupon?
            <a href="#" className="text-cart underline">
              {" "}
              CLICK HERE TO ENTER YOUR CODE
            </a>
          </h1>
        </div>
        <div className="lg:flex lg:flex-row gap-20">
          {/* right div  */}
          <div>
            <form>
              <h1 className="lg:mb-8 lg:text-xl">Billing Details</h1>
              <div className=" md:flex  md:flex-row  md:gap-2 lg:gap-20">
                <div className=" md:flex gap-2 lg:mb-2 md:flex-col">
                  <label>First name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md  p-3 md:w-96 md:h-fit"
                    placeholder="enter firstname"
                  />
                </div>
                <div className=" md:flex gap-2 lg:mb-2 md:flex-col">
                  <label>Last name</label>
                  <input
                    required
                    type="text"
                    className="border-check border-2 rounded-md  p-3 md:w-96 md:h-fit"
                    placeholder="enter firstname"
                  />
                </div>
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Company name(Optional)</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Country / Region </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex  lg:mb-2 gap-2 md:flex-col">
                <label>Street Adress</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex  lg:mb-2 gap-2 md:flex-col">
                <label>Town / city </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>State / Country</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Postal code </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Phone</label>
                <input
                  required
                  type="number"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Email</label>
                <input
                  required
                  type="email"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
              <div className=" md:flex lg:mb-2 gap-2 md:flex-col">
                <label>Additonal Info</label>
                <input
                  required
                  type="text"
                  placeholder=""
                  className="border-check border-2 rounded-md  p-3 md:w-full md:h-fit"
                />
              </div>
            </form>
          </div>
          {/* left div  */}
          <div className="bg-order md:w-fit p-8 md:h-fit">
            <h1 className="mb-8">Your Order </h1>
            <div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-10">
                <div>
                  <h1>Zahler Real Calm Multivitamin × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-24">
                <div>
                  <h1>Oral irrigator Electric × 1 </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-56">
                <div>
                  <h1>Subtotal </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
              <div className="lg:flex lg:flex-row mb-8 lg:gap-56">
                <div>
                  <h1>Total </h1>
                </div>
                <div>
                  <h2>$ amount</h2>
                </div>
              </div>
            </div>
            <div className="bg-white mb-8  border-black  lg:w-full lg:h-full">
              <div className=" ">
                <div className="lg:flex lg:flex-row gap-2 items-center mb-4">
                  <button
                    className={
                      isActive
                        ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
                        : "w-4 h-4  border-black border-2 rounded-full"
                    }
                    onClick={handleClick}
                  >
                    {" "}
                  </button>{" "}
                  <h1> Details</h1>
                </div>
                {isActive && (
                  <div>
                    <p className="mb-8">
                      Make your payment directly into our bank <br></br>
                      account. Please use your Order ID as the <br></br>
                      payment reference. Your order will not be <br></br>
                      shipped until the funds have cleared in our <br></br>
                      account.
                    </p>{" "}
                  </div>
                )}
              </div>
              <div className=" ">
                <div className="lg:flex lg:flex-row gap-2 items-center mb-4">
                  <button
                    className={
                      ischeck
                        ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
                        : "w-4 h-4  border-black border-2 rounded-full"
                    }
                    onClick={handleCheck}
                  >
                    {" "}
                  </button>{" "}
                  <h1> Check payments</h1>
                </div>
                {ischeck && (
                  <div>
                    <p>
                      Your personal data will be used to process <br></br>
                      your order, support your experience <br></br>
                      throughout this website, and for other<br></br>
                      spurposes described in our{" "}
                      <a href="#" className="text-cart underline">
                        privacy policy.
                      </a>
                      <br></br>
                    </p>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-full lg:flex items-center justify-center">
              <button className=" bg-pink-500 px-4 py-2 rounded-3xl text-black">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
