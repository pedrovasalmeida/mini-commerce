import { CloseIcon, RatingStarIcon } from '../../atoms/Icons'

interface ProdutModalHeaderProps {
  toggleProductDetailModal: () => void
}

export function ProductModalHeader({
  toggleProductDetailModal,
}: ProdutModalHeaderProps) {
  return (
    <>
      <button
        className="absolute right-4 top-4 bg-stone-100 rounded-lg p-0.5 shadow"
        onClick={toggleProductDetailModal}
      >
        <CloseIcon />
      </button>

      <div className=" absolute flex items-center justify-start text-center gap-1 bg-stone-100 w-auto h-auto p-1 px-2 rounded-lg top-4 left-4 shadow">
        <RatingStarIcon />
        <p className="font-bold text-sm">4.9</p>
      </div>
    </>
  )
}
