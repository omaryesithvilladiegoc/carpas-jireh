import Image from "next/image";
import styles from "./styles/styles.module.css";
import { dmSans, dmSerif } from "@/fonts/index.fonts";
import SocialMedia from "../Contact/childrens/SocialMedia";

const galleryItems = [
  {
    title: "Tipo Hangar",
    description:
      "Se utilizan comúnmente en almacenamiento, logística, eventos masivos y hangares temporales para aeronaves o maquinaria pesada.",
    image: "/assets/gallery8.jpeg",
  },
  {
    title: "Tipo Kiosco",
    description:
      "Se emplean comúnmente para stands comerciales, ferias, mercados y puntos de venta temporales. Son fáciles de montar y desmontar, permitiendo una gran versatilidad en su uso.",
    image: "/assets/gallery2.jpeg",
  },
  {
    title: "Tipo Pagoda",
    description:
      "Se usan en eventos, ferias, bodas y recepciones al aire libre.",
    image: "/assets/gallery7.jpeg",
  },
  {
    title: "Tipo Membrana",
    description:
      "Se usan en espacios urbanos, parques, áreas recreativas y eventos al aire libre, combinando funcionalidad con un diseño estético innovador.",
    image: "/assets/gallery6.jpeg",
  },
];

const Gallery = () => {
  return (
    <div className={styles.wraperGallery}>
      <div className={styles.gallery}>
        {galleryItems.map((item, index) => (
          <section key={index} className={styles.itemGallery}>
            <div className={styles.backgruoundFilter}>
              <h2 className={dmSerif.className}>{item.title}</h2>
              <p className={dmSans.className}>{item.description}</p>
              <SocialMedia isWhite />
            </div>
            <Image
              src={item.image}
              loading="lazy"
              alt={item.title}
              fill
              quality={100}
              style={{ objectFit: "cover" }}
              priority={false}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
