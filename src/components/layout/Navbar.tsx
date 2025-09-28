
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setIsMenuOpen(false);
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        
        if (history.pushState) {
          history.pushState(null, '', hash);
        }
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Updated navigation without Application tab
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "Special Products", path: "/special-products" },
    { name: "Eligibility", path: "/eligibility" }
  ];

  return (
    <nav className={`fixed w-full h-20 md:h-24 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''} flex items-center`}>
      <div className="container px-4 md:px-6 flex justify-between items-center">
        {/* Logo - Left */}
        <Link to="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/Logo.png" 
            alt="Credwish Logo" 
            className="h-24 md:h-28 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-4">
          <div className="flex space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`px-2 py-1 text-gray-700 hover:text-credwish-600 font-medium transition-colors ${
                  location.pathname === link.path ? 'text-credwish-600 border-b-2 border-credwish-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Button - Right */}
        <div className="hidden lg:flex items-center">
          <Button 
            asChild 
            className="bg-gradient-to-r from-credwish-500 to-credwish-600 hover:from-credwish-600 hover:to-credwish-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <Button 
            asChild 
            className="lg:hidden bg-credwish-600 hover:bg-credwish-700 text-white px-4 py-1.5 mr-2 text-sm"
          >
            <Link to="/contact">Contact</Link>
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-credwish-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-100">
          <div className="container py-4 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium rounded-md transition-colors ${
                  location.pathname === link.path ? 'bg-credwish-50 text-credwish-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-gradient-to-r from-credwish-500 to-credwish-600 hover:from-credwish-600 hover:to-credwish-700 text-white w-full py-3 mt-2 rounded-md"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
