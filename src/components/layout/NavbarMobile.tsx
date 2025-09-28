import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/loans', label: 'Loans' },
    { path: '/eligibility', label: 'Check Eligibility' },
    { path: '/application', label: 'Apply Now' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                CredWish
              </span>
            </Link>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3">
              {/* Apply Now Button - Mobile */}
              <Link
                to="/application"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Apply
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-lg font-bold text-gray-900">CredWish</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-4 py-6">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Contact Info in Mobile Menu */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">info@credwish.com</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <Link
                  to="/application"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Apply for Loan
                </Link>
                <Link
                  to="/eligibility"
                  className="block w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-medium text-center hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Spacer */}
      <div className="h-14" />
    </>
  );
};

export default NavbarMobile;
