import Image from "next/image";
import styles from "./styles/styles.module.css";
const Gallery = () => {
  return (
    <div className={styles.wraperGallery}>
      <div className={styles.gallery}>
        <section className={styles.itemGallery}>
          <div className={styles.backgruoundFilter}>
            <h2>Tipo Hangar</h2>
            <p>
              Se utilizan comúnmente en almacenamiento, logística, eventos
              masivos y hangares temporales para aeronaves o maquinaria pesada.
            </p>
          </div>
          <Image
            src={"/assets/gallery8.jpeg"}
            loading="lazy"
            alt="Carpa en la naturaleza"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </section>
        <section className={styles.itemGallery}>
          <div className={styles.backgruoundFilter}>
            <h2>Tipo Kiosco</h2>
            <p>
              Se emplean comúnmente para stands comerciales, ferias, mercados y
              puntos de venta temporales. Son fáciles de montar y desmontar,
              permitiendo una gran versatilidad en su uso.
            </p>
          </div>
          <Image
            src={"/assets/gallery2.jpeg"}
            loading="lazy"
            alt="Carpa en la naturaleza"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </section>
        <section className={styles.itemGallery}>
          <div className={styles.backgruoundFilter}>
            <h2>Tipo Pagoda</h2>
            <p>
              Se usan en eventos, ferias, bodas y recepciones al aire libre.
            </p>
          </div>
          <Image
            src={"/assets/gallery7.jpeg"}
            loading="lazy"
            alt="Carpa en la naturaleza"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </section>
        <section className={styles.itemGallery}>
          <div className={styles.backgruoundFilter}>
            <h2>Tipo Membrana</h2>
            <p>
              Se usan en espacios urbanos, parques, áreas recreativas y eventos
              al aire libre, combinando funcionalidad con un diseño estético
              innovador.
            </p>
          </div>
          <Image
            src={"/assets/gallery6.jpeg"}
            loading="lazy"
            alt="Carpa en la naturaleza"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </section>
      </div>
    </div>
  );
};

export default Gallery;
