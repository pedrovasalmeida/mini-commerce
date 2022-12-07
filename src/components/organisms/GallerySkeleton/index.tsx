import { CardSkeleton } from '../../molecules/CardSkeleton'

interface GallerySkeletonProps {
  quantity?: number
}

export function GallerySkeleton({ quantity = 4 }: GallerySkeletonProps) {
  return (
    <div>
      <div className="flex justify-start gap-10 items-center pb-6 w-full">
        <div className="w-[136px] h-7 bg-zinc-200 animate-pulse rounded-lg" />
      </div>

      <div className="flex flex-wrap gap-6 justify-start items-center">
        {Array.from({ length: quantity }, (_, index) => index).map((item) => {
          return <CardSkeleton key={item} />
        })}
      </div>
    </div>
  )
}
