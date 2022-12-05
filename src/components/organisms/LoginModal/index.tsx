import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ForgotPasswordContent } from '../../molecules/ForgotPasswordContent'
import { LoginContent } from '../../molecules/LoginContent'
import { RegisterContent } from '../../molecules/RegisterContent'

interface LoginModalProps {
  isOpen: boolean
  changeVisibility: (visibility: boolean) => void
}

type LoginSteps = 'login' | 'register' | 'forgot-password'

export function LoginModal({ isOpen, changeVisibility }: LoginModalProps) {
  const [loginStep, setLoginStep] = useState<LoginSteps | null>('login')

  const navigateTo = (step: LoginSteps | 'close') => {
    if (step === 'close') {
      changeVisibility(false)
      setLoginStep('login')
    } else {
      setLoginStep(step)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`bg-gray-900 fixed top-0 left-0 w-screen h-screen z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ ease: 'linear', duration: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => navigateTo('close')}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <>
            {loginStep === 'login' && <LoginContent navigateTo={navigateTo} />}
            {loginStep === 'register' && (
              <RegisterContent navigateTo={navigateTo} />
            )}
            {loginStep === 'forgot-password' && (
              <ForgotPasswordContent navigateTo={navigateTo} />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  )
}
