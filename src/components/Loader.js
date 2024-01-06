//LoadingScreen
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 100 ? prev + 10 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black z-50 ${
        loadingProgress === 100 ? 'hidden' : ''
      }`}
    >
      <div className="w-1/2 mb-4">
        <div className="bg-gray-200 h-4 relative rounded-full">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>
      <p className="text-gray-500 text-sm">{`${loadingProgress}%`}</p>
    </div>
  );
};

export default LoadingScreen;
