import styles from './tab2.module.css'
import Card from '../../components/Card/card'

const Tab2 = () => {

const CARD_TEXT_1 = `
Hola, soy Cleopatra. Soy una mujer educada y con buena presencia. 
Me gusta disfrutar del momento y vivir experiencias especiales. 
Si buscas algo bonito, escríbeme.
`.trim()

const CARD_TEXT_2 = `
En mi tiempo libre entreno y me mantengo en forma. 
También me encantan los deportes de riesgo. ¿Te animas?
`.trim()

const CARD_TEXT_3 = `
Me encanta salir a cenar a buenos restaurantes. 
Es el plan perfecto para conversar con calma y 
compartir un momento especial.
`.trim()

const CARD_TEXT_4 = `
Si eres una persona educada y apasionada, llámame. 
Vivo en Madrid, zona Plaza Castilla, y juntos podemos 
vivir momentos inolvidables.
`.trim()

  return (
    <section className={styles.TabShell}>

      <Card text={CARD_TEXT_1} />

      <Card text={CARD_TEXT_2} />

      <Card text={CARD_TEXT_3} />

      <Card text={CARD_TEXT_4} />

    </section>
  )
}

export default Tab2