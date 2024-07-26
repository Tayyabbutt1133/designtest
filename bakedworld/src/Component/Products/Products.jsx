import React, { useState } from "react";
import "./products.css";
import product1 from "../../assets/img/Berry1-caro.png";
import product2 from "../../assets/img/Berry2-caro.png";
import product3 from "../../assets/img/cake.jpg";

export default function Products() {
  // State for each product with separate images
  const [products, setProducts] = useState([
    { id: 1, quantity: 1, packSize: "1", image: product1, name: "Pain au Cranberry"},
    { id: 2, quantity: 1, packSize: "1", image: product2, name: "Roasted Pear Danish" },
    { id: 3, quantity: 1, packSize: "1", image: product3, name: "Cheese Cake"},
  ]);

  const increaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(product.quantity - 1, 1) } : product
    ));
  };

  const handlePackSizeChange = (id, value) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, packSize: value } : product
    ));
  };

  return (
    <>
      <section className="product-slider mt-24">
        {/* heading */}
        <div className="slider-heading"></div>

        {/* Container to hold product boxes in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="product-box p-4 border border-gray-200 rounded-lg bg-white w-full max-w-sm mx-auto">
              <div className="bg-[rgba(207,140,11,0.5)] p-2 rounded">
                <img className="w-full h-32 object-cover" src={product.image} alt="Product" />
              </div>
              {/* heading */}
                  <strong className="text-sm">{product.name}</strong>
              {/* paragraph */}
              <p className="text-xs mt-4">
                A delightful spiral pastry filled with light French vanilla cream
                and studded with seasonal berries.
              </p>
              {/* Quantity Selector */}
              <div className="flex items-center mt-4">
                <select
                  value={product.packSize}
                  onChange={(e) => handlePackSizeChange(product.id, e.target.value)}
                  className="bg-[rgba(207,140,11,0.5)] p-1 rounded-md text-black font-semibold border-none outline-none text-xs"
                >
                  <option className="text-black" value="1">Pack of 8</option>
                  <option className="text-black" value="2">Pack of 2</option>
                  <option className="text-black" value="4">Pack of 4</option>
                  <option className="text-black" value="6">Pack of 6</option>
                </select>

                <div className="quantity-container flex items-center bg-[rgba(207,140,11,0.5)] rounded-md shadow-lg ml-4">
                  <button
                    className="px-2 py-1 text-lg rounded-l-md text-orange-500 hover:bg-[rgba(207,140,11,0.6)]"
                    onClick={(e) => {
                      e.preventDefault();
                      decreaseQuantity(product.id);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={product.quantity}
                    readOnly
                    className="text-center w-10 bg-transparent text-white border-none outline-none"
                  />
                  <button
                    className="px-2 py-1 text-lg rounded-r-md text-orange-500 hover:bg-[rgba(207,140,11,0.6)]"
                    onClick={(e) => {
                      e.preventDefault();
                      increaseQuantity(product.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold ml-28 text-md">$128</p>
              </div>
              {/* add to cart */}
              <button className="bg-[rgba(207,140,11,0.5)] mt-2 rounded py-2 px-2 text-xs font-semibold">
                <span className="text-orange-500">+</span> Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
