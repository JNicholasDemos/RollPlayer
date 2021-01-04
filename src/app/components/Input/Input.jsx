/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./Input.styles";
import React from "react";

const Input = (inputProps) => {
  const {
    prefix,
    prependString,
    onChange,
    textAlign,
    value,
    hasError,
    ...props
  } = inputProps;
  const handleChange = (event) => {
    if (typeof onChange === "function") {
      onChange(event.target.value.replace(prependString, ""), event);
    }
  };

  const finalProps = {
    onChange: handleChange,
    value: prependString ? `${prependString}${value}` : value,
    css: styles.InputTheme(textAlign, hasError),
    type: "text",
    "data-testid": "input",
    autoComplete: "off",
    ...props,
  };

  return (
    <div>
      {prefix && (
        <div data-testid="input-container" css={{ display: "flex" }}>
          {prefix && (
            <div
              id="input-prefix"
              data-testid="input-prefix"
              css={styles.PrefixInput(hasError)}
            >
              {prefix}
            </div>
          )}
          <div
            data-testid="input-proper"
            css={{
              width: "100%",
            }}
          >
            <input {...finalProps} />
          </div>
        </div>
      )}
      {!prefix && (
        <div data-testid="input-no-prefix">
          <input {...finalProps} />
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  textAlign: "left",
  prependString: null,
  hasError: false,
};

export default Input;
