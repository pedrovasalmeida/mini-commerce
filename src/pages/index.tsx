import Head from 'next/head'
import { Gallery } from '../components/organisms/Gallery'
import { Header } from '../components/organisms/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Commerce</title>
        <meta name="description" content="A simple commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="pt-9">
          <Gallery title="Recommended" />
        </div>
      </main>
    </div>
  )
}
