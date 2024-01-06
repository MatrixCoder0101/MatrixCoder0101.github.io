import '@/styles/globals.css'
import { LoadingScreen, Navbar } from '../components'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#15ff8eda" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
