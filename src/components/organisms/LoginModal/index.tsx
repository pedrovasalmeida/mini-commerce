import { AnimatePresence, motion } from 'framer-motion'

interface LoginModalProps {
  isOpen: boolean
}

export function LoginModal({ isOpen }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          transition={{ ease: 'backInOut', duration: 1 }}
          exit={{ opacity: 0, y: -100, height: 0 }}
          className={`
              flex flex-col gap-4
              w-screen min-w-[270px] max-w-[288px]
              absolute top-8 -left-44
              p-4
              bg-zinc-100 
              border border-zinc-400 
              rounded-lg
              overflow-hidden
              z-10
          `}
        >
          <p className="m-0 text-sm font-bold border-b border-b-zinc-300 pb-2">
            A conta estará disponível em breve!
          </p>
          <div className="flex flex-col w-full">
            <p className="font-bold m-0 text-start text-xs text-zinc-900">
              Usuário / E-mail
            </p>
            <input className="w-full rounded-lg p-2 px-3 mt-2 outline-zinc-900 text-xs text-zinc-900" />
          </div>
          <div className="flex flex-col w-full">
            <p className="font-bold m-0 text-start text-xs text-zinc-900">
              Senha
            </p>
            <input
              type={'password'}
              className="w-full rounded-lg p-2 px-3 mt-2 outline-zinc-900 text-xs"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-zinc-500 text-xs underline cursor-pointer">
              Cadastre-se
            </p>
            <p className="text-zinc-500 text-xs underline cursor-pointer">
              Esqueci minha senha
            </p>
          </div>
          <div className="flex items-center justify-center w-full border-t border-t-zinc-300 pt-4">
            <button disabled className="w-full bg-zinc-400 rounded-lg py-2">
              <p className="font-bold text-zinc-100">Entrar</p>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
