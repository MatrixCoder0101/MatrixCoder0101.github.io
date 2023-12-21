"use client";
import Image from "next/image";
import { Inter } from 'next/font/google'

import { Hero, Navbar, Social, Footer, Globe, Projects, Tawk, MatrixRainingCode } from "../components"

export default function Home() {
  return (
    <div className="min-h-screen">
      <MatrixRainingCode />
      <div className="flex flex-col">
      <Navbar />
      <Tawk />
      <br />   <br />   <br />   <br />
      <Hero />
      <Projects />
      <Globe />
      <Social />
      <Footer />
    </div>
    </div>
  );
}