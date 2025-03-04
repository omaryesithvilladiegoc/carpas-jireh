import Image from "next/image";
import styles from "./styles/styles.module.css";
import { motion } from "motion/react";
import { motionStyles } from "@/app/motion-animations";
const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerText}>
        <motion.h1 {...motionStyles}>
          Encuentra la carpa ideal para cada ocación
        </motion.h1>
      </section>
      <section className={styles.headerImage}>
        <Image
          src={"/assets/carpa1.png"}
          loading="lazy"
          alt="Carpa en la naturaleza"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </section>
    </header>
  );
};

export default Header;
