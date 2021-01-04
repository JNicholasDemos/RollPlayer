/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react"; //eslint-disable-line
import * as styles from "./CardBody.styles";

export default ({ children, ...props }) => {
  return (
    <div
      data-testid="card-body"
      id="card-body"
      css={styles.CardBody}
      {...props}
    >
      {children}
    </div>
  );
};
