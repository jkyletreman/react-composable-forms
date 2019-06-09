import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  // env variable resolves based on envs, need for SPAs on Netlify/Ghub pages -> can't understand client side routing
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
