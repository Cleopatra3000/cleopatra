import styles from './tab2.module.css'
import Card from '../../components/Card/card'

const Tab2 = () => {

  const CARD_TEXT_1 =
    'Hola, soy Cleopatra, una chica con muy buena educación y saber estar, ' +
    'además de culta. Soy una mujer a la que no le gusta nada perder ' +
    'el tiempo y siempre me centro en pasar los mejores momentos ' +
    'y disfrutar de maravillosas experiencias.'

  const CARD_TEXT_2 =
    'Me gusta pasar mi tiempo libre yendo al gimnasio y entrenando durante horas,' +
    'para conseguir una buena forma física. Una de mis pasiones son los deportes' +
    'de riesto,' +
    '¿Te apuntas?'

  const CARD_TEXT_3 =
    'Por otro lado, salir y compartir una deliciosa cena en algún restaurante' +
    'de la ciudad,' +
    'me parece un plan perfecto. Podemos conocernos tranuilamente y' +
    'pasra unos momentos muy agradables.'


  const CARD_TEXT_4 =
    'Si eres esa persona educada y apasionada, no dudes en llamarme' +
    'al teléfono 603257735. Vivo en Madrid, en la zona de la Plaza Castilla,' +
    'y estoy segura, que si realizamos alguna de estas actividades,' +
    'los ds nos lo pasaremos como nunca.'

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