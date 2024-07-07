import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TailwindIndicator from "./Components/TailwindIndicator.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <TailwindIndicator />
    </BrowserRouter>
  </React.StrictMode>
);
