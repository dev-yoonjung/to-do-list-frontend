import ReactDOM from "react-dom/client";
import App from "containers/app";

import "antd/dist/antd.min.css";
import GlobalStyle from "styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
