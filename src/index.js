import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { InfoPopUpProvider } from "./context/InfoPopUpProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <InfoPopUpProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </InfoPopUpProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
