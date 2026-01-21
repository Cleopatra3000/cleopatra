import { useState } from 'react'
import styles from './card.module.css'
import columna from '../../images/columna.png'

const Card = ({ text, imageSrc, imageAlt = 'imagen' }) => {

 const [fullImage, setFullImage] = useState(false)
  
  return (
    <>
        <div className={styles.inner}>
          <img src={columna} alt="columna" className={styles.columna} />

          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.contenidoImagen}
              onClick={() => setFullImage(true)}
            />
          ) : (
            <div className={styles.texto}>
              
                <div>
                    {text}
                </div>
                <a
                  href="https://wa.me/34603257735?text=hola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                <div className={styles.numero}>
                  603 257 735
                </div>
                </a>
            </div>
          )}

          <img src={columna} alt="columna" className={styles.columna} />
        </div>

        {fullImage && (
          <div
            className={styles.fullscreenOverlay}
            onClick={() => setFullImage(false)}
          >
            <img
              src={imageSrc}
              alt={`${imageAlt} full`}
              className={styles.fullscreenImage}
            />
          </div>
        )}
    </>
  )
}

export default Card