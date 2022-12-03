import { useMemo } from 'react'
import { CartItems } from '../../../types/Cart'
import { ArrowBackIcon } from '../../atoms/Icons'

interface MiniCartHeaderProps {
  closeMiniCart: () => void
  items: CartItems[]
}

export function MiniCartHeader({ closeMiniCart, items }: MiniCartHeaderProps) {
  const isCartEmpty = useMemo(
    () => (items ? items?.length <= 0 : true),
    [items],
  )

  console.log({ isCartEmpty })

  return (
    <div className="flex items-center justify-between">
      <button onClick={closeMiniCart}>
        <ArrowBackIcon />
      </button>
      <h2 className={`font-bold text-lg ${isCartEmpty ? 'mx-auto' : ''}`}>
        Meu carrinho
      </h2>
      {!!items && items?.length > 0 && (
        <button className="text-red-700">Limpar</button>
      )}
    </div>
  )
}
