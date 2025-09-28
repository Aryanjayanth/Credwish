
import React, { useRef, useEffect } from 'react';

const PartnerBanner = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const partners = [
    { 
      name: "Axis Bank", 
      logo: "/assets/partners/AXIS Bank.jpg",
      scale: 2
    },
    { 
      name: "Bajaj Finance", 
      logo: "/assets/partners/Bajaj-Finance-logo-1.png",
      scale: 1.3
    },
    { 
      name: "HDFC Bank", 
      logo: "/assets/partners/HDFC Bank.png",
      scale: 2.8
    },
    { 
      name: "ICICI Bank", 
      logo: "/assets/partners/icici-bank-logo-png_seeklogo-69551.png",
      scale: 2.8
    },
    { 
      name: "IDFC First Bank", 
      logo: "/assets/partners/IDFC FIRST BANK.jpg",
      scale: 2
    },
    { 
      name: "Kotak Mahindra Bank", 
      logo: "/assets/partners/kotak-bank-new.jpg",
      scale: 1
    },
    { 
      name: "Punjab National Bank", 
      logo: "/assets/partners/Panjab National Bank.webp",
      scale: 2
    },
    { 
      name: "Union Bank", 
      logo: "/assets/partners/Union Bank.webp",
      scale: 1.4
    },
  ];

  // Infinite scroll animation effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += 0.5;
      
      // Reset scroll position when we've scrolled the whole width
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(scroll);
    
    // Pause on hover or touch
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', pause);
    scrollContainer.addEventListener('mouseleave', resume);
    scrollContainer.addEventListener('touchstart', pause);
    scrollContainer.addEventListener('touchend', resume);
    
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', pause);
      scrollContainer.removeEventListener('mouseleave', resume);
      scrollContainer.removeEventListener('touchstart', pause);
      scrollContainer.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="py-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 text-lg font-medium">Trusted by leading financial institutions</p>
        
        <div className="relative">
          {/* Shadow overlay on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center gap-16 md:gap-20 px-8">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center h-24 px-4 flex-shrink-0 transition-all duration-300 hover:opacity-90"
                  style={{
                    minWidth: '180px',
                    transform: `scale(${partner.scale * 0.7})`,
                    transformOrigin: 'center',
                  }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-full w-auto object-contain"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      opacity: 0.9,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '0.9';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBanner;
