import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from '../store'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  )
}
