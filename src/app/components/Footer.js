"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-4 mt-0">
      <div className="container mx-auto text-center px-6">
        {/* Copyright Notice */}
        <p className="text-lg font-semibold text-green-200 mb-4">
          © 2024 Terrarium Shop. All rights reserved.
        </p>

        {/* Footer Navigation Links */}
        <div className="space-x-6 mb-4">
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 transition-all duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
