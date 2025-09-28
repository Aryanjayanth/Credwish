
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface LoanCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  interestRate: string;
  tenure: string;
  link: string;
}

const LoanCard = ({ 
  title, 
  icon, 
  description, 
  interestRate, 
  tenure, 
  link 
}: LoanCardProps) => {
  return (
    <div className="loan-card group hover:border-credwish-500 flex flex-col justify-between">
      <div>
        <div className="text-credwish-300 mb-5 flex justify-center">
          <div className="bg-navy/70 p-3 rounded-full border border-credwish-300/30">
            {icon}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-3">{title}</h3>
        <p className="text-gray-300 mb-6 text-center">{description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="loan-info-item text-center">
            <p className="text-gray-300 text-sm mb-1">Interest Rate</p>
            <p className="font-semibold text-white text-lg">{interestRate}</p>
          </div>
          <div className="loan-info-item text-center">
            <p className="text-gray-300 text-sm mb-1">Max Tenure</p>
            <p className="font-semibold text-white text-lg">{tenure}</p>
          </div>
        </div>
      </div>
      
      <Link 
        to={link} 
        className="w-full flex items-center justify-center btn-primary bg-credwish-500 hover:bg-credwish-600 group-hover:bg-credwish-400"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default LoanCard;
