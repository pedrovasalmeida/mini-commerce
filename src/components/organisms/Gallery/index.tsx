import { Product } from '../../../types/Product'
import { GalleryCard } from '../../molecules/GalleryCard'

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
  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-6">
        <h2 className="font-bold text-lg">{title ?? ''}</h2>
        {showViewAllButton && (
          <button className="text-green-500">Ver todos</button>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {products?.map((product) => (
          <GalleryCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  )
}
