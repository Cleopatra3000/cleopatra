import styles from './header.module.css'
import NavTabs from './components/NavTabs/NavTabs'
import tituloImg1 from '../../images/cleopatraTitulo.png'
import tituloImg2 from '../../images/imagenHeader.png'

const Header = () => {
  return (
    <>
        <header className={styles.header1}>
          
              {/* IMAGEN IZQUIERDA – DESKTOP */}
              <img
                src={tituloImg2}
                alt="imagenHeader1"
                className={styles.titleImage2}
              />

              <div className={styles.tituloyTabsContainer}>
          
                    <img
                      src={tituloImg1}
                      alt="Cleopatra"
                      className={styles.titleImage1}
                    />

                    <NavTabs />

              </div>     

              {/* IMAGEN DERECHA – DESKTOP */}
              <img
                src={tituloImg2}
                alt="imagenHeader2"
                className={styles.titleImage2}
              />


        </header>

        <header className={styles.header2}>
          
              <div className={styles.tituloyTabsContainer}>

                    {/* IMAGEN IZQUIERDA – DESKTOP */}
                    <img
                      src={tituloImg2}
                      alt="imagenHeader1"
                      className={styles.titleImage2}
                    />
                    
                    {/* IMAGEN CENTRAL – CLEOPATRA */}
                    <img
                      src={tituloImg1}
                      alt="Cleopatra"
                      className={styles.titleImage1}
                    />

                    {/* IMAGEN DERECHA – DESKTOP */}
                    <img
                      src={tituloImg2}
                      alt="imagenHeader2"
                      className={styles.titleImage2}
                    />                    

              </div>     

              <NavTabs />

        </header>
    </>
  )
}

export default Header