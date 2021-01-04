/** @jsxRuntime classic */
/** @jsx jsx */
import logo from "./logo.svg";
import "./App.styles.js";
import { jsx, css } from "@emotion/react";
import * as styles from "./App.styles";

function App() {
  return (
    <div css={styles.App}>
      <header css={styles.Appheader}>
        <img src={logo} css={styles.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={styles.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
