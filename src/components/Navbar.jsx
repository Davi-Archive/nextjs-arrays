import Link from 'next/link'
import styles from '../styles/navbar.module.css'


export default function Navbar(props){
return (
        <div className={styles.navbar}>
           <Link href={props.destino}>
                 {props.name}
            </Link>
        </div>
    )
}