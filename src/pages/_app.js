// src/pages/_app.js
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import "../app/globals.css"; // Global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} /> {/* This renders the page content */}
      <Footer />
    </>
  );
}

export default MyApp;
