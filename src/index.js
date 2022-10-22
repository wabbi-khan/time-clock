import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "react-use-cart";
import reducer from "./context/reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
