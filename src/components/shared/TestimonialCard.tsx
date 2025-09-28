
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ 
  name, 
  location, 
  testimonial, 
  rating, 
  image 
}: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-to-br from-credwish-700 to-credwish-800 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white/20 flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/10 text-white font-semibold text-lg">
              {name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-white text-sm md:text-base">{name}</h4>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 md:h-4 md:w-4 ${
                    i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-white/70 text-xs">{location}</span>
          </div>
        </div>
      </div>
      
      <div className="relative mt-2 mb-4 flex-grow flex flex-col h-full">
        <div className="relative pl-6 flex-grow flex flex-col h-full">
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-2 flex-grow">
            {testimonial}
          </p>
          <div className="mt-4">
            <Quote className="text-white/20 h-8 w-8 opacity-40 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
