import { ArrowBackIcon, TrashIcon } from '../../atoms/Icons'

export function MiniCart() {
  return (
    <section className="flex flex-col fixed left-0 top-0 w-screen h-screen bg-opacity-70 bg-gray-900 z-10">
      <div className="flex flex-col w-4/5 h-full fixed right-0 top-0 z-20 bg-gray-200 p-6">
        <div className="flex items-center justify-between">
          <button>
            <ArrowBackIcon />
          </button>
          <h2 className="font-bold text-lg">Meu carrinho</h2>
          <button className="text-red-700">Limpar</button>
        </div>

        <div className="flex flex-col mt-8 flex-grow overflow-y-auto">
          <div className="flex relative bg-gray-100 rounded-lg shadow p-4">
            <div className="absolute right-1 top-3 rounded-full flex items-center justify-center p-1">
              <button className="text-red-700">
                <TrashIcon />
              </button>
            </div>

            <div className="min-w-20 w-20 h-20">
              <img
                className="w-full h-full object-contain rounded-lg"
                src="https://fakeimg.pl/300x300"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col ml-2 flex-grow">
              <p className="text-sm font-bold line-clamp-1 overflow-hidden w-36">
                Name of product with big words and letters
              </p>
              <div className="flex gap-1 items-center mt-2">
                <p className="text-xs text-gray-400 text-center">Size: </p>
                <p className="text-sm text-gray-900 text-center">M</p>
              </div>
              <div className="flex mt-auto items-center justify-between">
                <p>R$ 100,00</p>
                <div>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto mt-4">
          <div className="flex w-full items-center justify-between gap-4">
            <input
              className="p-3 w-3/5 rounded-lg text-sm outline-gray-900"
              placeholder="Cupom"
            />
            <button className="w-2/5 bg-green-600 h-auto p-3 rounded-lg font-bold text-gray-100 text-sm">
              Aplicar
            </button>
          </div>

          <div className="flex flex-col w-full mt-8 gap-3">
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

          <div className="flex items-center justify-center w-full mt-5">
            <button className="flex items-center justify-center w-full bg-green-600 font-bold text-gray-100 rounded-lg py-3">
              Ir para checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
