import styles from './contactoWhasap.module.css'
import whasapimage from '../../../../images/whasapp.png'


const ContactoWhasap = ({ Imagen, mensajeWhatsapp }) => {

  return (
    <div className={styles.inner1}>

      <img
        src={Imagen}
        alt="Imagen"
        className={styles.Imagen}
      />

      {/* BOTÓN WHATSAPP */}
      <a
        href={`https://wa.me/34603257735?text=${encodeURIComponent(mensajeWhatsapp)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappLink}
      >
        <div className={styles.inner2}>

          <img
            src={whasapimage}
            alt="WhatsApp"
            className={styles.whasapimage}
          />

          <div className={styles.numeroTelefono}>
            603257735
          </div>

        </div>
      </a>

    </div>
  )
}

export default ContactoWhasap