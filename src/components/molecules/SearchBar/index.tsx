import { SearchIcon } from '../../atoms/Icons'

export function SearchBar() {
  return (
    <div className="relative flex w-full">
      <input
        type="text"
        placeholder="Search your desire product"
        className="flex w-full rounded-lg px-5 py-4 shadow shadow-gray-400 outline-gray-900 placeholder-gray-300 text-gray-900 bg-gray-50"
      />
      <button className="absolute right-2 top-0 bottom-0 px-2">
        <SearchIcon />
      </button>
    </div>
  )
}
