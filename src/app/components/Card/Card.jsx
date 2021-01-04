/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./Card.styles";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

function Card(props) {
  const { children, "data-testid": testId = "card" } = props;

  return (
    <div css={styles.CardWrapper} data-testid={testId}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;

Card.defaultProps = {};

export default Card;
