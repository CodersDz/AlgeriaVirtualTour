import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
//-----------------Components/pages imports---------------
import Home from "./pages/Home/Home";
import StartPage from "./pages/StartPage/StartPage";
import LogIn from "./pages/LogIn/LogIn";
import SearchPage from "./pages/SearchPage/SearchPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LegalNotice from "./pages/LegalNotice/LegalNotice";
import SearchCatégorie from "./pages/SearchCatégorie/SearchCatégorie";
import Wilaya from "./pages/Wilaya/Wilaya";
import Map from "./pages/Map/Map";
import LocationCarousel from "./pages/LocationCarousel/LocationCarousel";
import ScrollToTop from "./assets/utilities/ScrollToTop";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Search/:categorie" element={<SearchCatégorie />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LegalNotice" element={<LegalNotice />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/wilaya/:wilayaId" element={<Wilaya />} />
          <Route path="/location/:locationId" element={<LocationCarousel />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
