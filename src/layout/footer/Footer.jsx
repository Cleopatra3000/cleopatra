import styles from './footer.module.css'
import { EscribemeWhasap } from '../../components/EscribemeWhasap/escribemeWhasap'

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <EscribemeWhasap />

    </footer>
  )
}

export default Footer