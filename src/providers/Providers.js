import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CookieContextProvider } from "./CookieProvider";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <CookieContextProvider>{children}</CookieContextProvider>
    </BrowserRouter>
  );
};

Providers.propTypes = {
  children: PropTypes.any,
};

export default Providers;
