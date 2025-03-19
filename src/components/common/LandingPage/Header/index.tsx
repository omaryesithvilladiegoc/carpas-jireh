/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "./styles/styles.module.css";
import { motion } from "motion/react";
import { sliderStyles } from "@/app/motion-animations";
import { useState, useEffect } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { dmSans, dmSerif } from "@/fonts/index.fonts";

const Header = () => {
  const images = [
    ["/assets/carpa1.png", "Bodas y Celebraciones"],
    ["/assets/carpa2.jpeg", "Eventos Deportivos"],
    ["/assets/carpa3.jpeg", "Almacenamiento y Logística"],
    ["/assets/carpa4.jpeg", "Camping y Aventuras"],
    ["/assets/carpa5.jpeg", "Dormitorios Temporales"],
    ["/assets/carpa6.jpeg", "Zonas de Comida y Restaurantes"],
    ["/assets/carpa7.jpeg", "Ferias y Exposiciones"],
    ["/assets/carpa8.jpeg", "Espectáculos y Conciertos"],
    ["/assets/carpa9.jpeg", "Eventos Corporativos"],
    ["/assets/carpa10.jpeg", "Mercados y Tianguis"],
    ["/assets/carpa11.jpeg", "Construcción e Industria"],
    ["/assets/carpa12.jpeg", "Fiestas Privadas"],
    ["/assets/carpa13.jpeg", "Emergencias y Refugios"],
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
      <section className={`${styles.headerImage}`} onTouchMove={handleMove}>
        <motion.div
          key={currentImageIndex}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <motion.div className={styles.bgText}>
            <div className={styles.contactInfo}>
              <div className={styles.wraperContactInfo}>
                <Image
                  src={"/assets/Vector.png"}
                  alt="logo-carpas"
                  loading="lazy"
                  quality={100}
                  width={150}
                  height={90}
                  priority={false}
                />

                <p className={dmSerif.className}>
                  Carpas Para todo tipo de evento{" "}
                </p>
              </div>
            </div>
            <div className={styles.contentText}>
              {" "}
              <motion.h2 className={dmSerif.className} {...sliderStyles}>
                {images[currentImageIndex][1]}
              </motion.h2>
              <motion.p className={dmSans.className} {...sliderStyles}>
                Contamos con más de 15 años de experiencia
              </motion.p>
              <motion.button
                {...sliderStyles}
                className={styles.buttonWp}
                onMouseEnter={handleHoverButton}
              >
                <FaWhatsapp className={styles.wpIcon} />
                <span className={`${styles.backgroundButton}`}>
                  {" "}
                  Solicita una cotización
                </span>
              </motion.button>
            </div>
            <div className={styles.footerBgText}>
              <div className={styles.buttonCallAction}>
                <a href="tel:+1234567890" className={styles.buttonWp}>
                  <FaPhone className={styles.icon} />
                  <span className={styles.tooltip}>1234567890</span>
                </a>
                <a href="mailto:info@ejemplo.com" className={styles.buttonWp}>
                  <FaEnvelope className={styles.icon} />
                  <span className={styles.tooltip}>info@ejemplo.com</span>
                </a>
              </div>
            </div>
          </motion.div>
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
