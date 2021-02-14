import React from "react";
import ReactDOM from "react-dom";
import { UserProviderContext } from "./context/UserContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProviderContext>
      <App />
    </UserProviderContext>
  </React.StrictMode>,
  document.getElementById("root")
);
