import { MiniCartProductCard } from '../MiniCartProductCard'

export function MiniCartProductList() {
  return (
    <div className="flex flex-col mt-8 flex-grow overflow-y-auto gap-5">
      <MiniCartProductCard />
      <MiniCartProductCard />
      <MiniCartProductCard />
      <MiniCartProductCard />
      <MiniCartProductCard />
      <MiniCartProductCard />
      <MiniCartProductCard />
    </div>
  )
}
