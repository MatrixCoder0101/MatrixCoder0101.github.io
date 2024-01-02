import React from 'react';
import Image from "next/image";

const Social = () => {
  return (
    <div className="container mx-auto flex justify-center space-x-4">
      <a href="https://github.com/MatrixCoder0101">
        <img
          src="./github.png"
          alt="GitHub"
          className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10"
        />
      </a>
    </div>
  );
};

export default Social;
