import { useState } from 'react'

import { GalleryCard } from '../../molecules/GalleryCard'
import { ProductDetailsModal } from '../ProductDetailsModal'

import { Product } from '../../../types/Product'

interface GalleryProps {
  title?: string | null
  showViewAllButton?: boolean
  products?: Product[]
}

export function Gallery({
  title = null,
  showViewAllButton = true,
  products = [],
}: GalleryProps) {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productSelected, setProductSelected] = useState<Product | null>(null)

  const toggleProductDetailModal = () => {
    setIsProductDetailOpen((current) => !current)
  }

  const closeModal = () => {
    setIsProductDetailOpen(false)
  }

  return (
    <div className="flex flex-col justify-start align-center">
      <div className="flex justify-start gap-10 items-center pb-6 w-full">
        <div className="font-bold text-lg">{title ?? ''}</div>
        {showViewAllButton && (
          <button className="text-green-500 text-sm font-bold underline">
            Ver todos
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-6 justify-start items-center">
        {products?.map((product) => (
          <GalleryCard
            key={product?.id}
            product={product}
            toggleProductDetailModal={toggleProductDetailModal}
            setProductSelected={setProductSelected}
          />
        ))}
      </div>

      <ProductDetailsModal
        isProductDetailOpen={isProductDetailOpen}
        closeModal={closeModal}
        product={productSelected}
      />
    </div>
  )
}
