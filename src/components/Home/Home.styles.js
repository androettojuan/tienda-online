import { styled } from "../../theme/styled";

export const StyledHome = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const StyledHomeFondo = styled("img", {
  width: "100%",
  height: "600px",
  objectFit: "cover",
  objectPosition: "center",
});

export const StyledHomeText = styled("span", {
  padding: "10px",
  fontSize: "16px",
  fontWeight: "500",
  color: "$lighter",
  textAlign: "center",
  backgroundColor: "#5FA8D3",
  width: "100%",
});
