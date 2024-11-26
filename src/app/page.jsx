// src/app/page.jsx
"use client";
import Title from "../app/components/Title"; // Import the Title component
import AboutUs from "../app/components/About"; // Import the AboutUs component
import ProductSlider from "./components/sliders/ProductSlider"; // Import the ProductSlider component
import products from "../../public/constants/products"; // Import your products
import "../app/globals.css"; // Import global CSS for styling and Tailwind integration

const Page = () => {
  return (
    <>
      <Title />
      <ProductSlider products={products} />
      <AboutUs />
    </>
  );
};

export default Page;
