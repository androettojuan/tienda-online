import React from "react";
import {
  StyledContact,
  StyledCopyright,
  StyledInfoContainer,
  StyledMail,
  StyledPhone,
  StyledPhoneAndMail,
  StyledRedes,
  StyledRedesContainer,
  StyledTitlePhoneAndMail,
  StyledTitleRedes,
} from "./Contact.styles";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <StyledContact>
      <StyledInfoContainer>
        <StyledRedesContainer>
          <StyledTitleRedes>Nuestras redes</StyledTitleRedes>
          <StyledRedes>
            <FiInstagram />
            <FiFacebook />
            <FaWhatsapp />
          </StyledRedes>
        </StyledRedesContainer>
        <StyledPhoneAndMail>
          <StyledTitlePhoneAndMail>¿Necesitas ayuda?</StyledTitlePhoneAndMail>
          <StyledPhone>+5426219494611</StyledPhone>
          <StyledMail>asdasdasd@gmail.com</StyledMail>
        </StyledPhoneAndMail>
      </StyledInfoContainer>
      <StyledCopyright>
        © 2023 hecho para Ilusiones. Creado por Juan Manuel Androetto.
      </StyledCopyright>
    </StyledContact>
  );
};

export default Contact;
