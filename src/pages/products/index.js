import Link from "next/link";
import Image from "next/image"; // Import the Image component from next/image
import products from "../../../public/constants/products";

export default function Products() {
  return (
    <div className="bg-white w-full min-h-screen py-12 px-6">
      <h1 className="text-5xl font-extrabold text-center text-green-800 mb-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            {/* Use Image component instead of <img> */}
            <Image
              src={product.image}
              alt={product.name}
              width={500} // Set a width for the image
              height={400} // Set a height for the image
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                <Link href={`/products/${product.id}`}>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
