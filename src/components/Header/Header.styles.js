import { styled } from "../../theme/styled";
import { BiChevronRight } from "react-icons/bi";

export const StyledHeader = styled("div", {
  display: "flex",
  padding: "24px 0",
  backgroundColor: "#1B4965",
});

export const StyledHeaderContainer = styled("div", {
  width: "50%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
});

export const StyledLogo = styled("div", {
  fontSize: "28px",
  fontWeight: "400",
  fontFamily: "Gloria Hallelujah, cursive",
  color: "$lighter",
});

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

// Carrito de compras

export const StyledShoppingCart = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "300px",
  position: "fixed",
  top: "0",
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

// Fondo oscuro del carrito de compras

export const StyledShoppingCartFondo = styled("div", {
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "99",
  opacity: "0",
  visibility: "hidden",
  transition: "none 0.3s ease-in-out",
  transitionProperty: "opacity, visibility",
  variants: {
    open: {
      true: {
        opacity: "1",
        visibility: "visible",
      },
    },
  },
});

// Contenido del carrito de compras

// Header del carrito de compras

export const StyledShoppingCartHeader = styled("div", {
  backgroundColor: "#62B6CB",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "24px 0",
  position: "relative",
});

export const StyledShoppingCartTitle = styled("span", {
  fontSize: "28px",
  fontWeight: "500",
  color: "$lighter",
  textAlign: "center",
  margin: "0 auto",
});

export const StyledShoppingCartCloseButton = styled(BiChevronRight, {
  fontSize: "38px",
  color: "$lighter",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  left: "12px",
  transform: "translateY(-50%)",
  "&:hover": {
    color: "#BEE9E8",
  },
});

// Body del carrito de compras

export const StyledShoppingCartBody = styled("div", {
  height: "100%",
  width: "300px",
  backgroundColor: "#fff",
});

// Icono del carrito de compras

export const StyledShoppingCartIcon = styled("div", {
  fontSize: "24px",
  color: "$lighter",
  cursor: "pointer",
  "&:hover": {
    color: "#BEE9E8",
  },
});

// Contador del carrito de compras

export const StyledShoppingCartCounter = styled("span", {});
