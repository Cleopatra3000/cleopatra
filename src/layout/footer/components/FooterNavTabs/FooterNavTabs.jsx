import styles from './FooterNavTabs.module.css'

const FooterNavTabs = () => {
  const handleClick = (label) => {
    alert(`Has hecho click en ${label}`)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.tabFooter} onClick={() => handleClick('Footer Tab 1')}>
        Footer Tab 1
      </div>

      <div className={styles.tabFooter}  onClick={() => handleClick('Footer Tab 2')}>
        Footer Tab 2
      </div>

      <div className={styles.tabFooter}  onClick={() => handleClick('Footer Tab 3')}>
        Footer Tab 3
      </div>
    </nav>
  )
}

export default FooterNavTabs