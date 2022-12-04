import { CartIcon } from '../../atoms/Icons'
import { MiniCartCountBadge } from '../MiniCartCountBadge'

interface CartButtonProps {
  openMiniCart: () => void
}

export function CartButton({ openMiniCart }: CartButtonProps) {
  return (
    <button className="ml-4 px-2 relative" onClick={openMiniCart}>
      <MiniCartCountBadge />
      <CartIcon />
    </button>
  )
}
