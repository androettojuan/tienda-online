import { styled } from "../../theme/styled";

export const StyledContact = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  backgroundColor: "$dark",
  color: "$white",
});

export const StyledInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "1200px",
  margin: "48px auto",
});

// Redes sociales

export const StyledRedesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const StyledTitleRedes = styled("span", {
  fontSize: "20px",
  fontWeight: "400",
  marginBottom: "12px",
});

export const StyledRedes = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  fontSize: "20px",
  cursor: "pointer",
});

// Informacion de contacto(telefono y mail)

export const StyledPhoneAndMail = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledTitlePhoneAndMail = styled("span", {
  fontSize: "20px",
  fontWeight: "400",
  marginBottom: "12px",
});

export const StyledPhone = styled("span", {});

export const StyledMail = styled("span", {});

// Derechos reservados

export const StyledCopyright = styled("div", {
  margin: "48px 0 24px 0",
});
