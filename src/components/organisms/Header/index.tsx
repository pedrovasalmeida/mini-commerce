import { SearchBar } from '../../molecules/SearchBar'
import { MiniCart } from '../MiniCart'

export function Header() {
  return (
    <div className="flex items-center justify-center px-2 pt-2 lg:py-2 max-w-5xl mx-auto">
      <div className="flex w-full">
        <SearchBar />
      </div>
      <div className="flex ml-auto lg:pr-6">
        <MiniCart />
      </div>
    </div>
  )
}
