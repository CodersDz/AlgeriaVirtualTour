import React, { useState } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
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
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/Search/:categorie" component={SearchCatégorie} />
          <Route exact path="/Search" component={SearchPage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/LegalNotice" component={LegalNotice} />
          <Route exact path="/Map" component={Map} />
          <Route exact path="/wilaya/:wilayaId" component={Wilaya} />
          <Route
            exact
            path="/location/:locationId"
            component={LocationCarousel}
          />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
