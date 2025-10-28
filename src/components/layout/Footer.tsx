
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-white">
              Cred<span className="text-credwish-400">wish</span>
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Credwish, founded in 2022, is a trusted financial advisory platform based in Andhra Pradesh and Telangana. It connects creditworthy borrowers with reliable banks and NBFCs, offering tailored fundraising solutions for individuals and businesses across India at competitive interest rates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/loans" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>Loans</Link>
              </li>
              <li>
                <Link to="/special-products" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>Special Products</Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>Eligibility</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-playfair">Loan Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="/loans#personal" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/loans#personal';
                  window.scrollTo(0, 0);
                }}>Personal Loans</a>
              </li>
              <li>
                <a href="/loans#business" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/loans#business';
                  window.scrollTo(0, 0);
                }}>Business Loans</a>
              </li>
              <li>
                <a href="/loans#home" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/loans#home';
                  window.scrollTo(0, 0);
                }}>Home Loans</a>
              </li>
              <li>
                <a href="/loans#education" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/loans#education';
                  window.scrollTo(0, 0);
                }}>Education Loans</a>
              </li>
              <li>
                <a href="/loans#gold" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/loans#gold';
                  window.scrollTo(0, 0);
                }}>Gold Loans</a>
              </li>
              <li>
                <a href="/loans#car" className="text-gray-300 hover:text-white transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/loans#car';
                  window.scrollTo(0, 0);
                }}>Car Loans</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-playfair">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-credwish-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm text-left whitespace-normal">Danavaipeta, Opp Street to HDFC Bank, Rajahmundry - 533101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-credwish-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 – 7569250960</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-credwish-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">chaitanya@credwish.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CREDWISH MARKETING AND CONSULTING PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                Terms of Service
              </Link>
              <Link to="/cookies-policy" className="text-gray-400 text-sm hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
