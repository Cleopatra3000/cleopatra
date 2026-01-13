import { NavLink } from 'react-router-dom'
import styles from './NavTabs.module.css'


const NavTabs = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${styles.tabLink} ${isActive ? styles.tabActive : ''}`
        }
      >
        SOBRE MI
      </NavLink>

      <NavLink
        to="/tab2"
        className={({ isActive }) =>
          `${styles.tabLink} ${isActive ? styles.tabActive : ''}`
        }
      >
        CONÓCEME
      </NavLink>

      <NavLink
        to="/tab3"
        className={({ isActive }) =>
          `${styles.tabLink} ${isActive ? styles.tabActive : ''}`
        }
      >
        CONTACTO
      </NavLink>
    </nav>
  )
}

export default NavTabs