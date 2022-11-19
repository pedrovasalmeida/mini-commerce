import { MiniCartHeader } from '../../molecules/MiniCartHeader'
import { MiniCartProductList } from '../../molecules/MiniCartProductList'
import { MiniCartFooter } from '../../molecules/MiniCartFooter'
import { useState } from 'react'
import { CartButton } from '../../atoms/CartButton'

export function MiniCart() {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)

  const toggleMiniCartVisibility = () => {
    setIsMiniCartOpen((current) => !current)
  }

  return (
    <>
      <section
        className={`flex fixed ${
          isMiniCartOpen ? 'right-0' : '-right-full'
        } top-0 w-screen h-screen z-10 duration-500`}
      >
        <button
          className={`bg-gray-900 ${
            isMiniCartOpen ? 'bg-opacity-70' : 'bg-opacity-0'
          } w-1/5 h-full duration-400`}
          onClick={toggleMiniCartVisibility}
        />
        <div className="flex flex-col w-4/5 h-full top-0 z-20 bg-gray-200 p-6">
          <MiniCartHeader />
          <MiniCartProductList />
          <MiniCartFooter />
        </div>
      </section>
      <CartButton toggleMiniCartVisibility={toggleMiniCartVisibility} />
    </>
  )
}
