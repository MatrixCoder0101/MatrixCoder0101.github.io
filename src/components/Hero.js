import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-center h-screen items-center mx-3">
            <h1 className="text-lime-400 text-3xl sm:text-6xl lg:text-9xl font-bold mb-4">
                Hi, my name is
            </h1>
            <h2 className="text-indigo-600 text-4xl sm:text-6xl lg:text-9xl font-bold mb-5">
                Goutam.
            </h2>
            <h2 className="iam text-lg sm:text-3xl lg:text-6xl font-semibold">
                and I am a{" "}
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
            <div className="flex mt-4">
                <a
                    href="https://github.com/MatrixCoder0101"
                    className="mr-4 text-gray-400 hover:text-green-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                    href="#"
                    className="mr-4 text-blue-600 hover:text-green-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                    href="#"
                    className="mr-4 text-blue-500 hover:text-green-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                    href="https://instagram.com/matrixcoder.dev"
                    className="text-pink-600 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
            </div>
        </div>
    );
};

export default Hero;
