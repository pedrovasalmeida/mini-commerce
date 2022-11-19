import { motion, AnimatePresence } from 'framer-motion'
import { ProductModalHeader } from '../../molecules/ProductModalHeader'
import { ProductModalImage } from '../../molecules/ProductModalImage'
import { ProductPrice } from '../../molecules/ProductPrice'
import { ProductQuantitySelector } from '../../molecules/ProductQuantitySelector'
import { ProductSKUSelector } from '../../molecules/ProductSKUSelector'
import { modalContentVariants, modalVariants } from './variants'

interface ProductDetailsModalProps {
  isProductDetailOpen: boolean
  toggleProductDetailModal: () => void
}

export function ProductDetailsModal({
  isProductDetailOpen,
  toggleProductDetailModal,
}: ProductDetailsModalProps) {
  return (
    <>
      <AnimatePresence>
        {isProductDetailOpen && (
          <motion.div
            className="bg-zinc-900 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 m-auto z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'linear', duration: 0.7 }}
            onClick={toggleProductDetailModal}
          />
        )}
      </AnimatePresence>
      <motion.div
        className="fixed bg-gray-100 top-0 bottom-0 left-0 right-0 z-20 m-auto rounded-lg"
        variants={modalVariants}
        initial="hidden"
        animate={isProductDetailOpen ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={modalContentVariants}
          initial="hidden"
          animate={isProductDetailOpen ? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
          className="w-full h-full bg-stone-100 rounded-lg flex flex-col relative"
        >
          <ProductModalHeader
            toggleProductDetailModal={toggleProductDetailModal}
          />

          <ProductModalImage />

          <div className="w-full h-full px-4 flex flex-col mt-4">
            <div className="flex flex-col">
              <p className="font-medium text-lg leading-6 line-clamp-3">
                Um nome bem grande para este produto supimpa muito top mesmo
                esse produto Um nome bem grande para este produto supimpa muito
                top mesmo esse produto
              </p>
              <ProductPrice />
            </div>

            <ProductSKUSelector />
          </div>

          <div className="flex px-4 gap-4 mt-auto mb-5">
            <ProductQuantitySelector />

            <button className="flex flex-grow bg-green-600 items-center justify-center rounded-lg font-bold text-gray-100 text-sm">
              <p>Adicionar ao carrinho</p>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
