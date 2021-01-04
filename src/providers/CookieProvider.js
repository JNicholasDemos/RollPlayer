/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

const CookieContext = createContext();

const CookieContextProvider = (props) => {
  const { children } = props;
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const state = {
    setCookie,
    myString: getCookie("myString"),
  };

  return (
    <CookieContext.Provider value={{ ...state }}>
      {children}
    </CookieContext.Provider>
  );
};

const useCookieContext = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookieContext must be used within a CookieContext");
  }
  return context;
};

CookieContextProvider.propTypes = {
  featureProps: PropTypes.object,
  children: PropTypes.any,
};

export { CookieContextProvider, useCookieContext };
