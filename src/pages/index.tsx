import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FooterMessage } from '../components/atoms/FooterMessage'

import { Gallery } from '../components/organisms/Gallery'
import { Header } from '../components/organisms/Header'
import { MiniCart } from '../components/organisms/MiniCart'
import { api } from '../services/api'
import { Product } from '../types/Product'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      <Head>
        <title>My Commerce</title>
        <meta name="description" content="A simple commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MiniCart />
      <Header />
      <main>
        <div className="pt-9">
          <Gallery title="Recomendados" products={products} />
        </div>
      </main>
      <FooterMessage />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await api.get('/products?limit=6')

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
