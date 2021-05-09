import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import '../src/resources/images/logo.png'

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDom.render(app, document.getElementById("app"));
