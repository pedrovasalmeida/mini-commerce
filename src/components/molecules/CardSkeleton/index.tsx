import { motion } from 'framer-motion'

export function CardSkeleton() {
  return (
    <motion.div className="relative animate-pulse flex flex-col shadow-md bg-zinc-100 rounded-lg text-start w-full xs:w-[46%] sm:w-[30%] md:w-[22%] h-[264px] border border-zinc-300">
      <div className="absolute top-2 right-2 flex gap-2 items-center justify-center bg-gray-300 shadow w-auto px-2 py-1 rounded-lg">
        <div className="w-[55px] h-[24px]" />
      </div>

      <div className="w-full h-[176px] animate-pulse bg-zinc-200" />

      <div className="flex flex-col w-full px-4 mt-3">
        <div className="w-full h-5 bg-gray-300 rounded-lg" />
        <div className="flex justify-between items-center w-full mt-3 mb-5">
          <div className="w-[82px] h-6  bg-gray-300 rounded-lg" />
          <div className="w-6 h-6 bg-gray-300 rounded-lg" />
        </div>
      </div>
    </motion.div>
  )
}
