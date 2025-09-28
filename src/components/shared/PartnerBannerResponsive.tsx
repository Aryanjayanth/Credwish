import React from 'react';
import PartnerBanner from './PartnerBanner';
import PartnerBannerMobile from './PartnerBannerMobile';

const PartnerBannerResponsive: React.FC = () => {
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

  return isMobile ? <PartnerBannerMobile /> : <PartnerBanner />;
};

export default PartnerBannerResponsive;
