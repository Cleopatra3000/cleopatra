import Header from './header/Header'
import Footer from './footer/Footer'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.appShell}>

      <Header />
      
      <main className={styles.appMain}>
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default Layout