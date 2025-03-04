import Image from "next/image";
import styles from "./styles/styles.module.css";
const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <section className={styles.itemGallery}>
        <div className={styles.backgruoundFilter}></div>
        <Image
          src={"/assets/WhatsApp Image 2025-03-03 at 3.22.12 PM (5).jpeg"}
          loading="lazy"
          alt="Carpa en la naturaleza"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </section>
      <section className={styles.itemGallery}>
        <Image
          src={"/assets/WhatsApp Image 2025-03-03 at 3.22.12 PM (6).jpeg"}
          loading="lazy"
          alt="Carpa en la naturaleza"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </section>
      <section className={styles.itemGallery}>
        <Image
          src={"/assets/WhatsApp Image 2025-03-03 at 3.22.12 PM (7).jpeg"}
          loading="lazy"
          alt="Carpa en la naturaleza"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </section>
      <section className={styles.itemGallery}>
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
    </div>
  );
};

export default Gallery;
