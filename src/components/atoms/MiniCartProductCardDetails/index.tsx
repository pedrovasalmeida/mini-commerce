import { useDispatch } from 'react-redux'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from '../../../store/cart'
import { CartItems } from '../../../types/Cart'
import { formatPrice } from '../../../utils/handlePrice'

interface MiniCartProductCardProps {
  product: CartItems
}

export function MiniCardProductCardDetails({
  product,
}: MiniCartProductCardProps) {
  const dispatch = useDispatch()

  const handleChangeProductQuantity = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      return dispatch(increaseProductQuantity(product))
    }

    return dispatch(decreaseProductQuantity(product))
  }

  return (
    <div className="flex flex-col ml-2 flex-grow">
      <p className="text-sm font-bold line-clamp-1 overflow-hidden w-36">
        {product?.title ?? 'Produto'}
      </p>
      <div className="flex gap-1 items-center mt-2">
        <p className="text-xs text-gray-400 text-center">Categoria: </p>
        <p className="text-xs text-gray-900 text-center">
          {product?.category?.name ?? ''}
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="font-bold text-sm">{formatPrice(product?.price ?? 0)}</p>
        <div className="flex gap-1 items-center justify-center">
          <button
            onClick={() => handleChangeProductQuantity('decrease')}
            className="flex items-center justify-center border border-gray-500 w-4 h-4 text-center text-xs rounded"
          >
            -
          </button>
          <input
            value={product?.quantity ?? 1}
            readOnly
            className="font-bold w-5 bg-gray-100 text-center text-sm"
          />
          <button
            onClick={() => handleChangeProductQuantity('increase')}
            className="flex items-center justify-center border border-gray-500 w-4 h-4 text-center text-xs rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
