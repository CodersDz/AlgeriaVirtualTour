import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import useWindowSize from "../hooks/useWindowSize";
import React from "react";
const PagesWithNavbar_Footer = () => {
  const isDesktop = useWindowSize();
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      {isDesktop && <Footer />}
    </React.Fragment>
  );
};

export default PagesWithNavbar_Footer;
