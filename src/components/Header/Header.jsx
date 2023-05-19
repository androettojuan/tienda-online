import React, { useState, useEffect, useRef } from "react";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledNav,
  StyledNavContainer,
  StyledShoppingCart,
  StyledShoppingCartIcon,
} from "./Header.styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutsideCart(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    }

    document.body.addEventListener("click", handleClickOutsideCart);

    return () => {
      document.body.removeEventListener("click", handleClickOutsideCart);
    };
  }, []);

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
          onClick={(event) => {
            event.stopPropagation();
            setShowCart(!showCart);
          }}
        >
          <AiOutlineShoppingCart />
        </StyledShoppingCartIcon>
        <StyledShoppingCart open={showCart} ref={cartRef}>
          <p>Carrito</p>
        </StyledShoppingCart>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;