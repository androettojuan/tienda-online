import { styled } from "../../theme/styled";

export const StyledHeader = styled("div", {
  display: "flex",
  padding: "24px 0",
  backgroundColor: "#1B4965",
});

export const StyledHeaderContainer = styled("div", {
  width: "40%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
});

export const StyledLogo = styled("div", {});

export const StyledNavContainer = styled("div", {
  display: "flex",
  gap: "36px",
});

export const StyledNav = styled("span", {
  fontSize: "20px",
  fontWeight: "500",
  color: "$lighter",
  cursor: "pointer",
  "&:hover": {
    color: "#BEE9E8",
  },
});

export const StyledShoppingCart = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "300px",
  position: "fixed",
  backgroundColor: "$red",
  top: "80px",
  right: "0",
  bottom: "0",
  transform: "translateX(100%)",
  opacity: "0",
  visibility: "hidden",
  transition: "none 0.3s ease-in-out",
  transitionProperty: "transform, opacity, visibility",
  zIndex: "100",
  variants: {
    open: {
      true: {
        transform: "translateX(0)",
        opacity: "1",
        visibility: "visible",
      },
    },
  },
});

export const StyledShoppingCartIcon = styled("div", {
  fontSize: "24px",
  color: "$lighter",
  cursor: "pointer",
  "&:hover": {
    color: "#BEE9E8",
  },
});

export const StyledShoppingCartCounter = styled("span", {});
