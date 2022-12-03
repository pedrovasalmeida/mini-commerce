interface ProductModalImageProps {
  url: string | null
}

export function ProductModalImage({ url }: ProductModalImageProps) {
  return (
    <>
      <div className="w-full h-auto">
        <img
          src={url ?? 'https://fakeimg.pl/300x300'}
          alt="Foto do produto"
          className="object-cover rounded-lg rounded-b-2xl w-full h-80 md:w-96 md:h-full"
        />
      </div>

      {/* <div className="flex px-4 mt-4 justify-start gap-4">
        <button className="flex w-10 h-10 border border-gray-400 rounded-lg">
          <img
            src="https://fakeimg.pl/300x300"
            alt="thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>
        <button className="flex w-10 h-10 border border-gray-400 rounded-lg">
          <img
            src="https://fakeimg.pl/300x300"
            alt="thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>
        <button className="flex w-10 h-10 border border-gray-400 rounded-lg">
          <img
            src="https://fakeimg.pl/300x300"
            alt="thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>
      </div> */}
    </>
  )
}
