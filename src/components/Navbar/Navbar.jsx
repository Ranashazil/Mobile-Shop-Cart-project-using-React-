import React from 'react';
import { IoMdCart } from "react-icons/io";

function Navbar({cartproducts, setCheckVisibility}) {
  return (
    <nav className="bg-blue-600  p-4 hover:text-gray-400 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
       
         <div className="flex items-center space-x-2">
          <img 
            src="https://clipart-library.com/images/8iE655bBT.jpg" 
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10" 
          />
          <h2 className="text-white text-xl md:text-2xl font-bold">Mobilify</h2>
        </div>

     
        <ul className=" hidden md:flex space-x-6 hover:text-green-300">
          <li>
            <a href="/" className="text-white hover:text-blue-300 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/Shop" className="text-white hover:text-blue-300 transition duration-300">
              Shop
            </a>
          </li>
        </ul>
        <button
        className="relative flex items-center text-white hover:text-green-400"
        onClick={() => setCheckVisibility(true)} // Correctly invoke setCheckVisibility here
      >
        <IoMdCart size={30} />
        {cartproducts.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartproducts.length}
          </span>
        )}
      </button>
        
      </div>
    </nav>
  );
}

export default Navbar;



