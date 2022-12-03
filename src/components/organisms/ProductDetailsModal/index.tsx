import { motion, AnimatePresence } from 'framer-motion'
import { ProductModalContainer } from '../../organisms/ProductModalContainer'
import { Product } from '../../../types/Product'

interface ProductDetailsModalProps {
  isProductDetailOpen: boolean
  closeModal: () => void
  product: Product | null
}

export function ProductDetailsModal({
  isProductDetailOpen,
  closeModal,
  product,
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
            onClick={closeModal}
          />
        )}
      </AnimatePresence>
      <ProductModalContainer
        isProductDetailOpen={isProductDetailOpen}
        toggleProductDetailModal={closeModal}
        product={product}
      />
    </>
  )
}
