import React from "react";
import {
  StyledCardContainer,
  StyledCardImage,
  StyledCardTitle,
} from "./CardHome.styles";

const CardHome = ({ img, title, visibleTitle = true }) => {
  return (
    <StyledCardContainer>
      <StyledCardImage src={img} alt="card"></StyledCardImage>
      <StyledCardTitle visible={visibleTitle}>{title}</StyledCardTitle>
    </StyledCardContainer>
  );
};

export default CardHome;
