import React from 'react';
import Home from './Home'; // Your existing desktop Home page
import HomeMobile from './HomeMobile';

const HomeResponsive: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <HomeMobile /> : <Home />;
};

export default HomeResponsive;
