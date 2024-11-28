"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Social Icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulating sending message. You can replace this with the actual form submission logic.
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact Us</h2>

        <div className="bg-white text-black rounded-lg p-8 shadow-xl max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-green-800"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xl font-semibold text-green-800"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xl font-semibold text-green-800"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                rows="5"
                required
              ></textarea>
            </div>

            {status && (
              <div className="text-center text-lg font-semibold mt-4">
                <span
                  className={`${
                    status.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Optional: Social Media Section */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800 mb-4">
            Follow Us On Social Media
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
