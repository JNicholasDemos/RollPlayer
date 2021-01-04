/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react"; //eslint-disable-line
import { PropTypes } from "prop-types";
import * as styles from "./CardHeader.styles";

const CardHeader = (inputs) => {
  const { headerTitle = "", children, ...props } = inputs;

  return (
    <div
      data-testid="card-header"
      id="card-header"
      {...props}
      css={styles.cardHeader}
    >
      {headerTitle}
      <div>{children}</div>
    </div>
  );
};

CardHeader.propTypes = {
  headerTitle: PropTypes.node,
};

export default CardHeader;
