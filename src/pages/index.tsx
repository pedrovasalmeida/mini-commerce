import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { FooterMessage } from '../components/atoms/FooterMessage'

import { Gallery } from '../components/organisms/Gallery'
import { GallerySkeleton } from '../components/organisms/GallerySkeleton'
import { Header } from '../components/organisms/Header'
import { api } from '../services/api'
import { Product } from '../types/Product'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [productsFromApi, setProductsFromApi] = useState<Product[]>([])
  const [loadingProducts, setLoadingProducts] = useState(true)

  const getProductsFromApi = useCallback(async () => {
    try {
      if (!loadingProducts) setLoadingProducts(true)

      const response = await api.get('/products?offset=0&limit=20')

      setProductsFromApi(response.data)
    } catch (err) {
      console.error('Ocorreu um erro ao buscar os produtos: ', err)
      setProductsFromApi([])
    } finally {
      setLoadingProducts(false)
    }
  }, [])

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
    getProductsFromApi()
  }, [getProductsFromApi])

  useEffect(() => {
    setProducts(productsFromApi)
  }, [productsFromApi])

  return (
    <div>
      <Head>
        <title>[PH] Commerce</title>
        <meta name="description" content="A simple commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header searchTermInProducts={searchTermInProducts} />
      <main className="py-9 px-2 max-w-5xl mx-auto">
        {loadingProducts && products?.length <= 0 && (
          <GallerySkeleton quantity={8} />
        )}

        {!loadingProducts && products?.length > 0 && (
          <Gallery
            title="Recomendados"
            products={products}
            showViewAllButton={false}
          />
        )}
      </main>
      <FooterMessage />
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const response = await api.get('/products?offset=0&limit=20')

//     return {
//       props: {
//         productsFromApi: response.data,
//       },
//       // revalidate: 60 * 60 * 12, // 12 hours
//     }
//   } catch {
//     return {
//       props: {
//         productsFromApi: [],
//       },
//     }
//   }
// }
