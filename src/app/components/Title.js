import React, { useState, useEffect } from "react";

// ImageSlider component
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous image navigation
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next product
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); // Loop back to the last product
  };

  // Handle navigation dots click
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden shadow-lg">
      {/* Slider */}
      <div className="overflow-hidden shadow-xl">
        <div
          className="flex transition-all duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Fixed for slider transition
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-screen">
              <img
                src={image}
                alt={`Terrarium ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300"
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300"
      >
        <span className="text-2xl">&gt;</span>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
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

// Title component
const Title = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Update scrollY position on scroll
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Image Slider */}
      <ImageSlider
        images={[
          "/assets/terrarium-1.jpg",
          "/assets/terrarium-2.jpg",
          "/assets/terrarium-3.jpg",
        ]}
      />

      {/* Text Overlay with Strong Background for Readability */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-6 sm:px-12"
        style={{
          // Parallax effect: Adjust the opacity of the text depending on scroll
          opacity: 1 - scrollY / 700, // This gives a fade effect with scroll
        }}
      >
        <div className="relative p-6 sm:p-12 rounded-lg bg-green-800 text-center opacity-90">
          <h2 className="text-6xl font-extrabold text-white mb-8 leading-tight tracking-wider">
            Welcome to <span className="text-green-400">That Green Lady</span>
          </h2>
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed opacity-90">
            Explore, create, and design your perfect terrarium. Immerse yourself
            in nature with our stunning, customizable terrariums, bringing the
            beauty of the outdoors into your space.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg shadow-md hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
