/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import * as styles from "./Spinner.styles";
import logo from "./logo.svg";

const Spinner = () => {
  return <img src={logo} css={styles.Applogo} alt="logo" />;
};

export default Spinner;
