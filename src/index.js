import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./features";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
