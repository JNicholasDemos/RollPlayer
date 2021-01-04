/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./PlayerCharacter.styles";
import Spinner from "../../components/Spinner/Spinner";

function PlayerCharacter() {
  return (
    <div css={styles.PlayerBody}>
      <Spinner />
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
    </div>
  );
}

export default PlayerCharacter;
