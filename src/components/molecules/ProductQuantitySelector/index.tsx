import { useState } from 'react'

export function ProductQuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity((current) => current + 1)
  }

  const handleDecrement = () => {
    setQuantity((current) => (current <= 1 ? 1 : current - 1))
  }

  return (
    <div className="flex w-auto items-center justify-center gap-2 bg-zinc-200 rounded-lg p-1">
      <button
        className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg"
        onClick={handleDecrement}
      >
        <p>-</p>
      </button>
      <span className="font-bold text-md">{quantity}</span>
      <button
        className="p-1 px-3 border border-gray-400 bg-gray-100 rounded-lg"
        onClick={handleIncrement}
      >
        <p>+</p>
      </button>
    </div>
  )
}
