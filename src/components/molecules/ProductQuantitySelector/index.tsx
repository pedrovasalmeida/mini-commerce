export function ProductQuantitySelector() {
  return (
    <div className="flex w-auto items-center justify-center gap-2 bg-zinc-200 rounded-lg p-1">
      <div className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg">
        <p>-</p>
      </div>
      <span className="font-bold text-md">2</span>
      <div className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg">
        <p>+</p>
      </div>
    </div>
  )
}
