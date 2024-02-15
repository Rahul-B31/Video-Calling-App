import '@/styles/globals.css'
import { SocketProvider } from '@/Context/socket'
export default function App({ Component, pageProps }) {

  return (
  <SocketProvider>
      <Component {...pageProps}/>
  </SocketProvider>
  );

}
