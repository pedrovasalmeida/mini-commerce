import { SearchBar } from '../../molecules/SearchBar'
import { MiniCart } from '../MiniCart'

export function Header() {
  return (
    <div className="flex px-2 pt-2">
      <SearchBar />
      <MiniCart />
    </div>
  )
}
