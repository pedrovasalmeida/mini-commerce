import { Suspense, useState } from 'react'

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

  const toggleProductDetailModal = () => {
    setIsProductDetailOpen((current) => !current)
  }

  return (
    <div className="flex flex-col justify-start align-center">
      <div className="flex justify-between pb-6 w-full max-w-[416px]">
        <div className="font-bold text-lg">{title ?? ''}</div>
        {showViewAllButton && (
          <button className="text-green-500">Ver todos</button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          {products?.map((product) => (
            <GalleryCard
              key={product?.id}
              product={product}
              toggleProductDetailModal={toggleProductDetailModal}
            />
          ))}
        </Suspense>
      </div>

      <ProductDetailsModal
        isProductDetailOpen={isProductDetailOpen}
        toggleProductDetailModal={toggleProductDetailModal}
      />
    </div>
  )
}
