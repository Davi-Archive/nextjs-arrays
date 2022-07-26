import Head from 'next/head'
import styles from './styles/Home.module.css'
import Footer from './components/Footer'
import Layout from './components/Layout'


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
        <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </span>
        </div>
      </main>

      <footer>
       <Footer />
      </footer>
    </div>
    </>
  )
}
