import styles from './tab2.module.css'
import Card from '../../components/Card/card'

const Tab2 = () => {

const CARD_TEXT_1 = `
Hola, soy Cleopatra. Soy una mujer educada y con buena presencia. 
Me gusta aprovechar el tiempo, disfrutar de buenos momentos y vivir 
experiencias agradables. Si buscas compartir algo especial, escríbeme.
`.trim()

const CARD_TEXT_2 = `
En mi tiempo libre voy al gimnasio y entreno para mantenerme en forma. 
También me apasionan los deportes de riesgo. ¿Te animas a acompañarme?
`.trim()

const CARD_TEXT_3 = `
También me encanta salir a cenar a buenos restaurantes de la ciudad. 
Es el plan ideal para mirarnos con calma, conversar sin prisas y 
compartir un momento especial juntos.
`.trim()

const CARD_TEXT_4 = `
Si eres una persona educada y apasionada, no dudes en llamarme. 
Vivo en Madrid, en la zona de Plaza Castilla, y 
estoy segura de que, si compartimos alguno de estos planes, ambos 
viviremos momentos inolvidables.
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