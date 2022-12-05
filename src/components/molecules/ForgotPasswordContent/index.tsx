import { motion } from 'framer-motion'

type LoginSteps = 'login' | 'register' | 'forgot-password'

interface ForgotPasswordContentProps {
  navigateTo: (step: LoginSteps | 'close') => void
}

export function ForgotPasswordContent({
  navigateTo,
}: ForgotPasswordContentProps) {
  return (
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
        <p className="font-bold m-0 text-start text-xs text-zinc-500">E-mail</p>
        <input
          disabled
          className="w-full rounded-lg p-2 px-3 mt-2 outline-zinc-900 text-xs text-zinc-900 bg-white"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => navigateTo('login')}
          className="text-zinc-900 text-xs underline cursor-pointer"
        >
          Voltar
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full border-t border-t-zinc-300 pt-4">
        <button disabled className="w-full bg-zinc-400 rounded-lg py-2">
          <p className="font-bold text-zinc-100">Entrar</p>
        </button>
        <button
          onClick={() => navigateTo('close')}
          className="text-zinc-900 text-xs underline cursor-pointer mt-2"
        >
          Fechar
        </button>
      </div>
    </motion.div>
  )
}
