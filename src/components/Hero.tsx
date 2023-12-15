import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center h-screen items-center mx-3">
      <h1 className="text-3xl sm:text-6xl lg:text-9xl font-bold mb-4">
        Hi, my name is
      </h1>
      <h2 className="name text-4xl sm:text-6xl lg:text-9xl font-bold mb-5">
        Goutam.
      </h2>
      <h2 className="iam text-lg sm:text-3xl lg:text-6xl font-semibold">
        I am a{" "}
        <span
          style={{
            color: "red",
            fontWeight: "bold"
          }}
        >
          <Typewriter
            words={["Developer", "Coder", "YouTuber", "Student"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <p className="text-white sm:text-lg lg:text-2xl mt-8">
        Hello friends I’m a new Developer from India. Please support me
        specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I’m focused on
        NextJS Framework.
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/MatrixCoder0101">
          <img
            src="./github.png"
            alt="GitHub"
            className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
