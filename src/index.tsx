import { render } from "react-dom";

import App from "containers/app";

import GlobalStyle from "styles/GlobalStyle";

const targetHTMLElement = document.getElementById("root");

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  targetHTMLElement
);
