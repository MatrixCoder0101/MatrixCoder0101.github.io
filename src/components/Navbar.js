import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
       />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
        className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-2 fixed top-0 left-0 w-64 h-full bg-white z-50">
      <div className="flex items-center justify-between h-10 border-b border-blue-600">
      <b className="text-xl text-white">MatrixBar</b>
      <img
          onClick={() => setIsOpen(false)}
          className="text-2xl bg-red-500 top-2 right-2 font-semibold px-2 py-2 rounded"
          src="./xmark.svg"
          alt="x"
        />
                  
      </div>
      <div className="flex flex-col p-4">
      <a
        href="#"
        className=" text-teal-500 text-xl font-semibold">
                    HOME
      </a>
      <a
        href="#"
        className="text-green-300 text-xl font-semibold">
                    ABOUT
      </a>
       <a
         href="#"
         className="text-green-400 text-xl font-semibold">
                    CONTACT
      </a>
      </div>
      </motion.div>
      <header className="glassmorphism-header backdrop-filter backdrop-blur-lg bg-white h10 bg-opacity-10 rounded-lg p-2 text-white fixed w-full top-0 z-40 flex  items-center justify-between">
      <b className="text-xl font-bold">Matrix Coder</b>{" "}
      <div>
          {!isOpen && (
       <img
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
            src="./menu.svg"
            alt="="
          />
         )}
     </div>
   </header>
  </>
);
}
