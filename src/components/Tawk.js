import React, { useEffect } from 'react';

const Tawk = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://embed.tawk.to/653f4556a84dd54dc486943c/default';
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');

    document.head.appendChild(s);

    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return null; 
};

export default Tawk;
