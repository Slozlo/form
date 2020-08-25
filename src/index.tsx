import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "@containers/App";
import store from "@store/index";
import { createGlobalStyle } from "styled-components";
// @ts-ignore
import RobotoFonts from "./fonts/Roboto/Roboto-Regular.ttf";

console.log("RobotoFonts = ", RobotoFonts);

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: url(${RobotoFonts})  format('truetype');
}
  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Roboto';
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
