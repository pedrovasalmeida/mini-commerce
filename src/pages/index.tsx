import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'
import { FooterMessage } from '../components/atoms/FooterMessage'

import { Gallery } from '../components/organisms/Gallery'
import { Header } from '../components/organisms/Header'
import { api } from '../services/api'
import { Product } from '../types/Product'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      <Head>
        <title>[PH] My Commerce</title>
        <meta name="description" content="A simple commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="py-9 px-2 max-w-5xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery title="Recomendados" products={products} />
        </Suspense>
      </main>
      <FooterMessage />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await api.get('/products?offset=0&limit=20')

    return {
      props: {
        products: response.data,
      },
      revalidate: 60 * 60 * 12, // 12 hours
    }
  } catch {
    return {
      props: {
        products: [],
      },
    }
  }
}
