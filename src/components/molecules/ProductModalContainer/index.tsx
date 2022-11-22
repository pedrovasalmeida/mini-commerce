import { motion } from 'framer-motion'

import { ProductModalHeader } from '../../molecules/ProductModalHeader'
import { ProductModalImage } from '../../molecules/ProductModalImage'
import { ProductPrice } from '../../molecules/ProductPrice'
import { ProductQuantitySelector } from '../../molecules/ProductQuantitySelector'
import { ProductSKUSelector } from '../../molecules/ProductSKUSelector'
import { modalVariants } from '../../organisms/ProductDetailsModal/variants'

interface ProductModalContainerProps {
  isProductDetailOpen: boolean
  toggleProductDetailModal: () => void
}

export function ProductModalContainer({
  isProductDetailOpen,
  toggleProductDetailModal,
}: ProductModalContainerProps) {
  return (
    <motion.div
      className="fixed bg-zinc-100 top-1/2 -translate-y-1/2 left-0 right-0 z-20 m-auto rounded-lg w-96 flex flex-col md:flex-row"
      variants={modalVariants}
      initial="hidden"
      animate={isProductDetailOpen ? 'visible' : 'hidden'}
    >
      <ProductModalHeader toggleProductDetailModal={toggleProductDetailModal} />

      <ProductModalImage />

      <div className="flex flex-col w-full h-full mt-auto">
        <div className="w-full h-full px-4 flex flex-col mt-4">
          <div className="flex flex-col">
            <p className="font-medium text-lg leading-6 line-clamp-3">
              Um nome bem grande para este produto supimpa muito top mesmo esse
              produto Um nome bem grande para este produto supimpa muito top
              mesmo esse produto
            </p>
            <ProductPrice />
          </div>

          <ProductSKUSelector />
        </div>

        <div className="flex px-4 gap-4 mt-8 mb-5">
          <ProductQuantitySelector />

          <button className="flex flex-grow bg-green-600 items-center justify-center rounded-lg">
            <p className="font-bold text-gray-100 text-xs">
              Adicionar ao carrinho
            </p>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
