import { motion, AnimatePresence } from 'framer-motion'
import { ProductModalContainer } from '../../molecules/ProductModalContainer'

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
      <ProductModalContainer
        isProductDetailOpen={isProductDetailOpen}
        toggleProductDetailModal={toggleProductDetailModal}
      />
    </>
  )
}
