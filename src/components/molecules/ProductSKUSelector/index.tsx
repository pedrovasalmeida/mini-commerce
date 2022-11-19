export function ProductSKUSelector() {
  return (
    <div className="flex flex-col mt-2">
      <p className="font-bold text-sm">Selecione o tamanho</p>
      <div className="flex gap-4 mt-2">
        <button className="border border-green-400  bg-green-400 p-1 px-3 rounded-lg">
          <p className=" text-gray-900 font-bold text-sm">P</p>
        </button>
        <button className="border border-gray-300 p-1 px-3 rounded-lg">
          <p className=" text-gray-900 font-bold text-sm">M</p>
        </button>
        <button className="border border-gray-300 p-1 px-3 rounded-lg">
          <p className=" text-gray-900 font-bold text-sm">G</p>
        </button>
        <button className="border border-gray-300 p-1 px-3 rounded-lg">
          <p className=" text-gray-900 font-bold text-sm">GG</p>
        </button>
      </div>
    </div>
  )
}
