import Card from "../../components/Card/card"
import foto1 from '../../images/fotos/foto1.jpg'
import foto2 from '../../images/fotos/foto2.jpg'
import foto3 from '../../images/fotos/foto3.jpg'
import foto4 from '../../images/fotos/foto4.jpg'
import styles from './tab1.module.css'




const Tab1 = () => {
  return (
    <section className={styles.TabShell}>

        <Card imageSrc={foto1} imageAlt="Foto" />

        <Card imageSrc={foto2} imageAlt="Foto" />

        <Card imageSrc={foto3} imageAlt="Foto" />

        <Card imageSrc={foto4} imageAlt="Foto" />
      
    </section>
  )
}

export default Tab1