import { useState, FormEvent } from "react";
import styles from "./styles/styles.module.css";
import Swal from "sweetalert2";
import { dmSansLight, dmSerif } from "@/fonts/index.fonts";
import SocialMedia from "./childrens/SocialMedia";

type TentType =
  | "carpas dos aguas"
  | "carpas cuatro aguas"
  | "carpas pagodas"
  | "carpas hangares"
  | "carpas plegables";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoCarpa: "" as TentType,
    dataConsent: false,
  });

  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      setStatus("success");
      setMessage("¡Formulario enviado exitosamente!");

      // Show success alert
      Swal.fire({
        title: "¡Éxito!",
        text: "¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#28a745",
      });

      console.log("Form submitted successfully:", data);

      // Reset form after successful submission
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoCarpa: "" as TentType,
        dataConsent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setMessage(
        "Error al enviar el formulario. Por favor, intente nuevamente."
      );

      // Show error alert
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Por favor, intente nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <section className={styles.formText}>
        <div className={styles.contentTextForm}>
          <h4 className={dmSerif.className}>
            ¡Déjanos tus datos y descubre la carpa perfecta para tu evento!
            <span>
              {" "}
              Nuestro equipo experto te contactará para asesorarte en la mejor
              elección.
            </span>
          </h4>
        </div>
      </section>
      <section className={styles.containerForm}>
        <form
          onSubmit={handleSubmit}
          className={`${styles.form} ${dmSansLight.className}`}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              value={formData.telefono}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="tentType">Tipo de Carpa:</label>
            <select
              id="tentType"
              value={formData.tipoCarpa}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tipoCarpa: e.target.value as TentType,
                })
              }
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="carpas dos aguas">Carpas Dos Aguas</option>
              <option value="carpas cuatro aguas">Carpas Cuatro Aguas</option>
              <option value="carpas pagodas">Carpas Pagodas</option>
              <option value="carpas hangares">Carpas Hangares</option>
              <option value="carpas plegables">Carpas Plegables</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.dataConsent}
                onChange={(e) =>
                  setFormData({ ...formData, dataConsent: e.target.checked })
                }
                required
              />
              Acepto el tratamiento de mis datos personales
            </label>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <div className={styles.loader}>Enviando...</div>
            ) : (
              "Enviar"
            )}
          </button>

          {message && (
            <div className={`${styles.message} ${styles[status]}`}>
              {message}
            </div>
          )}
        </form>
        <SocialMedia />
      </section>
    </div>
  );
};

export default Contact;
