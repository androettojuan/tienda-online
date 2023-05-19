import React, { useState } from "react";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledNav,
  StyledNavContainer,
  StyledShoppingCart,
  StyledShoppingCartBody,
  StyledShoppingCartCloseButton,
  StyledShoppingCartFondo,
  StyledShoppingCartHeader,
  StyledShoppingCartIcon,
  StyledShoppingCartTitle,
} from "./Header.styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [showCart, setShowCart] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo>Logo</StyledLogo>
        <StyledNavContainer>
          <StyledNav>Inicio</StyledNav>
          <StyledNav>Tienda</StyledNav>
          <StyledNav>Contacto</StyledNav>
        </StyledNavContainer>
        <StyledShoppingCartIcon
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          <AiOutlineShoppingCart />
        </StyledShoppingCartIcon>
        <StyledShoppingCart open={showCart}>
          <StyledShoppingCartHeader>
            <StyledShoppingCartCloseButton
              onClick={() => setShowCart(!showCart)}
            />
            <StyledShoppingCartTitle>Carrito</StyledShoppingCartTitle>
          </StyledShoppingCartHeader>
          <StyledShoppingCartBody></StyledShoppingCartBody>
        </StyledShoppingCart>
      </StyledHeaderContainer>
      <StyledShoppingCartFondo
        open={showCart}
        onClick={() => setShowCart(!showCart)}
      />
    </StyledHeader>
  );
}

export default Header;
