import { ArrowBackIcon } from '../../atoms/Icons'

export function MiniCartHeader() {
  return (
    <div className="flex items-center justify-between">
      <button>
        <ArrowBackIcon />
      </button>
      <h2 className="font-bold text-lg">Meu carrinho</h2>
      <button className="text-red-700">Limpar</button>
    </div>
  )
}
