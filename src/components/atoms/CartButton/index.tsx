import { CartIcon } from '../../atoms/Icons'

interface CartButtonProps {
  openMiniCart: () => void
}

export function CartButton({ openMiniCart }: CartButtonProps) {
  return (
    <button className="ml-4 px-2" onClick={openMiniCart}>
      <CartIcon />
    </button>
  )
}
