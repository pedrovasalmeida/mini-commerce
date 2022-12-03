import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../store/cart'
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

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <button onClick={closeMiniCart}>
          <ArrowBackIcon />
        </button>
        <h2 className={`font-bold text-lg ${isCartEmpty ? 'mx-auto' : ''}`}>
          Meu carrinho
        </h2>
        {!!items && items?.length > 0 && (
          <button
            onClick={handleClearCart}
            className="text-red-700 font-bold text-xs"
          >
            Limpar
          </button>
        )}
      </div>
      {!isCartEmpty && (
        <div className="flex items-center justify-end border-t border-t-gray-300 mt-1 pt-1">
          {items?.length > 0 && (
            <p className="text-[10px] text-gray-400">
              {items?.length} {items?.length > 1 ? 'itens' : 'item'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
