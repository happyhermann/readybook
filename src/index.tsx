import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Reset } from "styled-reset";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./routes/SignUp";
import Login from "./routes/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Helmet>
      <title>레디북스</title>
    </Helmet>
    <Reset />
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </div>
);
