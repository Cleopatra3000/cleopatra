import styles from './card.module.css'
import columna from '../../images/columna.png'

const Card = ({ text, imageSrc, imageAlt = 'imagen' }) => {
  return (
    <div className={styles.inner}>
      <img src={columna} alt="columna" className={styles.columna} />

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={styles.contenidoImagen}
        />
      ) : (
        <div className={styles.texto}>
          {text}
        </div>
      )}

      <img src={columna} alt="columna" className={styles.columna} />
    </div>
  )
}

export default Card