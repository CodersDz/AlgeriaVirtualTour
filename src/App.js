import React from "react";
import Toggle from "./components/Toggle";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//-----------------Components/pages imports---------------
import Home from "./pages/Home/Home";
import StartPage from "./pages/StartPage/StartPage";
import LogIn from "./pages/LogIn/LogIn";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={LogIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
