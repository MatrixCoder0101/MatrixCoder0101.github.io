import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero, MatrixRain, Footer, Globe, Projects, Tawk } from "../components"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen">
      <MatrixRain />
      <Tawk />
      <br />   <br />   <br />   <br />
      <Hero />
      <Projects />
      <Globe />
      <Footer />
    </div>
  );
}
