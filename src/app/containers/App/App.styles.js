export const App = {
  textAlign: "center",
};

export const Applogo = {
  height: "40vmin",
  pointerEvents: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: "App-logo-spin infinite 20s linear",
  },
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
};

export const Appheader = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
};

export const Applink = {
  color: "#61dafb",
};
