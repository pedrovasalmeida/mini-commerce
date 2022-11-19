export function ProductModalImage() {
  return (
    <>
      <div className="w-full h-auto">
        <img
          src="https://fakeimg.pl/500x500"
          alt="Foto do produto"
          className="object-contain rounded-lg rounded-b-2xl"
        />
      </div>

      <div className="flex px-4 mt-4 justify-start gap-4">
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
      </div>
    </>
  )
}
