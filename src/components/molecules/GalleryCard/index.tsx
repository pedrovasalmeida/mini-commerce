import Image from 'next/image'
import { Product } from '../../../types/Product'
import { formatPrice } from '../../../utils/handlePrice'
import { BuyIcon, RatingStarIcon } from '../../atoms/Icons'

interface GalleryCardProps {
  product: Product
}

export function GalleryCard({ product }: GalleryCardProps) {
  return (
    <div className="relative flex flex-col shadow-md bg-gray-50 rounded-lg w-[183px]">
      <div className="absolute top-2 right-2">
        <div className="flex gap-2 items-center justify-center bg-gray-50 shadow w-auto px-2 py-1 rounded-lg">
          <RatingStarIcon />
          <p className="font-bold text-xs">{product?.rating?.rate}</p>
        </div>
      </div>

      <div className="w-full h-44">
        <Image
          src={product?.image}
          alt="Product Image"
          width={150}
          height={120}
          loading="lazy"
          className="rounded-lg w-full h-full object-contain"
        />
      </div>

      <div className="px-4">
        <h3 className="text-sm pt-3 line-clamp-1">{product?.title}</h3>
        <div className="flex justify-between mt-3 pb-5">
          <p className="font-bold">{formatPrice(product?.price)}</p>
          <button>
            <BuyIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
