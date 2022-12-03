import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../../store/cart'
import { CartItems } from '../../../types/Cart'
import { formatPrice } from '../../../utils/handlePrice'
import { TrashIcon } from '../../atoms/Icons'
import { MiniCardProductCardDetails } from '../../atoms/MiniCartProductCardDetails'

interface MiniCartProductCardProps {
  product: CartItems
}

export function MiniCartProductCard({ product }: MiniCartProductCardProps) {
  const dispatch = useDispatch()

  const handleRemoveProductFromCart = () => {
    dispatch(removeProductFromCart(product))
  }

  return (
    <div className="flex flex-col relative bg-gray-100 rounded-lg shadow p-2 pb-1">
      <div className="flex">
        <div className="absolute right-2 top-3 rounded-full flex items-center justify-center p-1">
          <button
            className="text-red-700"
            onClick={handleRemoveProductFromCart}
          >
            <TrashIcon />
          </button>
        </div>

        <div className="hidden xs:flex min-w-20 w-20 h-20">
          <Image
            alt={product?.title ?? 'Imagem do produto'}
            className="w-full h-full object-cover rounded-lg"
            src={product?.images[0] ?? 'https://fakeimg.pl/300x300'}
            loading="lazy"
            width={80}
            height={80}
          />
        </div>

        <MiniCardProductCardDetails product={product} />
      </div>

      <div className="flex w-full justify-between items-center mt-2 pt-1 border-t border-t-gray-200">
        <p className="m-0 text-[10px] text-gray-400">
          Total ({product?.quantity} {product?.quantity > 1 ? 'itens' : 'item'})
        </p>
        <p className="m-0 text-[10px] font-medium text-gray-400">
          {formatPrice(product?.price * product?.quantity)}
        </p>
      </div>
    </div>
  )
}
