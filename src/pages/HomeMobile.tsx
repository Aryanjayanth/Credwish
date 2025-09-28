import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Clock, Users, Award } from 'lucide-react';

const HomeMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Hero Section */}
      <section className="pt-16 pb-8 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            Get Your Dream Loan in
            <span className="text-blue-600 block">Minutes</span>
          </h1>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Fast, secure, and reliable loan solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/application"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Apply Now
            </Link>
            <Link
              to="/eligibility"
              className="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors duration-200"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
            Why Choose CredWish?
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Secure & Safe</h3>
                  <p className="text-gray-600 text-xs">Bank-grade security for your data</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Quick Approval</h3>
                  <p className="text-gray-600 text-xs">Get approved in minutes, not days</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Expert Support</h3>
                  <p className="text-gray-600 text-xs">24/7 customer support available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Best Rates</h3>
                  <p className="text-gray-600 text-xs">Competitive interest rates guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Loan Types */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
            Loan Options
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Personal Loan</h3>
              <p className="text-gray-600 text-xs mb-3">For your personal needs</p>
              <Link
                to="/loans/personal"
                className="text-blue-600 font-medium text-xs flex items-center"
              >
                Learn More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Business Loan</h3>
              <p className="text-gray-600 text-xs mb-3">Grow your business</p>
              <Link
                to="/loans/business"
                className="text-blue-600 font-medium text-xs flex items-center"
              >
                Learn More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Home Loan</h3>
              <p className="text-gray-600 text-xs mb-3">Your dream home</p>
              <Link
                to="/loans/home"
                className="text-blue-600 font-medium text-xs flex items-center"
              >
                Learn More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Education Loan</h3>
              <p className="text-gray-600 text-xs mb-3">Invest in education</p>
              <Link
                to="/loans/education"
                className="text-blue-600 font-medium text-xs flex items-center"
              >
                Learn More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 text-sm">
            Join thousands of satisfied customers who trust CredWish
          </p>
          <Link
            to="/application"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Apply Now - It's Free!
          </Link>
        </div>
      </section>

      {/* Mobile Process Steps */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
            Simple 3-Step Process
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Apply Online</h3>
                <p className="text-gray-600 text-xs">Fill out our simple application form</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Get Approved</h3>
                <p className="text-gray-600 text-xs">Quick approval process in minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Receive Funds</h3>
                <p className="text-gray-600 text-xs">Money transferred to your account</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMobile;
