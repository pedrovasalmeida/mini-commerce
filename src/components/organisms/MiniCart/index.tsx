import { MiniCartHeader } from '../../molecules/MiniCartHeader'
import { MiniCartProductList } from '../../molecules/MiniCartProductList'
import { MiniCartFooter } from '../../molecules/MiniCartFooter'

export function MiniCart() {
  return (
    <section className="flex flex-col fixed left-0 top-0 w-screen h-screen bg-opacity-70 bg-gray-900 z-10">
      <div className="flex flex-col w-4/5 h-full fixed right-0 top-0 z-20 bg-gray-200 p-6">
        <MiniCartHeader />

        <MiniCartProductList />

        <MiniCartFooter />
      </div>
    </section>
  )
}
