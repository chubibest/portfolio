import { useState, useLayoutEffect } from 'react';


export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions.width < windowDimensions.height;
}
