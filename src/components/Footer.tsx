import React from 'react';

export default function Footer() {
  return (
      <footer className="text-center mt-16">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Goutam Kumar
        </p>
      </footer>
  );
};