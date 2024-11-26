// src/app/components/Layout.js
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-green-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
