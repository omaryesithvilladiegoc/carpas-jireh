import styles from "./styles/styles.module.css";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialMedia = ({ isWhite = false }: { isWhite?: boolean }) => {
  return (
    <div className={`${styles.socialMedia} `}>
      <a href="tel:+123456789" target="_blank" rel="noopener noreferrer">
        <FaPhoneAlt
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a>
      <a
        href="https://wa.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a>
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
