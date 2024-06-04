import React from "react";

function Cart({ topMargin, cartItems, setCartItems }) {
  function handleremove(id) {
    const filtered = cartItems.filter((item) => item.id !== id);
    setCartItems(filtered);
  }
  console.log(cartItems.length);
  return (
    <div className="ml-10" style={{ marginTop: `${topMargin}px` }}>
      {cartItems && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-10 pt-10">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className=" space-y-1 w-full max-w-lg border p-2 rounded-xl"
              >
                <div className="relative flex justify-center">
                  <img
                    className="h-48 w-36 pl-3 mb-2 bg-foots rounded-lg"
                    src={item.src}
                    alt={item.id}
                  />
                  <button
                    className="h-fit  ml-4 rounded-full p-2 bg-foots"
                    onClick={() => handleremove(index)}
                  >
                    X
                  </button>
                </div>
                <div className="w-full py-2">
                  <h2 className="text-fonts">{item.rate}</h2>
                  <h1 className="text-fonts">{item.price}</h1>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-1">
                  <div className="text-foot text-xs">{item.rates}</div>
                  <div className="text-lg font-semibold">{item.ratesupn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
