
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';

interface EMICalculatorProps {
  compact?: boolean;
}

const EMICalculator = ({ compact = false }: EMICalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = loanTenure * 12;
    
    const emiValue = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalPayment = emiValue * time;
    const interestPayment = totalPayment - principal;
    
    setEmi(Math.round(emiValue));
    setTotalAmount(Math.round(totalPayment));
    setTotalInterest(Math.round(interestPayment));
  };

  // Payment calculation configuration
  const paymentConfig = {
    principal: {
      label: 'Principal Amount',
      theme: {
        light: '#4f46e5',
        dark: '#6366f1',
      },
    },
    interest: {
      label: 'Total Interest',
      theme: {
        light: '#6366f1',
        dark: '#4f46e5',
      },
    },
  };

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 ${compact ? 'p-4' : 'p-6'}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">EMI Calculator</h3>
        {!compact && <p className="text-gray-500 mt-2">Calculate your monthly loan payments</p>}
      </div>
      
      <div className="space-y-6 bg-gray-50 p-5 rounded-lg">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700">Loan Amount</label>
            <div className="font-medium">₹{loanAmount.toLocaleString()}</div>
          </div>
            <div className="relative">
              <Slider
                value={[loanAmount]}
                min={100000}
                max={10000000}
                step={10000}
                onValueChange={(value) => setLoanAmount(value[0])}
              />
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-credwish-500 rounded-full shadow-sm"></div>
            </div>
          <div className="flex text-xs text-gray-500 justify-between">
            <span>₹1L</span>
            <span>₹1Cr</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700">Interest Rate (%)</label>
            <div className="font-medium">{interestRate}%</div>
          </div>
            <div className="relative">
              <Slider
                value={[interestRate]}
                min={5}
                max={20}
                step={0.1}
                onValueChange={(value) => setInterestRate(value[0])}
              />
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-credwish-500 rounded-full shadow-sm"></div>
            </div>
          <div className="flex text-xs text-gray-500 justify-between">
            <span>5%</span>
            <span>20%</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700">Loan Tenure (Years)</label>
            <div className="font-medium">{loanTenure} {loanTenure === 1 ? 'Year' : 'Years'}</div>
          </div>
            <div className="relative">
              <Slider
                value={[loanTenure]}
                min={1}
                max={30}
                step={1}
                onValueChange={(value) => setLoanTenure(value[0])}
              />
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-credwish-500 rounded-full shadow-sm"></div>
            </div>
          <div className="flex text-xs text-gray-500 justify-between">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-gradient-to-br from-credwish-50 to-white p-5 rounded-xl text-center border border-credwish-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-credwish-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-credwish-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p className="text-xs font-medium text-credwish-700 mb-1.5 mt-4">Monthly EMI</p>
          <p className="text-xl font-bold text-credwish-900">₹{emi.toLocaleString()}</p>
          <div className="mt-2 text-xs text-credwish-500">per month</div>
        </div>
        
        <div className="relative bg-gradient-to-br from-credwish-50 to-white p-5 rounded-xl text-center border border-credwish-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-credwish-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-credwish-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <p className="text-xs font-medium text-credwish-700 mb-1.5 mt-4">Total Interest</p>
          <p className="text-xl font-bold text-credwish-900">₹{totalInterest.toLocaleString()}</p>
          <div className="mt-2 text-xs text-credwish-500">over {loanTenure} years</div>
        </div>
        
        <div className="relative bg-gradient-to-br from-credwish-50 to-white p-5 rounded-xl text-center border border-credwish-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-credwish-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-credwish-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <p className="text-xs font-medium text-credwish-700 mb-1.5 mt-4">Total Amount</p>
          <p className="text-xl font-bold text-credwish-900">₹{totalAmount.toLocaleString()}</p>
          <div className="mt-2 text-xs text-credwish-500">principal + interest</div>
        </div>
      </div>
      
    </div>
  );
};

export default EMICalculator;
