import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import ReactGA from 'react-ga';
const TRACKING_ID = "G-2T4D60PHLV"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDom.render(app, document.getElementById("app"));
