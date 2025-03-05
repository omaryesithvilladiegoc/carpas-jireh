"use client";
import NavBarCompound from "@/components/compound/NavBar";
import Header from "./Header";
import { useMediaQuery } from "usehooks-ts";
import Gallery from "./Gallery";

const LandingPage = () => {
  const smView = useMediaQuery("(min-width: 900px)", {
    initializeWithValue: false,
  });

  const xsView = useMediaQuery("(min-width: 500px)", {
    initializeWithValue: false,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "47000vh",
      }}
    >
      <Header />
      <NavBarCompound
        content={{
          ButtonProducts: "Nuestras Carpas",
          ButtonAbout: "Sobre Nosotros",
          ButtonHome: "Inicio",
        }}
      >
        {smView && <NavBarCompound.ButtonHome />}
        {xsView && <NavBarCompound.ButtonProducts />}
        {!smView && <NavBarCompound.ButtonOpenMenu />}
        {smView && <NavBarCompound.ButtonAbout />}
      </NavBarCompound>
      <Gallery />
    </div>
  );
};

export default LandingPage;
