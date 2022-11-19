import { Product } from '../../../types/Product'
import { GalleryCard } from '../../molecules/GalleryCard'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { RatingStarIcon } from '../../atoms/Icons'

interface GalleryProps {
  title?: string | null
  showViewAllButton?: boolean
  products?: Product[]
}

const variants = {
  visible: {
    opacity: 1,
    height: '70%',
    width: '85%',
  },
  hidden: {
    opacity: 0,
    height: '0%',
    width: '0%',
  },
}

const overlayVariants = {
  visible: {
    opacity: 1,
    height: '100%',
    width: '100%',
  },
  hidden: {
    opacity: 0,
    height: '0%',
    width: '0%',
  },
}

export function Gallery({
  title = null,
  showViewAllButton = true,
  products = [],
}: GalleryProps) {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(true)

  const toggleProductDetailModal = () => {
    setIsProductDetailOpen((current) => !current)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-6">
        <h2 className="font-bold text-lg">{title ?? ''}</h2>
        {showViewAllButton && (
          <button className="text-green-500">Ver todos</button>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {products?.map((product) => (
          <GalleryCard
            key={product?.id}
            product={product}
            toggleProductDetailModal={toggleProductDetailModal}
          />
        ))}
      </div>

      <motion.div
        className="bg-gray-900 bg-opacity-80 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 m-auto z-10"
        variants={overlayVariants}
        animate={isProductDetailOpen ? 'visible' : 'hidden'}
        onClick={toggleProductDetailModal}
      />
      <motion.div
        className="fixed bg-gray-100 top-0 bottom-0 left-0 right-0 z-20 m-auto rounded-lg"
        variants={variants}
        animate={isProductDetailOpen ? 'visible' : 'hidden'}
      >
        <div className="w-full h-full bg-stone-100 rounded-lg">
          <div className="w-full h-auto">
            <img
              src="https://fakeimg.pl/500x500"
              alt="Foto do produto"
              className="object-contain rounded-lg"
            />
          </div>

          <div className="w-full h-auto px-4">
            <div className="flex items-center justify-start gap-1 bg-stone-100 h-auto">
              <div className="flex gap-1 items-center justify-center">
                <RatingStarIcon />
                <p className="font-bold text-md">4.9</p>
              </div>
              <p className="text-xs italic text-gray-400">(84)</p>
            </div>

            <div className="flex flex-col">
              <p className="font-medium text-lg">Nome do produto</p>
              <p className="font-bold">R$ 100,00</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-sm">Selecione o tamanho</p>
              <div className="flex gap-4">
                <button className="border border-green-400  bg-green-400 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  P
                </button>
                <button className="border border-gray-300 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  M
                </button>
                <button className="border border-gray-300 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  G
                </button>
                <button className="border border-gray-300 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  GG
                </button>
              </div>
            </div>
          </div>

          <div className="flex px-4 gap-4">
            <div className="flex w-2/6 items-center justify-center gap-2 bg-zinc-300 rounded-lg">
              <button className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg">
                -
              </button>
              <span>2</span>
              <button className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg">
                +
              </button>
            </div>

            <button className="flex flex-grow bg-green-600 py-2 items-center justify-center rounded-lg font-bold text-gray-100 text-sm">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
