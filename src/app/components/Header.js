import { FaInstagram, FaFacebook, FaShoppingBasket } from "react-icons/fa"; // Importing icons from react-icons
import Link from "next/link"; // Import Link for navigation
import Image from "next/image"; // Use Next.js Image component for logo

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo, Title, and Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/logo.png" // Replace with your logo image
            alt="That Green Lady Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-4xl font-extrabold text-white hover:text-green-600 cursor-pointer transition-all duration-300 transform hover:scale-105">
            That Green Lady
          </h1>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
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

        {/* Navigation Bar */}
        <nav className="space-x-8 hidden md:flex">
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

        {/* Shopping Basket Icon */}
        <div className="flex items-center space-x-4">
          <Link href="/checkout">
            <div className="relative">
              <FaShoppingBasket size={28} />
              {/* Add a badge for cart items */}
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3 {/* Update this dynamically based on cart count */}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
