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
import { useState } from "react";
import Link from "next/link";
import { dmSans } from "@/fonts/index.fonts";

const NavBarCompound = ({ children, content }: INavBarProps) => {
  const [isOpen] = useState<boolean>(false);
  return (
    <NavBarContext.Provider value={{ content, isOpen }}>
      <div className={`${dmSans.className} ${styles.navBar}`}>
        <div className={styles.contentLogo}>
          <Image
            src={"/assets/logo-main.png"}
            alt="logo-carpas"
            loading="lazy"
            quality={100}
            width={180}
            height={80}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
        <ul>{children}</ul>
      </div>
    </NavBarContext.Provider>
  );
};

NavBarCompound.ButtonProducts = function ButtonProducts({
  showLabel,
}: {
  showLabel?: boolean;
}) {
  const context = useNavBarContext();
  const { ButtonProducts } = context.content;
  return (
    <Link href={"/tents"}>
      {" "}
      <li>
        {showLabel && ButtonProducts}{" "}
        <span>
          <GiBarracksTent />
        </span>
      </li>
    </Link>
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
      <TiThMenu fontSize={"2rem"} />{" "}
    </li>
  );
};
export default NavBarCompound;
