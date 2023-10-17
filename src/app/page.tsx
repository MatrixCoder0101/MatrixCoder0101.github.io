"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto mb-7 px-4 py-8 lg:py-12">
                <br /> <br /> <br />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                    Hi, my name is
                </h1>
                <h2 className="name text-4xl sm:text-4xl lg:text-6xl font-bold mb-4">
                    Goutam.
                </h2>
                <h2 className="iam text-lg sm:text-xl lg:text-2xl font-semibold">
                    I am a{" "}
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold"
                        }}
                    >
                        <Typewriter
                            words={[
                                "Developer",
                                "Coder",
                                "YouTuber",
                                "Student"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mt-4">
                    Hello friends I’m a new Developer from India. Please support
                    me specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I’m focused on
                    NextJS Framework.
                </p>
                <br />
                {/* Projects Section */}
                <section className="mt-8 sm:mt-12 lg:mt-16">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Project Card */}
                        <div className="glassmorphism bg-white rounded-lg shadow-md p-4 sm:p-6 z-0">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                                GSS-BETA
                            </h3>
                            <p className="text-gray-600 mb-2 sm:mb-4 lg:mb-6">
                                A Simple WhatsApp Bot made with Baileys Node.js
                                Library
                            </p>
                            <a
                                href="https://github.com/MatrixCoder0101/GSS-Botwa"
                                className="text-blue-500 hover:underline"
                            >
                                View project
                            </a>
                        </div>
                        <div className="glassmorphism bg-white rounded-lg shadow-md p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                                WHATSAPP-GPT
                            </h3>
                            <p className="text-gray-600 mb-2 sm:mb-4 lg:mb-6">
                                Integrate ChatGPT with WhatsApp using this Bot
                            </p>
                            <a
                                href="https://github.com/MatrixCoder0101/WHATSAPP-GPT"
                                className="text-blue-500 hover:underline"
                            >
                                View project
                            </a>
                        </div>
                    </div>
                </section>
                <section className="p-8 text-white sm:p-12 md:p-16 lg:p-20 xl:p-24">

                </section>
                <section>
                    <br />
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        Contact
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-4">
                        Feel free to reach out to me via email or on social
                        media.
                    </p>
                    <div className="flex space-x-4">
                        {/* Add your social media icons and links here */}
                        <a href="#linkedin">
                            <img
                                src="./vercel.svg"
                                alt="LinkedIn"
                                className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10"
                            />
                        </a>
                        <a href="https://github.com/MatrixCoder0101">
                            <img
                                src="./next.svg"
                                alt="GitHub"
                                className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10"
                            />
                        </a>
                    </div>
                </section>
            </main>
            <Contact />
            <Footer />
        </div>
    );
}
