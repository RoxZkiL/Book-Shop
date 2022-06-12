import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Strore/index";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <NavBar />
      <App />
    </React.StrictMode>
  </Provider>
);
