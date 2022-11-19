import { GalleryCard } from '../../molecules/GalleryCard'

interface GalleryProps {
  title?: string | null
  showViewAllButton?: boolean
}

export function Gallery({
  title = null,
  showViewAllButton = true,
}: GalleryProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-6">
        <h2 className="font-bold text-lg">{title ?? ''}</h2>
        {showViewAllButton && (
          <button className="text-green-500">View All</button>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {[0, 1, 2, 3].map((item) => (
          <GalleryCard key={item} />
        ))}
      </div>
    </div>
  )
}
