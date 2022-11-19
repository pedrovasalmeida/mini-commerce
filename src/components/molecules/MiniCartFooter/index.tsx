export function MiniCartFooter() {
  return (
    <div className="flex flex-col h-auto mt-5">
      <div className="flex w-full items-center justify-between gap-4">
        <input
          className="p-3 w-3/5 rounded-lg text-sm outline-gray-900"
          placeholder="Cupom"
        />
        <button className="w-2/5 bg-green-600 h-auto p-3 rounded-lg font-bold text-gray-100 text-sm">
          Aplicar
        </button>
      </div>

      <div className="flex flex-col w-full mt-8 gap-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-500 text-sm">Subtotal</p>
          <p className="text-gray-900 font-bold text-sm">R$ 999,9</p>
        </div>

        <div className="flex justify-between items-center w-full">
          <p className="text-gray-500 text-sm">Desconto</p>
          <p className="text-green-600 font-bold text-sm">- R$ 999,9</p>
        </div>

        <div className="flex justify-between items-center w-full">
          <p className="text-gray-500 text-sm">Frete</p>
          <p className="text-gray-900 font-bold text-sm">Grátis</p>
        </div>

        <div id="separator" className="h-px w-full bg-gray-300" />

        <div className="flex justify-between items-center w-full">
          <p className="text-gray-900 font-bold text-sm">Total</p>
          <p className="text-gray-900 font-bold text-sm">R$ 999,99</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-6">
        <button className="flex items-center justify-center w-full bg-green-600 font-bold text-gray-100 rounded-lg py-3">
          Ir para checkout
        </button>
      </div>
    </div>
  )
}
