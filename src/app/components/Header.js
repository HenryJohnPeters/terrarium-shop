import { FaInstagram, FaFacebook } from "react-icons/fa"; // Importing icons from react-icons
import Link from "next/link"; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-green-800 text-black p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <h1 className="text-4xl font-extrabold text-white hover:text-green-600 cursor-pointer transition-all duration-300 transform hover:scale-105">
          That Green Lady
        </h1>

        {/* Navigation Bar */}
        <nav className="flex space-x-8">
          <Link href="/">
            <span className="text-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
              Home
            </span>
          </Link>
          <Link href="/products">
            <span className="text-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
              Products
            </span>
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-600 transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-600 transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
