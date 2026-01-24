import styles from './tab3.module.css'
import ContactoWhasap from "./components/ContactoWhasap/contactoWhasap"
import comer from '../../images/comer.png'
import cine from '../../images/cine.png'
import hola from '../../images/hola.png'
import saludame from '../../images/saludame.png'


const Tab3 = () => {
  return (
    <div className={styles.inner}>

      <ContactoWhasap Imagen={comer} mensajeWhatsapp={"hola quieres salir a comer algo"} />

      <ContactoWhasap Imagen={cine} mensajeWhatsapp={"hola quieres ir al cine"} />

      <ContactoWhasap Imagen={hola} mensajeWhatsapp={"hola que tal"} />

      <ContactoWhasap Imagen={saludame} mensajeWhatsapp={"hola quieres salir a comer algo"} />

    </div>
  )
}


export default Tab3