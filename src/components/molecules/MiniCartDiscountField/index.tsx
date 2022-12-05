import { useState } from 'react'

export function MiniCartDiscountField() {
  const [loading, setLoading] = useState(false)
  const [isCouponInvalid, setIsCouponInvalid] = useState(false)

  const clearError = () => {
    if (isCouponInvalid) {
      setIsCouponInvalid(false)
    }
  }

  const applyDiscount = async () => {
    setLoading(true)

    await new Promise(() => {
      setTimeout(() => {
        setLoading(false)
        setIsCouponInvalid(true)
      }, 1000)

      setTimeout(() => {
        setIsCouponInvalid(false)
      }, 5000)
    })
  }

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex flex-col w-3/5 relative">
        <input
          disabled={loading}
          onKeyUp={clearError}
          className={`p-3 w-full rounded-lg border-2 text-sm ${
            isCouponInvalid
              ? 'border-red-600 outline-none'
              : 'outline-gray-900 border-white'
          }`}
          placeholder="Cupom"
        />
        {isCouponInvalid && (
          <p className="flex m-0 p-0 absolute -bottom-4 left-0 font-bold text-red-600 text-[10px]">
            Cupom inválido
          </p>
        )}
      </div>

      <button
        onClick={applyDiscount}
        disabled={loading}
        className={`w-2/5 ${
          loading ? 'bg-zinc-400' : 'bg-green-600'
        } h-auto p-3 rounded-lg font-bold text-gray-100 text-sm`}
      >
        {loading && 'Aplicando...'}
        {!loading && 'Aplicar'}
      </button>
    </div>
  )
}
