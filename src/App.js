import React from "react";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import Profile from "./pages/Profile/Profile";
import RequireAuth from "./CustomRoutes/RequireAuth";
import InfoPopUp from "./components/InfoPopUp/InfoPopUp";
import PagesWithNavbar_Footer from "./CustomRoutes/PagesWithNavbar_Footer";
import { PageContainerGlobal } from "./GlobalStyles";
import ChooseLanguage from "./pages/ChooseLanguage/ChooseLanguage";
import { useSelector } from "react-redux";
function App() {
  const location = useLocation();
  const showInfoPopUp = useSelector((state) => state.infoPopUp.value.show);
  const type = useSelector((state) => state.infoPopUp.value.type);
  const text = useSelector((state) => state.infoPopUp.value.text);
  const navigate = useNavigate();

  return (
    <PageContainerGlobal>
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes*/}
          <Route path="/" element={<StartPage />} />
          <Route element={<PagesWithNavbar_Footer />}>
            <Route path="/home" element={<Home />} />
            <Route path="/Search/:categorie" element={<SearchCatégorie />} />
            <Route path="/Search" element={<SearchPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LegalNotice" element={<LegalNotice />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/wilaya/:wilayaId" element={<Wilaya />} />
            <Route
              path="/location/:locationId"
              element={<LocationCarousel />}
            />
          </Route>

          <Route path="/Authentification/*" element={<LogIn />} />
          {/* Privates Routes*/}
          <Route element={<RequireAuth />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
        {showInfoPopUp && <InfoPopUp type={type} text={text} />}
      </ScrollToTop>
    </PageContainerGlobal>
  );
}

export default App;
