"use client";
import NavBarCompound from "@/components/compound/NavBar";
import Header from "./Header";
import { useMediaQuery } from "usehooks-ts";
import Gallery from "./Gallery";
import SectionOne from "./SectionInformation1";
import Contact from "./Contact";

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
      }}
    >
      <Header />
      <NavBarCompound
        content={{
          ButtonProducts: "Nuestras Carpas",
          ButtonAbout: "Sobre Nosotros",
        }}
      >
        {xsView && <NavBarCompound.ButtonProducts />}

        {smView && <NavBarCompound.ButtonAbout />}
      </NavBarCompound>
      <Gallery />
      <SectionOne />
      <Contact />
    </div>
  );
};

export default LandingPage;
