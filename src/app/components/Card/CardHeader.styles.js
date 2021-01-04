export const cardHeader = (theme) => ({
  color: "hsl(210, 100%, 20%)",
  background: "#fff",
  padding: "1.81rem 1.92rem",
  fontSize: "1.54rem",
  fontWeight: 300,
  position: "relative",
  borderRadius: 0,
  display: "flex",
  justifyContent: "space-between",
  span: {
    paddingLeft: "1.92rem",
  },
});

export const invertedCardHeader = (theme) => ({
  label: "inverted",
  color: "hsl(210, 18%, 90%)",
  background: "hsl(210, 100%, 20%)",
});

export const railCardHeaderStyles = {
  label: "rail",
  fontSize: "1.16rem",
  fontWeight: 400,
  padding: "1.24rem 1.5rem",
  span: {
    paddingLeft: "1.5rem",
  },
};
