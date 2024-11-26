import React, { useState } from "react";
import Image from "next/image"; // Import the Next.js Image component

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next product navigation with correct bounds
  const nextProduct = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next product
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  // Handle previous product navigation with correct bounds
  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // Move to previous product
    } else {
      setCurrentIndex(products.length - 3); // Loop back to the last product
    }
  };

  return (
    <div className="relative bg-green-800 w-full m-2 p-2">
      {/* Product Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 3}%)`,
          }}
        >
          {products.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/3 px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
                {/* Use Image component instead of <img> */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500} // Define width and height
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-800">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mt-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-600">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleBuyProduct(product.name)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform group-hover:scale-105"
                    >
                      Buy Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevProduct}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-700 text-white p-4 rounded-full hover:bg-green-800 transition-all duration-300"
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        onClick={nextProduct}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-700 text-white p-4 rounded-full hover:bg-green-800 transition-all duration-300"
      >
        <span className="text-2xl">&gt;</span>
      </button>
    </div>
  );
};

export default ProductSlider;
