import Link from 'next/link'
import styles from '../styles/nav-footer.module.css'

export default function Navbar(props){
return (
        <div className={styles.navItem}>
           <ul>
           <Link href={props.destino ?? '#'} >
                 <li><a>{props.name}</a></li>
            </Link>
           </ul>
        </div>
    )
}