import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import User from "./Chai.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <User />
  </React.StrictMode>
);
