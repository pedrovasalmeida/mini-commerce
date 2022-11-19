import { CartIcon } from '../../atoms/Icons'

interface CartButtonProps {
  toggleMiniCartVisibility: () => void
}

export function CartButton({ toggleMiniCartVisibility }: CartButtonProps) {
  return (
    <button className="ml-4 px-2" onClick={toggleMiniCartVisibility}>
      <CartIcon />
    </button>
  )
}
