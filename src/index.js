import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import ReactGA from 'react-ga';
ReactGA.initialize('G-H78V6B9YBE'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDom.render(app, document.getElementById("app"));
