import styles from './Footer.module.css'
import FooterNavTabs from './components/FooterNavTabs/FooterNavTabs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>Footer</div>
        <FooterNavTabs />
      </div>
    </footer>
  )
}

export default Footer
