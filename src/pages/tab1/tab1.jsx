import Card from "../../components/Card/card"
import foto1 from '../../images/fotos/foto1.jpg'
import foto2 from '../../images/fotos/foto2.jpg'
import foto3 from '../../images/fotos/foto3.jpg'
import foto4 from '../../images/fotos/foto4.jpg'
import foto5 from '../../images/fotos/foto5.jpg'
import foto6 from '../../images/fotos/foto6.jpg'
import foto7 from '../../images/fotos/foto7.jpg'
import foto8 from '../../images/fotos/foto8.jpg'
import foto9 from '../../images/fotos/foto9.jpg'
import foto10 from '../../images/fotos/foto10.jpg'
import foto11 from '../../images/fotos/foto11.jpg'
import foto12 from '../../images/fotos/foto12.jpg'
import styles from './tab1.module.css'




const Tab1 = () => {
  return (
    <section className={styles.TabShell}>

        <Card imageSrc={foto1} imageAlt="Foto" />

        <Card imageSrc={foto2} imageAlt="Foto" />

        <Card imageSrc={foto3} imageAlt="Foto" />

        <Card imageSrc={foto4} imageAlt="Foto" />

        <Card imageSrc={foto5} imageAlt="Foto" />

        <Card imageSrc={foto6} imageAlt="Foto" />

        <Card imageSrc={foto7} imageAlt="Foto" />

        <Card imageSrc={foto8} imageAlt="Foto" />

        <Card imageSrc={foto9} imageAlt="Foto" />

        <Card imageSrc={foto10} imageAlt="Foto" />

        <Card imageSrc={foto11} imageAlt="Foto" />

        <Card imageSrc={foto12} imageAlt="Foto" />
      
    </section>
  )
}

export default Tab1