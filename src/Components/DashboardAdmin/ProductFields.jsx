import React from "react";

function ProductFields() {
  return (
    <div className="w-full h-full bg-gray-100 justify-center flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col my-8">
          <h1 className="text-2xl font-normal text-gray-600 ">ADD PRODUCT</h1>
          <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
        </div>
        {/* section1 start */}

        <div className="flex justify-between items-center text-gray-600 my-6 ">
          <div className="flex flex-col">
            <label className="text-base">Product Category:</label>
            <select className=" w-56 h-10 border-slate-300 border">
              <option>Default Category</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Product Name:<span className="text-red-600 text-2xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              NDC / UPC:<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Brand Name:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              Price ($) Name:<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="flex justify-between items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">UPN Member Price ($):</label>
            <input
              type="text"
              id="Upn_Mem"
              className="w-56 h-10 border-slate-300 border "
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Amount In Stock:<span className="text-red-600 text-2xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              Taxable:<span className="text-red-600 text-2xl">*</span>
            </label>
            <select className=" w-56 h-10 border-slate-300 border">
              <option>No</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-base">Sale Price ($):</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Sale Price Form:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section2 end */}

        {/* section3 start */}

        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Sale Price To:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Manufacturer:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Strength:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Form:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Lot Number:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section3 end */}

        {/* section4 start */}
        <div className="flex justify-between items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base"> Expiration Date:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>
        {/* section4 end */}
      </div>
    </div>
  );
}

export default ProductFields;

