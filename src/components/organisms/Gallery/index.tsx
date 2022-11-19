import { Product } from '../../../types/Product'
import { GalleryCard } from '../../molecules/GalleryCard'

import { motion } from 'framer-motion'
import { Suspense, useState } from 'react'
import { CloseIcon, RatingStarIcon } from '../../atoms/Icons'
import {
  modalContentVariants,
  modalVariants,
  overlayVariants,
} from './variants'

interface GalleryProps {
  title?: string | null
  showViewAllButton?: boolean
  products?: Product[]
}

export function Gallery({
  title = null,
  showViewAllButton = true,
  products = [],
}: GalleryProps) {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  const toggleProductDetailModal = () => {
    setIsProductDetailOpen((current) => !current)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-6">
        <div className="font-bold text-lg">{title ?? ''}</div>
        {showViewAllButton && (
          <button className="text-green-500">Ver todos</button>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          {products?.map((product) => (
            <GalleryCard
              key={product?.id}
              product={product}
              toggleProductDetailModal={toggleProductDetailModal}
            />
          ))}
        </Suspense>
      </div>

      <motion.div
        className="bg-gray-900 bg-opacity-80 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 m-auto z-10"
        variants={overlayVariants}
        animate={isProductDetailOpen ? 'visible' : 'hidden'}
        onClick={toggleProductDetailModal}
      />
      <motion.div
        className="fixed bg-gray-100 top-0 bottom-0 left-0 right-0 z-20 m-auto rounded-lg"
        variants={modalVariants}
        animate={isProductDetailOpen ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={modalContentVariants}
          animate={isProductDetailOpen ? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
          className="w-full h-full bg-stone-100 rounded-lg flex flex-col relative"
        >
          <button
            className="absolute right-4 top-4 bg-stone-100 rounded-lg p-0.5 shadow"
            onClick={toggleProductDetailModal}
          >
            <CloseIcon />
          </button>

          <div className=" absolute flex items-center justify-start text-center gap-1 bg-stone-100 w-auto h-auto p-1 px-2 rounded-lg top-4 left-4 shadow">
            <RatingStarIcon />
            <p className="font-bold text-sm">4.9</p>
          </div>

          <div className="w-full h-auto">
            <img
              src="https://fakeimg.pl/500x500"
              alt="Foto do produto"
              className="object-contain rounded-lg rounded-b-2xl"
            />
          </div>

          <div className="w-full h-full px-4 flex flex-col mt-2">
            <div className="flex flex-col">
              <p className="font-medium text-lg leading-6 line-clamp-3">
                Um nome bem grande para este produto supimpa muito top mesmo
                esse produto Um nome bem grande para este produto supimpa muito
                top mesmo esse produto
              </p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-md text-gray-400 line-through">R$ 9999,00</p>
                <p className="font-bold text-lg">R$ 9999,00</p>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <p className="font-bold text-sm">Selecione o tamanho</p>
              <div className="flex gap-4 mt-2">
                <button className="border border-green-400  bg-green-400 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  <p>P</p>
                </button>
                <button className="border border-gray-300 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  <p>M</p>
                </button>
                <button className="border border-gray-300 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  <p>G</p>
                </button>
                <button className="border border-gray-300 p-1 px-3 rounded-lg text-gray-900 font-bold">
                  <p>GG</p>
                </button>
              </div>
            </div>
          </div>

          <div className="flex px-4 gap-4 mt-auto mb-5">
            <div className="flex w-auto items-center justify-center gap-2 bg-gray-300 rounded-lg p-1">
              <div className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg">
                <p>-</p>
              </div>
              <span>2</span>
              <div className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg">
                <p>+</p>
              </div>
            </div>

            <button className="flex flex-grow bg-green-600 items-center justify-center rounded-lg font-bold text-gray-100 text-sm">
              <p>Adicionar ao carrinho</p>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
