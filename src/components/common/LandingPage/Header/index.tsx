/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "./styles/styles.module.css";
import { motion } from "motion/react";
import { motionStyles } from "@/app/motion-animations";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const images = [
    "/assets/carpa1.png",
    "/assets/carpa2.jpeg",
    "/assets/carpa3.jpeg",
    "/assets/carpa4.jpeg",
    "/assets/carpa5.jpeg",
    "/assets/carpa6.jpeg",
    "/assets/carpa7.jpeg",
    "/assets/carpa8.jpeg",
    "/assets/carpa9.jpeg",
    "/assets/carpa10.jpeg",
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

  useEffect(() => {
    const intervalId = requestAnimationFrame(function animate() {
      nextImage();
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 2000);
    });

    return () => cancelAnimationFrame(intervalId);
  }, []);

  return (
    <header className={styles.header}>
      <section className={styles.headerText}>
        <motion.h1 {...motionStyles}>
          Encuentra la carpa ideal para cada ocación
        </motion.h1>
      </section>
      <motion.section {...motionStyles} className={styles.headerImage}>
        <motion.div
          key={currentImageIndex}
          {...motionStyles}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Image
            src={images[currentImageIndex]}
            loading="lazy"
            alt="Carpa en la naturaleza"
            fill
            quality={100}
            style={{
              objectFit: "cover",
            }}
            priority={false}
          />
        </motion.div>
        <button onClick={prevImage} className={styles.carouselButton}>
          <FaChevronLeft size={40} color="#fff" /> {/* Flecha izquierda */}
        </button>
        <button onClick={nextImage} className={styles.carouselButton}>
          <FaChevronRight size={40} color="#fff" /> {/* Flecha derecha */}
        </button>
      </motion.section>
    </header>
  );
};

export default Header;
