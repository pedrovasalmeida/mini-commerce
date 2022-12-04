import { CartIcon } from '../../atoms/Icons'
import { MiniCartCountBadge } from '../MiniCartCountBadge'

interface CartButtonProps {
  openMiniCart: () => void
}

export function CartButton({ openMiniCart }: CartButtonProps) {
  return (
    <button className="px-4 relative" onClick={openMiniCart}>
      <MiniCartCountBadge />
      <CartIcon />
    </button>
  )
}
