import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous image navigation
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle navigation dots click
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Slider */}
      <div className="overflow-hidden rounded-xl shadow-xl">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Terrarium ${index + 1}`}
                className="w-full h-[40vh] object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-700 text-white p-4 rounded-full hover:bg-green-800 transition-all duration-300"
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-700 text-white p-4 rounded-full hover:bg-green-800 transition-all duration-300"
      >
        <span className="text-2xl">&gt;</span>
      </button>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
