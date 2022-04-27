import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import useWindowSize from "../hooks/useWindowSize";
const PagesWithNavbar_Footer = () => {
  const isDesktop = useWindowSize();
  return (
    <>
      <Navbar />
      <Outlet />
      {isDesktop && <Footer />}
    </>
  );
};

export default PagesWithNavbar_Footer;
