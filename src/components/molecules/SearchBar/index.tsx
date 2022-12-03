import { useRef } from 'react'
import type { KeyboardEvent, ChangeEvent } from 'react'
import { useDebounce } from '../../../hooks/useDebounce'
import { SearchIcon } from '../../atoms/Icons'

interface SearchBarProps {
  searchTermInProducts: (term: string) => void
}

export function SearchBar({ searchTermInProducts }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const searchProducts = () => {
    searchTermInProducts(inputRef?.current?.value ?? '')
  }

  const debounce = useDebounce(searchProducts)

  const searchProductsByEnterKeyOrDebounce = (
    e: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      searchProducts()
    } else {
      debounce()
    }
  }

  const clearSearchWhenInputIsEmpty = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 0) {
      searchTermInProducts('')
    }
  }

  return (
    <div className="relative flex w-full">
      <input
        type="text"
        ref={inputRef}
        onKeyUp={searchProductsByEnterKeyOrDebounce}
        onChange={clearSearchWhenInputIsEmpty}
        placeholder="Pesquise pelo produto..."
        className="flex w-full rounded-lg px-5 py-4 shadow shadow-gray-400 outline-gray-900 placeholder-gray-300 text-gray-900 bg-gray-50"
      />
      <button
        onClick={() => searchTermInProducts(inputRef?.current?.value ?? '')}
        className="absolute right-2 top-0 bottom-0 px-2"
      >
        <SearchIcon />
      </button>
    </div>
  )
}
