import { useRouter } from "next/router";
import Image from "next/image"; // Import Next.js Image component
import products from "../../../public/constants/products";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600} // Specify width for optimization
            height={600} // Specify height for optimization
            className="w-full h-96 object-cover rounded-lg shadow-md"
            priority // Optionally use 'priority' for faster loading
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-green-800">
            {product.name}
          </h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-gray-700 mt-4">{product.details}</p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
