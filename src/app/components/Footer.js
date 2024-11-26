const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold text-green-200 mb-4">
          © 2024 Terrarium Shop. All rights reserved.
        </p>
        <div className="space-x-6">
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
      </div>
    </footer>
  );
};

export default Footer;
