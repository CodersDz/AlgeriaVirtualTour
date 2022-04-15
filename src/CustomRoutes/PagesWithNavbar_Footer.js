import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AnimatedProvider } from "../context/AnimatedProvider";
const PagesWithNavbar_Footer = () => {
  return (
    <AnimatedProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AnimatedProvider>
  );
};

export default PagesWithNavbar_Footer;
