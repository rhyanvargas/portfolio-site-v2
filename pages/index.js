import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <NextSeo
      title="Home | Rhyan Vargas - Full Stack Developer"
    />
    <section className="container">
        <h1 className=''>
          Welcome to home!
        </h1>
    </section>

    <section className="container" id="work">
      <h1 className=''>
          This is my Projects!
        </h1>
    </section>
    </>
  )
}