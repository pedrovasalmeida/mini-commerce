import Image from 'next/image'
import { BuyIcon } from '../../atoms/Icons'

export function GalleryCard() {
  return (
    <div className="flex flex-col shadow-md bg-gray-50 rounded-lg w-[183px]">
      <Image
        src="https://thumbs.dreamstime.com/b/flesh-kiwi-cut-ripe-orange-15553893.jpg"
        alt="Product Image"
        width={150}
        height={120}
        loading="lazy"
        className="rounded-lg"
      />
      <div className="px-4">
        <h3 className="text-sm pt-3">Cotton shirt regular fit</h3>
        <div className="flex justify-between mt-3 pb-5">
          <p className="font-bold">R$ 100,00</p>
          <button>
            <BuyIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
