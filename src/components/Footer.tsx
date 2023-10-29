import React from 'react';

export default function Footer() {
  return (
      <footer className="text-center mt-4">
        <p className="text-gray-600 text-center">
          © {new Date().getFullYear()} Goutam Kumar
        </p>
      </footer>
  );
};