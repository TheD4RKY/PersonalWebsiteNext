import '../css/globals.css'
import type { AppProps } from 'next/app'
import '../css/Contact_Desktop.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
