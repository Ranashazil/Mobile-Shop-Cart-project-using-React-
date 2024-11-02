import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

function Cart({ Visibility, products, onClose, onRemoveitem }) {
  return (
    <>
      {/* Overlay for background dimming */}
      {Visibility && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}
      {/* Cart sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-blue-200 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          Visibility ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Cart header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Shopping Cart</h1>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            <IoMdCloseCircle size={24} />
          </button>
        </div>

        {/* Cart items */}
        <div className="p-4 space-y-4  overflow-y-auto h-3/4">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={product.id ? `${product.id}-${index}` : index}
                className="flex items-center bg-gray-100 hover:bg-gray-300 rounded-lg p-4 shadow-md"
              >
                <img
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                  src={product.Image}
                  alt={product.name}
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <span className="text-blue-600 font-bold">
                    ${product.price * product.count}
                  </span>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 ml-4"
                  onClick={() => onRemoveitem(product)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <span className="text-center text-gray-500">Your cart is empty</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
