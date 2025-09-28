import React from 'react';
import Navbar from './Navbar'; // Your existing desktop navbar
import NavbarMobile from './NavbarMobile';

const NavbarResponsive: React.FC = () => {
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

  return isMobile ? <NavbarMobile /> : <Navbar />;
};

export default NavbarResponsive;
