import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PageCTAProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const PageCTA: React.FC<PageCTAProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = ''
}) => {
  return (
    <section className={`relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-credwish-700 via-credwish-600 to-credwish-700 ${className}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-credwish-100 bg-white/20 rounded-full mb-4">
            GET STARTED
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-credwish-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden px-8 py-6 text-base font-semibold bg-white text-credwish-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={primaryButtonLink}>
                <span className="relative z-10">{primaryButtonText}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-credwish-200 to-credwish-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="group relative overflow-hidden px-8 py-6 text-base font-semibold border-2 border-white text-white bg-transparent hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Link to={secondaryButtonLink}>
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-white">{secondaryButtonText}</span>
                  </span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
