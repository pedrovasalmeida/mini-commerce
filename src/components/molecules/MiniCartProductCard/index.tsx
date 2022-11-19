import { TrashIcon } from '../../atoms/Icons'
import { MiniCardProductCardDetails } from '../../atoms/MiniCartProductCardDetails'

export function MiniCartProductCard() {
  return (
    <div className="flex relative bg-gray-100 rounded-lg shadow p-4">
      <div className="absolute right-2 top-3 rounded-full flex items-center justify-center p-1">
        <button className="text-red-700">
          <TrashIcon />
        </button>
      </div>

      <div className="min-w-20 w-20 h-20">
        <img
          className="w-full h-full object-contain rounded-lg"
          src="https://fakeimg.pl/300x300"
          loading="lazy"
        />
      </div>

      <MiniCardProductCardDetails />
    </div>
  )
}
