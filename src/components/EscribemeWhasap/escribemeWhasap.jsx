import styles from './escribemeWhasap.module.css'
import escribirImagen from '../../images/escribeme.png'
import whasapimage from '../../images/whasapp.png'


export const EscribemeWhasap = () => {
  return (
    <div className={styles.inner1}>
    
            <img
              src={escribirImagen}
              alt="Escríbeme"
              className={styles.escribirImagen}
            />

            {/* BOTÓN WHATSAPP */}
            <a
              href="https://wa.me/34603257735?text=hola"
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
