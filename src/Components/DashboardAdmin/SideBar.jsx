


// import React from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { FiHome, FiBox, FiUsers, FiDollarSign, FiSettings } from 'react-icons/fi';

// const Sidebar = ({}) => {
//   let navigate = useNavigate();

//   return (
//     <div className="w-64 bg-white font-semibold shadow-lg">
//       <nav className="">
//         <Link to="/admin" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiHome className="w-6 h-6" />
//           <span className="ml-3">Dashboard</span>
//         </Link>
//         <Link to="/admin/orders" className="flex items-center p-2 text-gray-600  hover:text-blue-400">
//           <FiBox className="w-6 h-6" />
//           <span className="ml-3">Orders</span>
//         </Link>
//         <Link to="/admin/addproducts" className="flex items-center p-2 text-gray-600  hover:text-blue-400">
//           <FiUsers className="w-6 h-6" />
//           <span className="ml-3">Products</span>
//         </Link>
//         <Link to="/customers" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiUsers className="w-6 h-6" />
//           <span className="ml-3">Customers</span>
//         </Link>
//         <Link to="/payouts" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiDollarSign className="w-6 h-6" />
//           <span className="ml-3">Pay Outs</span>
//         </Link>
//         <Link to="/earnings" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiDollarSign className="w-6 h-6" />
//           <span className="ml-3">Earnings</span>
//         </Link>
//         <Link to="/manage-pdf-header" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Manage Print PDF Header Info</span>
//         </Link>
//         <Link to="/review" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Review</span>
//         </Link>
//         <Link to="/returns" className="flex items-center p-2 text-gray-600  hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Returns</span>
//         </Link>
//         <Link to="/assign-products" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Assign Products</span>
//         </Link>
//         <Link to="/assign-product-list" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Assign Product List</span>
//         </Link>
//         <Link to="/request-quote" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Request for Quote</span>
//         </Link>
//         <Link to="/settings" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Settings</span>
//         </Link>
//         <Link to="/seller-info" className="flex items-center p-2 text-gray-600 hover:text-blue-400">
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Seller Information</span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FiHome, FiBox, FiUsers, FiDollarSign, FiSettings } from 'react-icons/fi';
// import { FaChevronDown } from "react-icons/fa";

// const Sidebar = () => {
//   let navigate = useNavigate();
//   let location = useLocation();
//   const [activeLink, setActiveLink] = useState(location.pathname);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleClick = (path) => {
//     setActiveLink(path);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="w-72 p-8 bg-white font-normal shadow-lg font-ubuntu">
//       < nav className='space-y-4'>
//         <div className="flex items-center justify-between p-2 text-gray-700 hover:text-blue-400 cursor-pointer" onClick={toggleDropdown}>
//           <div className='flex items-center'>
//           <FiHome className="w-6 h-6" />
//           <span className="ml-3">Dashboard </span>
//           </div>
//           <FaChevronDown className='mr-2'/>
//         </div>
//         {isDropdownOpen && (
//           <div className="ml-6">
//             <Link 
//               to="/admin" 
//               onClick={() => handleClick("/admin")} 
//               className={`flex items-center p-2 ${activeLink === "/admin" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//             >
//               <FiHome className="w-6 h-6" />
//               <span className="ml-3">Home</span>
//             </Link>
//             <Link 
//               to="/admin/orders" 
//               onClick={() => handleClick("/admin/orders")} 
//               className={`flex items-center p-2 ${activeLink === "/admin/orders" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//             >
//               <FiBox className="w-6 h-6" />
//               <span className="ml-3">Orders</span>
//             </Link>
//             <Link 
//               to="/admin/addproducts" 
//               onClick={() => handleClick("/admin/addproducts")} 
//               className={`flex items-center p-2 ${activeLink === "/admin/addproducts" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//             >
//               <FiUsers className="w-6 h-6" />
//               <span className="ml-3">Products</span>
//             </Link>
//             <Link 
//               to="/customers" 
//               onClick={() => handleClick("/customers")} 
//               className={`flex items-center p-2 ${activeLink === "/customers" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//             >
//               <FiUsers className="w-6 h-6" />
//               <span className="ml-3">Customers</span>
//             </Link>
//           </div>
//         )}
//         <Link 
//           to="/payouts" 
//           onClick={() => handleClick("/payouts")} 
//           className={`flex items-center p-2 ${activeLink === "/payouts" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiDollarSign className="w-6 h-6" />
//           <span className="ml-3">Pay Outs</span>
//         </Link>
//         <Link 
//           to="/earnings" 
//           onClick={() => handleClick("/earnings")} 
//           className={`flex items-center p-2 ${activeLink === "/earnings" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiDollarSign className="w-6 h-6" />
//           <span className="ml-3">Earnings</span>
//         </Link>
//         {/* <Link 
//           to="/manage-pdf-header" 
//           onClick={() => handleClick("/manage-pdf-header")} 
//           className={`flex items-center p-2 ${activeLink === "/manage-pdf-header" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Manage Print PDF Header Info</span>
//         </Link> */}
//         <Link 
//           to="/review" 
//           onClick={() => handleClick("/review")} 
//           className={`flex items-center p-2 ${activeLink === "/review" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Review</span>
//         </Link>
//         <Link 
//           to="/returns" 
//           onClick={() => handleClick("/returns")} 
//           className={`flex items-center p-2 ${activeLink === "/returns" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Returns</span>
//         </Link>
//         <Link 
//           to="/assign-products" 
//           onClick={() => handleClick("/assign-products")} 
//           className={`flex items-center p-2 ${activeLink === "/assign-products" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Assign Products</span>
//         </Link>
//         <Link 
//           to="/assign-product-list" 
//           onClick={() => handleClick("/assign-product-list")} 
//           className={`flex items-center p-2 ${activeLink === "/assign-product-list" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Assign Product List</span>
//         </Link>
//         <Link 
//           to="/request-quote" 
//           onClick={() => handleClick("/request-quote")} 
//           className={`flex items-center p-2 ${activeLink === "/request-quote" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Request for Quote</span>
//         </Link>
//         <Link 
//           to="/settings" 
//           onClick={() => handleClick("/settings")} 
//           className={`flex items-center p-2 ${activeLink === "/settings" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Settings</span>
//         </Link>
//         <Link 
//           to="/seller-info" 
//           onClick={() => handleClick("/seller-info")} 
//           className={`flex items-center p-2 ${activeLink === "/seller-info" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
//         >
//           <FiSettings className="w-6 h-6" />
//           <span className="ml-3">Seller Information</span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiDollarSign, FiSettings, FiHome, } from 'react-icons/fi';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-72 p-8 bg-white font-normal shadow-lg font-ubuntu">
      <nav className='space-y-4'>
        <div className="flex items-center justify-between p-2 text-gray-700 hover:text-blue-400 cursor-pointer" onClick={toggleDropdown}>
          <div className='flex items-center'>
          <FiHome className="w-6 h-6" />
            <span className="ml-3">Dashboard</span>
          </div>
          {isDropdownOpen ? <FaChevronUp className='mr-2' /> : <FaChevronDown className='mr-2' />}
        </div>
        {isDropdownOpen && (
          <ul className="ml-6">
            <li>
              <Link
                to="/admin"
                onClick={() => handleClick("/admin")}
                className={`flex items-center p-2 ${activeLink === "/admin" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
              >
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/orders"
                onClick={() => handleClick("/admin/orders")}
                className={`flex items-center p-2 ${activeLink === "/admin/orders" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
              >
                <span className="ml-3">Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/addproducts"
                onClick={() => handleClick("/admin/addproducts")}
                className={`flex items-center p-2 ${activeLink === "/admin/addproducts" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
              >
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/customers"
                onClick={() => handleClick("/admin/customers")}
                className={`flex items-center p-2 ${activeLink === "/admin/customers" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
              >
                <span className="ml-3">Customers</span>
              </Link>
            </li>
          </ul>
        )}
        <Link
          to="/admin/payouts"
          onClick={() => handleClick("/admin/payouts")}
          className={`flex items-center p-2 ${activeLink === "/admin/payouts" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiDollarSign className="w-6 h-6" />
          <span className="ml-3">Pay Outs</span>
        </Link>
        <Link
          to="/admin/earnings"
          onClick={() => handleClick("/earnings")}
          className={`flex items-center p-2 ${activeLink === "/admin/earnings" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiDollarSign className="w-6 h-6" />
          <span className="ml-3">Earnings</span>
        </Link>
        <Link
          to="/review"
          onClick={() => handleClick("/review")}
          className={`flex items-center p-2 ${activeLink === "/review" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Review</span>
        </Link>
        <Link
          to="/returns"
          onClick={() => handleClick("/returns")}
          className={`flex items-center p-2 ${activeLink === "/returns" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Returns</span>
        </Link>
        <Link
          to="/assign-products"
          onClick={() => handleClick("/assign-products")}
          className={`flex items-center p-2 ${activeLink === "/assign-products" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Assign Products</span>
        </Link>
        <Link
          to="/assign-product-list"
          onClick={() => handleClick("/assign-product-list")}
          className={`flex items-center p-2 ${activeLink === "/assign-product-list" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Assign Product List</span>
        </Link>
        <Link
          to="/request-quote"
          onClick={() => handleClick("/request-quote")}
          className={`flex items-center p-2 ${activeLink === "/request-quote" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Request for Quote</span>
        </Link>
        <Link
          to="/settings"
          onClick={() => handleClick("/settings")}
          className={`flex items-center p-2 ${activeLink === "/settings" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Settings</span>
        </Link>
        <Link
          to="/seller-info"
          onClick={() => handleClick("/seller-info")}
          className={`flex items-center p-2 ${activeLink === "/seller-info" ? "text-blue-400" : "text-gray-600"} hover:text-blue-400`}
        >
          <FiSettings className="w-6 h-6" />
          <span className="ml-3">Seller Information</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

