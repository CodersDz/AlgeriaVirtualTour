import React, { useState } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//-----------------Components/pages imports---------------
import Home from "./pages/Home/Home";
import StartPage from "./pages/StartPage/StartPage";
import LogIn from "./pages/LogIn/LogIn";
import SearchPage from "./pages/SearchPage/SearchPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SearchCatégorie from "./pages/SearchCatégorie/SearchCatégorie";
import Wilaya from "./pages/Wilaya/Wilaya";
import Map from "./pages/Map/Map";
import LocationCarousel from "./pages/LocationCarousel/LocationCarousel";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/Login" component={LogIn} />
        <Route exact path="/Search/:categorie" component={SearchCatégorie} />
        <Route exact path="/Search" component={SearchPage} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Map" component={Map} />
        <Route exact path="/wilaya/:wilayaname" component={Wilaya} />
        <Route exact path="/location/:location" component={LocationCarousel} />
      </Switch>
    </div>
  );
}

export default App;
