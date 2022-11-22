import { useRef } from 'react'
import { SearchIcon } from '../../atoms/Icons'

interface SearchBarProps {
  searchTermInProducts: (term: string) => void
}

export function SearchBar({ searchTermInProducts }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="relative flex w-full">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value.length <= 0) {
            searchTermInProducts('')
          }
        }}
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
