import { ArrowBackIcon } from '../../atoms/Icons'

interface MiniCartHeaderProps {
  closeMiniCart: () => void
}

export function MiniCartHeader({ closeMiniCart }: MiniCartHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <button onClick={closeMiniCart}>
        <ArrowBackIcon />
      </button>
      <h2 className="font-bold text-lg">Meu carrinho</h2>
      <button className="text-red-700">Limpar</button>
    </div>
  )
}
