import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-gray-600">Discover the story behind our journey.</p>
        </div>
        <div className="flex justify-center">
          <img src="/next.svg" alt="About Us" className="rounded-lg max-w-full" />
        </div>
        <div className="mt-8">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam urna a mi vehicula,
            vel fermentum urna aliquet. Duis ac arcu in orci aliquam tincidunt.
          </p>
          <p className="text-gray-700 mt-4">
            Curabitur eu dolor nec arcu dictum ullamcorper vel sit amet sapien.
            Vivamus sit amet condimentum elit. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;