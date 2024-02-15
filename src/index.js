import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cursor from "./context/CursorContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Cursor>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Cursor>
);
