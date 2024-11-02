import React,{useEffect,useState} from "react";
import Cart from "./Cart";
import Navbar from "../Navbar/Navbar";
import Mine from "../Data/Data";

function Shop() {

  const [checkVisibility, setCheckVisibility] = useState(false)

  // store the value in local storage
  const[cartproducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem('mymobilify-data')) || []
  )
useEffect(() => {
localStorage.setItem('mymobilify-data', JSON.stringify(cartproducts))
}, [cartproducts])
const addProduct = (product)=>{
const newProduct = {
    ...product, 
    count : 1
}
setCartProducts([...cartproducts, newProduct])
}

const onRemoveitem = (remove)=>{
  const updateCart = cartproducts.filter((product)=>product.id !== remove.id)
  setCartProducts(updateCart)
} 

  return (
    <>
    <Cart
    Visibility = {checkVisibility}
    products = {cartproducts}
    onClose = {()=>setCheckVisibility(false)}
    onRemoveitem = {onRemoveitem}
    />
    
    <div className={`sticky top-0 z-30 transition-all duration-300 ${checkVisibility ? "mt-64" : "mt-0"}`}>
        <Navbar cartproducts={cartproducts} setCheckVisibility={setCheckVisibility} />
      </div>
      <main className="bg-blue-300 rounded-2xl min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            SalePhone Market 'Ss'
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Mine.map((product) => (
              <div
                className="bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative group"
                key={product.id}
              >
                {/* Blurred Image */}
                <img
                  className="w-full h-80 object-cover rounded-t-lg opacity-80 filter blur-sm transition duration-300 transform group-hover:scale-110 group-hover:opacity-0 group-hover:blur-none"
                  src={product.Image}
                  alt={product.name}
                />
                
                {/* Clear Image on Hover */}
                <img
                  className="w-full h-96 object-cover rounded-t-lg absolute top-0 left-0 opacity-0 transition duration-300 transform group-hover:opacity-100 group-hover:scale-110 "
                  src={product.Image}
                  alt={product.name}

                />

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-lg text-blue-600 font-bold">
                    ${product.price}
                  </span>
                  <p className="text-gray-500 mt-2">{product.description}</p>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-blue-600  text-white px-6 py-2 rounded-full hover:bg-green-500 transition duration-300" onClick={()=>addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Shop;
