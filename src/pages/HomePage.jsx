import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import CardHome from "../components/CardHome/CardHome";
import HomeLayout from "../components/HomeLayout/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <Header></Header>
      <Home></Home>
      <About></About>
      <HomeLayout.CardContainer>
        <CardHome
          img={
            "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_298,h_353,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"
          }
          title={"Detalles"}
        />
        <CardHome
          img={
            "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_298,h_353,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"
          }
          title={"Detalles"}
        />
        <CardHome
          img={
            "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_298,h_353,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"
          }
          title={"Detalles"}
        />
      </HomeLayout.CardContainer>
    </HomeLayout>
  );
};

export default HomePage;
