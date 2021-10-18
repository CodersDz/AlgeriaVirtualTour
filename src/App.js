import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//-----------------Components/pages imports---------------
import Home from "./pages/Home/Home";
import StartPage from "./pages/StartPage/StartPage";
import LogIn from "./pages/LogIn/LogIn";
import SearchPage from "./pages/SearchPage/SearchPage";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/Search" component={SearchPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
