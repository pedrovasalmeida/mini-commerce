import { Suspense, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCartFromStorage } from '../../../store/cart'
import { Login } from '../../molecules/LoginButton'
import { SearchBar } from '../../molecules/SearchBar'
import { MiniCart } from '../MiniCart'

interface HeaderProps {
  searchTermInProducts: (term: string) => void
}

export function Header({ searchTermInProducts }: HeaderProps) {
  const dispatch = useDispatch()

  const getCart = useCallback(() => {
    dispatch(getCartFromStorage())
  }, [dispatch])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        getCart()
      }, 500)
    }
  }, [getCart])

  return (
    <Suspense>
      <div className="flex items-center justify-center px-2 pt-2 lg:py-2 max-w-5xl mx-auto">
        <div className="flex w-full">
          <SearchBar searchTermInProducts={searchTermInProducts} />
        </div>
        <div className="flex ml-auto lg:pr-6">
          <Login />
          <MiniCart />
        </div>
      </div>
    </Suspense>
  )
}
