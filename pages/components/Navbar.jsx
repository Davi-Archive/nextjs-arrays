import Link from 'next/link'
import styles from '../styles/nav-footer.module.css'

export default function Navbar(props){
return (
        <div className={styles.navItem}>
           <Link href={props.destino}>
                 <p>{props.name}</p>
            </Link>
        </div>
    )
}