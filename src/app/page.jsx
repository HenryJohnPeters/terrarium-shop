// src/app/page.jsx
"use client";
import Layout from "./components/Layout"; // Import Layout (Header and Footer)
import Title from "../app/components/Title"; // Import the Title component
import AboutUs from "../app/components/About"; // Import the AboutUs component
import ProductSlider from "./components/sliders/ProductSlider"; // Import the ProductSlider component
import products from "../../public/constants/products"; // Import your products
import "../app/globals.css"; // Import global CSS for styling and Tailwind integration

const Page = () => {
  return (
    <Layout>
      <Title />
      <ProductSlider products={products} />
      <AboutUs />
    </Layout>
  );
};

export default Page;
