import { formatPrice } from '../../../utils/handlePrice'

interface ProductPriceProps {
  price: number | null
}

export function ProductPrice({ price }: ProductPriceProps) {
  const calculateFakeDiscount = (price: number | null) => {
    if (!price) return 0

    const discount = price * 0.3

    return price + discount
  }

  return (
    <div className="flex items-center gap-2 mt-4">
      <p className="text-md text-gray-400 line-through">
        {formatPrice(calculateFakeDiscount(price ?? 0))}
      </p>
      {!price && <p>Ocorreu um erro</p>}
      {!!price && (
        <p className="font-bold text-lg">{formatPrice(price ?? 0)}</p>
      )}
    </div>
  )
}
