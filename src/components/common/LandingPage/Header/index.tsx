/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "./styles/styles.module.css";
import { motion } from "motion/react";
import { motionStyles, sliderStyles } from "@/app/motion-animations";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { lato, roboto } from "@/fonts/index.fonts";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const images = [
    ["/assets/carpa1.png", "Eventos Coorporativos"],
    ["/assets/carpa2.jpeg", "Bodas y Celebraciones"],
    ["/assets/carpa3.jpeg", "Ferias y Exposiciones"],
    ["/assets/carpa4.jpeg", "Construcción e Industria"],
    ["/assets/carpa5.jpeg", "Eventos Corporativos"],
    ["/assets/carpa6.jpeg", "Bodas y Celebraciones"],
    ["/assets/carpa7.jpeg", "Ferias y Exposiciones"],
    ["/assets/carpa8.jpeg", "Construcción e Industria"],
    ["/assets/carpa9.jpeg", "Eventos Corporativos"],
    ["/assets/carpa10.jpeg", "Bodas y Celebraciones"],
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleMove = () => {
    nextImage();
  };

  const handleHoverButton = () => {};

  useEffect(() => {
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <section className={`${styles.headerText} ${roboto.className}`}>
        <div className={styles.headerContentText}>
          <motion.h1 {...motionStyles}>
            Encuentra la carpa ideal para cada ocasión
          </motion.h1>
          <span>
            {" "}
            <FaMapMarkerAlt />
            {"Colombia "}
          </span>
          <motion.a href="tel:+573001234567" className={styles.phoneLink}>
            Llama ahora: +57 300 123 4567
          </motion.a>
        </div>
      </section>
      <section
        className={`${styles.headerImage} ${lato.className}`}
        onTouchMove={handleMove}
      >
        <motion.div
          key={currentImageIndex}
          {...sliderStyles}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <div className={styles.bgText}>
            <h2>{images[currentImageIndex][1]}</h2>
            <p>Contamos con más de 15 años de experiencia</p>
            <button onMouseEnter={handleHoverButton}>
              <FaWhatsapp className={styles.wpIcon} />
              <span className={styles.backgroundButton}></span>
              Solicita una cotización
            </button>
          </div>
          <Image
            src={images[currentImageIndex][0]}
            loading="lazy"
            alt="Carpa en la naturaleza"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </motion.div>
        <button onClick={prevImage} className={styles.carouselButton}>
          <FaChevronLeft size={40} color="#fff" />
        </button>
        <button onClick={nextImage} className={styles.carouselButton}>
          <FaChevronRight size={40} color="#fff" />
        </button>
      </section>
    </header>
  );
};

export default Header;
