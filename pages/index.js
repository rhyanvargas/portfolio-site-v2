import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Rhyan Vargas | Full Stack React Developer </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className=''>
          Welcome to home!
        </h1>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          RhyGuy ©2021
        </a>
      </footer> */}
    </div>
  )
}
