"use client";
import Image from "next/image";
import { NavBarContext, useNavBarContext } from "./context";
import { INavBarProps } from "./interfaces";
import { GiBarracksTent } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import styles from "./styles/navbar.module.css";
import { RiHome2Fill } from "react-icons/ri";

const NavBarCompound = ({ children, content }: INavBarProps) => {
  return (
    <NavBarContext.Provider value={{ content }}>
      <div className={styles.navBar}>
        <div className={styles.contentLogo}>
          <Image
            src={"/assets/logo-main.png"}
            alt="logo-carpas"
            loading="lazy"
            quality={100}
            width={200}
            height={100}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>

        <ul>{children}</ul>
      </div>
    </NavBarContext.Provider>
  );
};

NavBarCompound.ButtonProducts = function ButtonProducts() {
  const context = useNavBarContext();
  const { ButtonProducts } = context.content;
  return (
    <li>
      {ButtonProducts}{" "}
      <span>
        <GiBarracksTent />
      </span>
    </li>
  );
};
NavBarCompound.ButtonAbout = function ButtonAbout() {
  return (
    <li>
      {" "}
      <FaInfoCircle />{" "}
    </li>
  );
};

NavBarCompound.ButtonContact = function ButtonContact() {
  const context = useNavBarContext();
  const { ButtonContact } = context.content;
  return (
    <li>
      {" "}
      {ButtonContact}{" "}
      <span>
        {" "}
        <FaPhoneAlt />{" "}
      </span>{" "}
    </li>
  );
};

NavBarCompound.ButtonHome = function ButtonHome() {
  const context = useNavBarContext();
  const { ButtonHome } = context.content;
  return (
    <li>
      {" "}
      {ButtonHome}{" "}
      <span>
        {" "}
        <RiHome2Fill />{" "}
      </span>{" "}
    </li>
  );
};
NavBarCompound.ButtonOpenMenu = function ButtonOpenMenu() {
  return (
    <li>
      <TiThMenu />{" "}
    </li>
  );
};
export default NavBarCompound;
