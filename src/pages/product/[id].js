import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    name: "Terrarium Kit 1",
    description: "A beautiful terrarium kit to get you started.",
    price: "49.99",
    image: "/assets/terrarium-1.jpg",
    details: "Includes a variety of plants, stones, and decorative elements.",
  },
  {
    id: 2,
    name: "Terrarium Kit 2",
    description: "A premium kit for plant enthusiasts.",
    price: "69.99",
    image: "/assets/terrarium-2.jpg",
    details: "Includes premium plants, decorative glass, and tools.",
  },
  {
    id: 3,
    name: "Terrarium Kit 3",
    description: "Create your perfect terrarium with this kit.",
    price: "59.99",
    image: "/assets/terrarium-3.jpg",
    details:
      "This kit is perfect for beginners and includes everything you need.",
  },
];

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
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
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
