import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md">
      <hr className="my-8 border-gray-800" />
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Follow Me</h2>
            <p className="text-gray-400">
              Hello Friends do U went to stay connected with me then U can
              Follow me on this Social media Platforms.
            </p>
            <div className="flex mt-4">
              <a
                href="#"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="#"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
    
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Address: India , Odisha/Moyurbhanj , 757040
            </p>
            <p className="text-gray-400 mb-2">Email: contact@matrixcoder.is-a.dev</p>
            <p className="text-gray-400">Phone: +91 81180 50711</p>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Matrix Coder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;