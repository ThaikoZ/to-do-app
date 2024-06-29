import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes.tsx";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <Routes />
    </Theme>
  </React.StrictMode>
);
