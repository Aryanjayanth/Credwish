import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, CheckCircle, Clock, DollarSign, Shield } from 'lucide-react';

const LoansMobile: React.FC = () => {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

  const loanTypes = [
    {
      id: 'personal',
      title: 'Personal Loan',
      description: 'For your personal financial needs',
      amount: '₹50,000 - ₹25,00,000',
      tenure: '12 - 60 months',
      rate: '10.99% onwards',
      features: ['No collateral required', 'Quick approval', 'Flexible repayment'],
      icon: '💰'
    },
    {
      id: 'business',
      title: 'Business Loan',
      description: 'Expand or start your business',
      amount: '₹1,00,000 - ₹1,00,00,000',
      tenure: '12 - 84 months',
      rate: '11.99% onwards',
      features: ['Business growth funding', 'Working capital', 'Equipment purchase'],
      icon: '🏢'
    },
    {
      id: 'home',
      title: 'Home Loan',
      description: 'Finance your dream home',
      amount: '₹10,00,000 - ₹5,00,00,000',
      tenure: '60 - 360 months',
      rate: '8.50% onwards',
      features: ['Property purchase', 'Construction', 'Home improvement'],
      icon: '🏠'
    },
    {
      id: 'education',
      title: 'Education Loan',
      description: 'Invest in your future education',
      amount: '₹1,00,000 - ₹50,00,000',
      tenure: '60 - 180 months',
      rate: '9.50% onwards',
      features: ['Course fees', 'Living expenses', 'Study abroad'],
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            Loan Options
          </h1>
          <p className="text-gray-600 text-center text-sm mt-1">
            Choose the perfect loan for your needs
          </p>
        </div>
      </div>

      {/* Loan Types Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {loanTypes.map((loan) => (
            <div
              key={loan.id}
              className={`bg-white rounded-lg p-4 shadow-sm border-2 transition-all duration-200 cursor-pointer ${
                selectedLoan === loan.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedLoan(selectedLoan === loan.id ? null : loan.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{loan.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {loan.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3">
                    {loan.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    <div>
                      <span className="text-gray-500">Amount:</span>
                      <div className="font-medium text-gray-900">{loan.amount}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Rate:</span>
                      <div className="font-medium text-gray-900">{loan.rate}</div>
                    </div>
                  </div>

                  {/* Expandable Features */}
                  {selectedLoan === loan.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-900 text-xs mb-2">Features:</h4>
                        <div className="space-y-1">
                          {loan.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-gray-600 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/application?product=${loan.id}`}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-3 rounded-lg font-medium text-xs text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      >
                        Apply Now
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loan Calculator CTA - Mobile */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white text-center">
          <Calculator className="w-8 h-8 mx-auto mb-3" />
          <h3 className="font-semibold text-sm mb-2">Loan Calculator</h3>
          <p className="text-blue-100 text-xs mb-4">
            Calculate your EMI and plan your loan repayment
          </p>
          <Link
            to="/calculator"
            className="bg-white text-blue-600 py-2 px-4 rounded-lg font-medium text-xs hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Calculate EMI
          </Link>
        </div>
      </div>

      {/* Benefits Section - Mobile */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-bold text-center text-gray-900 mb-4">
          Why Choose Our Loans?
        </h2>

        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-xs">Quick Approval</h4>
                <p className="text-gray-600 text-xs">Get approved in minutes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-xs">Secure Process</h4>
                <p className="text-gray-600 text-xs">100% secure application</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-xs">Best Rates</h4>
                <p className="text-gray-600 text-xs">Competitive interest rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="container mx-auto px-4 py-6 pb-8">
        <div className="bg-gray-900 rounded-lg p-4 text-white text-center">
          <h3 className="font-semibold text-sm mb-2">Need Help Choosing?</h3>
          <p className="text-gray-300 text-xs mb-4">
            Our loan experts are here to help you find the perfect loan
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium text-xs hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoansMobile;
