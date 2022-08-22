import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Friends List | Home</title>
      <meta name='keywords' content='friends'/>
    </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Here we would be going through each File, and I would try to explain each line of code written </p>
        <p className={styles.text}>Here we would be going through each File, and I would try to explain each line of code written</p>
        <Link href={'/friends'}>
          <a className={styles.btn}>See Friends List</a>
        </Link>
      </div>
    </>
  );
}