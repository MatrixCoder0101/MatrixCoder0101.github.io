"use client";
import Image from "next/image";
//import React, { useState, useEffect } from "react";
import { Hero, Navbar, Social, Footer, Globe, Projects } from "../components"

export default function Home() {
  return (
    <div>
      <Navbar />
      <br />   <br />   <br />   <br />
      <Hero />
      <Projects />
      <Globe />
      <Social />
      <Footer />
    </div>
  );
}