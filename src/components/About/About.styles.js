import { styled } from "../../theme/styled";

export const StyledAbout = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "#lighter",
});

export const StyledTitle = styled("span", {
  padding: "10px",
  fontSize: "42px",
  fontWeight: "600",
  color: "$dark",
  textAlign: "center",
  margin: "90px 0 48px 0",
  verticalAlign: "baseline",
  fontFamily: "times new roman,times,serif",
  outline: "none",
  letterSpacing: "0.3em",
});

export const StyledSubtitle = styled("span", {
  padding: "10px",
  fontSize: "24px",
  fontWeight: "400",
  color: "$dark",
  textAlign: "center",
  margin: "24px 0 48px 0",
  letterSpacing: "0.3em",
});
