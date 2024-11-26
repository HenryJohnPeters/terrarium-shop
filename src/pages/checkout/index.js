"use client";
import { useState, useEffect } from "react";
// import Link from "next/link";

// Mock cart data
const mockCart = [
  {
    id: 1,
    name: "Terrarium Kit 1",
    price: 39.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Terrarium Kit 2",
    price: 49.99,
    quantity: 2,
  },
];

const Checkout = () => {
  const [cart] = useState(mockCart); // In a real app, fetch this from state or context
  const [total, setTotal] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    email: "",
  });

  // Calculate total amount
  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    console.log("User Details:", userDetails);
    console.log("Cart Items:", cart);

    // Redirect to a confirmation page
    // router.push("/order-confirmation");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cart Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Cart
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 font-bold text-lg">
              <span>Total: ${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Billing Information
            </h2>
            <form onSubmit={handleCheckout}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-lg font-medium text-gray-700"
                >
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
