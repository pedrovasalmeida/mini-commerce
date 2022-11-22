import { useState } from 'react'

const availableSKUs = ['P', 'M', 'G', 'GG']

export function ProductSKUSelector() {
  const [selectedSku, setSelectedSku] = useState('P')

  const handleSelectSku = (sku: string) => {
    setSelectedSku(sku)
  }

  return (
    <div className="flex flex-col mt-4">
      <p className="font-bold text-sm">Selecione o tamanho</p>
      <div className="flex gap-4 mt-2">
        {availableSKUs.map((sku) => (
          <button
            key={sku}
            onClick={() => handleSelectSku(sku)}
            className={`border border-gray-300 p-1 px-3 rounded-lg transition-all duration-400 ease ${
              selectedSku === sku?.toUpperCase()
                ? 'bg-green-500 border-green-600'
                : ''
            }`}
          >
            <p className=" text-gray-900 font-bold text-sm">
              {sku?.toUpperCase()}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
