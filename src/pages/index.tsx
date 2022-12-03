import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { FooterMessage } from '../components/atoms/FooterMessage'

import { Gallery } from '../components/organisms/Gallery'
import { Header } from '../components/organisms/Header'
import { api } from '../services/api'
import { Product } from '../types/Product'

interface HomeProps {
  productsFromApi: Product[]
}

export default function Home({ productsFromApi }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([])

  const searchTermInProducts = useCallback(
    (term: string) => {
      if (term.length <= 0) {
        setProducts(productsFromApi)
      } else {
        const productsFiltered = productsFromApi.filter((product) => {
          return (
            product.title.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
          )
        })

        setProducts(productsFiltered)
      }
    },
    [productsFromApi],
  )

  useEffect(() => {
    setProducts(productsFromApi)
  }, [productsFromApi])

  return (
    <div>
      <Head>
        <title>[PH] My Commerce</title>
        <meta name="description" content="A simple commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header searchTermInProducts={searchTermInProducts} />
      <main className="py-9 px-2 max-w-5xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery
            title="Recomendados"
            products={products}
            showViewAllButton={false}
          />
        </Suspense>
      </main>
      <FooterMessage />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await api.get('/products?offset=0&limit=20')

    return {
      props: {
        productsFromApi: response.data,
      },
      // revalidate: 60 * 60 * 12, // 12 hours
    }
  } catch {
    return {
      props: {
        productsFromApi: [],
      },
    }
  }
}
