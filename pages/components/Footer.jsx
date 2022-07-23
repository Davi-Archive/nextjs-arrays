import styles from '../styles/nav-footer.module.css'
import Image from 'next/image'


export default function Footer(){
    return (
        <div className={styles.footer}>
            <span className={styles.right}> Desenvolvido por Davi </span>
            <span className={styles.logo}> Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </div>
    )
}