import { styled } from "../../theme/styled";

export const StyledCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "450px",
  position: "relative",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const StyledCardImage = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const StyledCardTitle = styled("span", {
  backgroundColor: "$dark",
  color: "$white",
  position: "absolute",
  bottom: "0",
  width: "100%",
  padding: "10px 0",
  textAlign: "center",
  fontSize: "20px",
  opacity: "0",
  visibility: "hidden",
  variants: {
    visible: {
      true: {
        opacity: "1",
        visibility: "visible",
      },
    },
  },
});
