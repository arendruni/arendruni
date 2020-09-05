import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className="h-100">
      <Head>
        <title>Andrea Giunio Bruni</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="d-flex flex-column h-100 w-100 mx-auto align-items-center p-4">
        <main role="main" className="mt-auto">
          <img className={`${styles.memoji} mb-3`} src="memoji.png"></img>
          <h1>Andrea Giunio Bruni</h1>
          <p className="lead">
            I'm a 24 years-old web developer <br></br> based in Italy.
          </p>
        </main>
        <footer className={`${styles.footer} mt-auto`}>
          <p>
            Let's keep in touch:{' '}
            <a className="text-white" href="mailto:dev@giun.io">
              Mail
            </a>{' '}
            and{' '}
            <a className="text-white" href="https://github.com/arendruni">
              Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
