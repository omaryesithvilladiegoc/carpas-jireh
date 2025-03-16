import styles from "./styles/styles.module.css";
import { BiArrowFromLeft } from "react-icons/bi";
const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.wrapper}>
        <section className={styles.conentSection}>
          <div className={styles.backgroundFilter}>
            <div className={styles.contentBackground}>
              <h2>Servicios de Renta de Carspas</h2>
              <p>
                Descubre nuestra exclusiva colección de carpas premium,
                diseñadas para hacer de tu evento una experiencia inolvidable.
                Desde elegantes celebraciones hasta eventos corporativos,
                tenemos la solución perfecta para ti.
              </p>
              <button className={styles.callToAction}>
                ¡Reserva Ahora! <BiArrowFromLeft />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionOne;
