import { CartButton } from '../../atoms/CartButton'
import { SearchBar } from '../../molecules/SearchBar'

export function Header() {
  return (
    <div className="flex">
      <SearchBar />
      <CartButton />
    </div>
  )
}
