export const PrefixInput = (hasError) => ({
  textAlign: "center",
  border: hasError
    ? `1px solid hsl(360, 100%, 50%)`
    : `1px solid hsl(210, 18%, 90%)`,
  borderRight: "none",
  color: hasError ? "#fff" : "hsl(210, 10%, 43%)",
  background: hasError ? "hsl(360, 100%, 50%)" : "hsl(210, 25%, 98%)",
  padding: `.84615385em .84615385em`,
  maxWidth: `calc(.84615385em + .84615385em + 18rem)`,
});

export const InputTheme = (textAlign, hasError) => ({
  textAlign: `${textAlign}`,
  minHeight: "2rem",
  minWidth: "25px",
  background: "white",
  color: "hsl(207, 15%, 15%)",
  fontFamily: "Roboto, sans-serif",
  padding: "0.769rem",
  border: hasError
    ? `1px solid hsl(360, 100%, 50%)`
    : `1px solid hsl(210, 18%, 90%)`,
  borderRadius: "0px",
  outline: "none",
  "&:focus": {
    outline: "none",
    border: hasError ? `1px solid hsl(360, 100%, 70%)` : "1px solid #96c8d8",
  },
  "&:disabled": {
    background: `hsl(210, 25%, 98%)`,
    cursor: "not-allowed",
  },
  "&::placeholder ": {
    fontStyle: "italic",
    color: "hsl(210, 15%, 82%)",
    fontSize: "1rem",
    fontFamily: "Roboto, sans-serif",
  },
});
