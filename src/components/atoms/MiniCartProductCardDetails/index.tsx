export function MiniCardProductCardDetails() {
  return (
    <div className="flex flex-col ml-2 flex-grow">
      <p className="text-sm font-bold line-clamp-1 overflow-hidden w-36">
        Name of product with big words and letters
      </p>
      <div className="flex gap-1 items-center mt-3">
        <p className="text-xs text-gray-400 text-center">Tamanho: </p>
        <p className="text-xs text-gray-900 text-center">M</p>
      </div>
      <div className="flex mt-auto items-center justify-between">
        <p className="font-bold text-sm">R$ 9999,99</p>
        <div className="flex gap-1 items-center justify-center">
          <button className="flex items-center justify-center border border-gray-500 w-4 h-4 text-center text-xs rounded">
            -
          </button>
          <input
            value={2}
            readOnly
            className="font-bold w-5 bg-gray-100 text-center text-sm"
          />
          <button className="flex items-center justify-center border border-gray-500 w-4 h-4 text-center text-xs rounded">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
