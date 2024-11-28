"use client";
import { useState } from "react";
import { FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa"; // Social icons and hamburger
import Link from "next/link"; // Navigation links
import Image from "next/image"; // Next.js Image component for optimized images

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/logo.png" // Replace with your logo image
                alt="That Green Lady Logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <h1 className="text-3xl font-extrabold text-white hover:text-green-300 transition-all duration-300 transform hover:scale-105">
                That Green Lady
              </h1>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={28} className="text-white" />
            ) : (
              <FaBars size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Navigation Bar for Medium and Larger Screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <span className="text-xl hover:text-green-400 transition-all duration-300 transform hover:scale-105">
              Home
            </span>
          </Link>
          <Link href="/products">
            <span className="text-xl hover:text-green-400 transition-all duration-300 transform hover:scale-105">
              Products
            </span>
          </Link>
          <Link href="/about">
            <span className="text-xl hover:text-green-400 transition-all duration-300 transform hover:scale-105">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-xl hover:text-green-400 transition-all duration-300 transform hover:scale-105">
              Contact
            </span>
          </Link>

          {/* Shopping Basket Icon */}
          <Link href="/checkout" className="relative flex items-center">
            <FaShoppingBasket size={24} />
            <span className="absolute top-0 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3 {/* Update this dynamically based on cart count */}
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white text-black w-full p-4 rounded-lg shadow-lg`}
      >
        <Link href="/">
          <div
            className="block py-3 text-xl text-black bg-white rounded-lg mb-2 hover:bg-green-500 hover:text-black transition-all duration-300 px-4"
            onClick={toggleMenu}
          >
            Home
          </div>
        </Link>
        <Link href="/products">
          <div
            className="block py-3 text-xl text-black bg-white rounded-lg mb-2 hover:bg-green-500 hover:text-black transition-all duration-300 px-4"
            onClick={toggleMenu}
          >
            Products
          </div>
        </Link>
        <Link href="/about">
          <div
            className="block py-3 text-xl text-black bg-white rounded-lg mb-2 hover:bg-green-500 hover:text-black transition-all duration-300 px-4"
            onClick={toggleMenu}
          >
            About Us
          </div>
        </Link>
        <Link href="/contact">
          <div
            className="block py-3 text-xl text-black bg-white rounded-lg mb-2 hover:bg-green-500 hover:text-black transition-all duration-300 px-4"
            onClick={toggleMenu}
          >
            Contact Us
          </div>
        </Link>

        {/* Shopping Basket in Mobile Menu */}
        <Link href="/checkout">
          <div
            className="block py-3 text-xl text-black bg-white rounded-lg mb-2 hover:bg-green-500 hover:text-black transition-all duration-300 px-4"
            onClick={toggleMenu}
          >
            <div className="flex items-center space-x-2">
              <span>Basket</span>
              <span className="bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3 {/* Update this dynamically based on cart count */}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
