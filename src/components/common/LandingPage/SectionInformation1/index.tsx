import styles from "./styles/styles.module.css";
const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.wrapper}>
        <section className={styles.conentSection}>
          <div className={styles.backgroundFilter}>
            <h2>Servicios de Renta de Carpas</h2>
            <p>Ofrecemos una variedad de carpas para todo tipo de eventos.</p>
            <button className={styles.callToAction}>¡Reserva Ahora!</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionOne;
