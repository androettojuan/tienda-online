import React from "react";
import { StyledHome, StyledHomeFondo, StyledHomeText } from "./Home.styles";

function Home() {
  return (
    <StyledHome>
      <StyledHomeFondo
        src="https://img.freepik.com/foto-gratis/fondo-acuarela-pintada-mano-forma-cielo-nubes_24972-1095.jpg?w=1800&t=st=1684789645~exp=1684790245~hmac=e6a970e6db1d2fbc9cd466948b969f2e2f719a1ebd802e4623d91992e9179bd5"
        alt="fondo"
      ></StyledHomeFondo>
      <StyledHomeText>ENVIOS A TODO EL PAIS</StyledHomeText>
    </StyledHome>
  );
}

export default Home;
