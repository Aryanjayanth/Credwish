import React, { useEffect, useRef } from 'react';

const PartnerBannerMobile: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: "State Bank of India",
      logo: "/assets/partners/State Bank of India.webp",
      scale: 0.8
    },
    {
      name: "Union Bank",
      logo: "/assets/partners/Union Bank.webp",
      scale: 1.2
    },
  ];

  // Simplified scroll animation for mobile
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      // Slower scroll speed for mobile
      scrollPosition += 0.6;

      // Reset when scrolled full width
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start animation
    animationId = requestAnimationFrame(scroll);

    // Mobile-optimized pause/resume
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('touchstart', pause, { passive: true });
    scrollContainer.addEventListener('touchend', resume, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('touchstart', pause);
      scrollContainer.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="py-3 sm:py-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <p className="text-center text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
          Trusted by leading financial institutions
        </p>

        <div className="relative">
          {/* Mobile-optimized fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Compact mobile layout */}
            <div className="flex items-center gap-4 sm:gap-6 px-2">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-8 sm:h-10 px-2 sm:px-3 flex-shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 sm:h-8 w-auto max-w-[80px] sm:max-w-[100px] object-contain opacity-90"
                    style={{
                      maxHeight: '24px',
                      width: 'auto',
                      transform: `scale(${partner.scale || 1})`,
                      transformOrigin: 'center'
                    }}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default PartnerBannerMobile;
