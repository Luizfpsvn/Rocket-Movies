import React from "react";

import ReactDOM from "react-dom/client";

import { myContext } from "./myContext";

import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyle from "./styles/global";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <myContext.Provider
        value={{ name: "Rodrigo G", email: "rodrigo@email.com" }}
      >
        <Routes />
      </myContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
