import { SearchBar } from '../../molecules/SearchBar'
import { MiniCart } from '../MiniCart'

export function Header() {
  return (
    <div className="flex">
      <SearchBar />
      <MiniCart />
    </div>
  )
}
