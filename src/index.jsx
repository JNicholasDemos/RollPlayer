import React from "react";
import ReactDOM from "react-dom";
import App from "./app/containers/App/App";
import reportWebVitals from "./reportWebVitals";
import Providers from "./providers/Providers";
import { jsx, css, Global } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif",
          ],
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
        code: {
          fontFamily: [
            "source-code-pro",
            "Menlo",
            "Monaco",
            "Consolas",
            "Courier New",
          ],
        },
      }}
    />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
