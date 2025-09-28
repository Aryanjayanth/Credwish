
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false, 
  className = '' 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-navy">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
