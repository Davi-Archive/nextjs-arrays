import Navbar from "./Navbar"
import styles from '../styles/nav-footer.module.css'

export default function Layout(){
   return(
        <div className={styles.navbar}>
        <Navbar destino="/" name="Home" />
        <Navbar destino="./array" name="Arrays"  />
        <Navbar destino="./sobre" name="Sobre"  />
         </div>
   )
}