"use client";
import Image from "next/image";
import Script from "next/script";
import { Hero, Navbar, Social, Footer, Globe, Projects, Tawk } from "../components"

export default function Home() {
  return (
    <>
    <div>
      <Script defer data-domain="matrixcoder.is-a.dev" src="https://analytics.is-a.dev/js/script.js" strategy="lazyOnload" /></Script>
      <Tawk />
      <Navbar />
      <br />   <br />   <br />   <br />
      <Hero />
      <Projects />
      <Globe />
      <Social />
      <Footer />
    </div>
    </>
  );
}