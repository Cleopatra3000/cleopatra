import styles from './Tab1.module.css'
import columna from '../../images/columna.png'

const Tab1 = () => {
  return (
    <section className={styles.TabShell}>

          <div className={styles.inner}>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

                <div className={styles.texto}>
                  Hola, soy Cleopatra, una chica con muy buena eduación y saber estar,
                  además de culta. Soy una mujer a la que no le gusta nada perder
                  el tiempo y siempre me centro 
                  en pasar los mejores momentos y disfrutar de maravillosas experiencas.
                </div>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

          </div>

          {/* --------------------------------------------- */}

          <div className={styles.inner}>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

                <div className={styles.texto}>
                  Me gusta pasar mi tiempo libre yendo al gimnasio y entrenando durante horas, 
                  para conseguir una buena forma física. Una de mis pasiones son los deportes
                  de riesto,
                  ¿Te apuntas?
                </div>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

          </div>

          {/* --------------------------------------------- */}

          <div className={styles.inner}>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

                <div className={styles.texto}>
                  Por otro lado, salir y compartir una deliciosa cena en algún restaurante
                  de la ciudad,
                  me parece un plan perfecto. Podemos conocernos tranuilamente y
                  pasra unos momentos muy agradables.
                </div>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

          </div>

          {/* --------------------------------------------- */}

          <div className={styles.inner}>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

                <div className={styles.texto}>
                  Si eres esa persona educada y apasionada, no dudes en llamarme 
                  al teléfono 603257735. Vivo en Madrid, en la zona de la Plaza Castilla,
                  y estoy segura, que si realizamos alguna de estas actividades,
                  los ds nos lo pasaremos como nunca.
                </div>

                <img
                  src={columna}
                  alt="columna"
                  className={styles.columna}
                />

          </div>
      
    </section>
  )
}

export default Tab1