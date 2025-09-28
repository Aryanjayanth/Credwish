import React from 'react';
import Loans from './Loans'; // Your existing desktop Loans page
import LoansMobile from './LoansMobile';

const LoansResponsive: React.FC = () => {
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

  return isMobile ? <LoansMobile /> : <Loans />;
};

export default LoansResponsive;
