import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

export function MiniCartCountBadge() {
  const { uniqueItemsCount } = useSelector((state: RootState) => state.cart)

  if (!uniqueItemsCount || uniqueItemsCount <= 0) {
    return <></>
  }

  return (
    <div className="flex items-center justify-center absolute right-0 top-0 bg-red-600 border border-gray-700 rounded-full py-0 px-1">
      <span className="font-bold text-[10px] m-0 p-0 text-zinc-50 leading-3">
        {uniqueItemsCount}
      </span>
    </div>
  )
}
