import Image from 'next/image'
import { BuyIcon, RatingStarIcon } from '../../atoms/Icons'
import { formatPrice } from '../../../utils/handlePrice'
import { Product } from '../../../types/Product'

interface GalleryCardProps {
  product: Product
  toggleProductDetailModal: () => void
  setProductSelected: (product: Product) => void
}

export function GalleryCard({
  product,
  toggleProductDetailModal,
  setProductSelected,
}: GalleryCardProps) {
  const handleProductCardClick = async () => {
    await Promise.all([setProductSelected(product), toggleProductDetailModal()])
  }

  return (
    <div
      className="relative flex flex-col shadow-md bg-gray-50 rounded-lg text-start w-full xs:w-[46%] sm:w-[30%] md:w-[22%] cursor-pointer"
      onClick={handleProductCardClick}
    >
      <div className="absolute top-2 right-2 flex gap-2 items-center justify-center bg-gray-50 shadow w-auto px-2 py-1 rounded-lg">
        <RatingStarIcon />
        <p className="font-bold text-xs">4.9</p>
      </div>

      <div className="w-full h-44">
        <Image
          src={product?.images[0]}
          alt="Product Image"
          width={150}
          height={150}
          loading="lazy"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="px-4">
        <h3 className="text-sm pt-3 line-clamp-1">{product?.title}</h3>
        <div className="flex justify-between mt-3 pb-5">
          <div className="font-bold">{formatPrice(product?.price)}</div>
          <div>
            <BuyIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
