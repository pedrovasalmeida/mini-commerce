import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { LoginModal } from '../../organisms/LoginModal'

export function Login() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsLoginModalOpen((curr) => !curr)}
        className="px-5 w-auto h-auto flex"
      >
        <AiOutlineUser size={24} />
      </button>
      <LoginModal
        isOpen={isLoginModalOpen}
        changeVisibility={setIsLoginModalOpen}
      />
    </div>
  )
}
