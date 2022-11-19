import { MiniCartHeader } from '../../molecules/MiniCartHeader'
import { MiniCartProductList } from '../../molecules/MiniCartProductList'
import { MiniCartFooter } from '../../molecules/MiniCartFooter'
import { useState } from 'react'
import { CartButton } from '../../atoms/CartButton'

import { motion, AnimatePresence } from 'framer-motion'
import { modalVariants } from './variants'

export function MiniCart() {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)

  const toggleMiniCartVisibility = () => {
    setIsMiniCartOpen((current) => !current)
  }

  return (
    <>
      <AnimatePresence>
        {isMiniCartOpen && (
          <motion.div
            className={`bg-gray-900 fixed top-0 left-0 w-screen h-screen z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ ease: 'linear', duration: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMiniCartVisibility}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`flex fixed top-0 right-0 w-4/5 h-screen z-20 duration-500`}
        initial="hidden"
        animate={isMiniCartOpen ? 'visible' : 'hidden'}
        variants={modalVariants}
      >
        <div className="flex right-0 flex-col ml-auto w-full h-full z-20 bg-gray-200 p-6">
          <MiniCartHeader />
          <MiniCartProductList />
          <MiniCartFooter />
        </div>
      </motion.div>
      <CartButton toggleMiniCartVisibility={toggleMiniCartVisibility} />
    </>
  )
}
