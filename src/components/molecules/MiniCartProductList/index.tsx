import { MiniCartProductCard } from '../MiniCartProductCard'

import { BsEmojiDizzy } from 'react-icons/bs'
import { CartItems } from '../../../types/Cart'

interface MiniCartProductListProps {
  items: CartItems[]
}

export function MiniCartProductList({ items }: MiniCartProductListProps) {
  return (
    <div className="flex flex-col mt-8 flex-grow overflow-y-auto gap-5">
      {!items ||
        (items?.length <= 0 && (
          <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
            <p className="m-0 text-center">
              Você ainda não adicionou nenhum produto no carrinho.
            </p>
            <BsEmojiDizzy size={28} />
          </div>
        ))}

      {items?.length > 0 &&
        items?.map((item) => (
          <MiniCartProductCard key={item?.id} product={item} />
        ))}
    </div>
  )
}
