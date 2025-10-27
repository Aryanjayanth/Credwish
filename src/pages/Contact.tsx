import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
  return (
    <>
      {/* Enhanced Hero Section with Darker Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-credwish-900 via-credwish-800 to-credwish-950 py-20 sm:py-28 md:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full mix-blend-overlay animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full mix-blend-overlay animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <motion.span 
              className="inline-flex items-center px-6 py-2 mb-6 text-sm font-semibold tracking-widest text-credwish-200 uppercase rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex w-2 h-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-credwish-300/80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-credwish-300"></span>
              </span>
              CONTACT US
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-playfair leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              We're Here to <span className="text-credwish-300">Help</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-credwish-100 max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in touch with our loan experts for personalized financial solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const formSection = document.getElementById('contact-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    // Add a slight delay to ensure the scroll has completed before focusing
                    setTimeout(() => {
                      const nameInput = formSection.querySelector('input[name="name"]') as HTMLInputElement;
                      if (nameInput) nameInput.focus();
                    }, 800);
                  }
                }}
                className="px-8 py-4 bg-white text-credwish-700 hover:bg-gray-100 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-credwish-700"
              >
                Send a Message
              </button>
              <a 
                href="tel:+917569250960" 
                className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 hover:border-white/40"
              >
                <Phone className="h-5 w-5" />
                +91 – 75692 50960
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-credwish-900/50 to-transparent"></div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form-section" className="py-16 bg-white scroll-mt-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h2>
            <p className="text-gray-600">We'll respond to your inquiry as soon as possible</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-credwish-50 rounded-xl p-6 sm:p-8 border border-credwish-100">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-credwish-100 text-credwish-700 mr-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Send a Message</h3>
              </div>
              <ContactForm />
            </div>
            
            {/* Working Hours */}
            <div className="bg-credwish-50 rounded-xl p-6 border border-credwish-100 self-center w-full">
              <div className="flex items-center mb-4">
                <div className="p-2.5 rounded-lg bg-credwish-100 text-credwish-700 mr-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 font-medium">Our Customer Support Hours</p>
              
              <div className="space-y-3 text-base mb-5">
                <div className="flex justify-between">
                  <span className="text-gray-800 font-medium">Weekdays</span>
                  <span className="text-gray-700 ml-6">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-medium">Saturday</span>
                  <span className="text-gray-700 ml-6">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-medium">Sunday</span>
                  <span className="text-credwish-600 ml-6 font-semibold">Office Closed</span>
                </div>
              </div>
              
              <div className="bg-white/90 p-4 rounded-lg border border-credwish-100">
                <p className="text-sm text-gray-800 leading-normal">
                  <span className="font-semibold">After-Hours Support:</span> Messages received outside business hours will be addressed on the next working day. For urgent matters, please call our 24/7 helpline at <span className="font-semibold text-credwish-700">1800-123-4567</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-12 text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-navy">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Find answers to common questions about our loan process
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ContactFAQ />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-br from-credwish-700 via-credwish-800 to-credwish-900 py-20 md:py-28 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full mix-blend-overlay animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full mix-blend-overlay animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative px-4 mx-auto sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              className="inline-flex items-center px-6 py-2 mb-6 text-sm font-semibold tracking-widest text-white uppercase rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex w-2 h-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              GET STARTED TODAY
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
              Ready to take the <span className="text-credwish-300">next step</span>?
            </h2>
            
            <p className="text-xl text-credwish-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Apply online today and get a decision in minutes. Our team is here to guide you through the entire process.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  to="/application" 
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-credwish-700 hover:bg-gray-100 px-10 py-7 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Apply for a Loan
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a href="tel:+917569250960" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-credwish-300 bg-credwish-700/60 text-credwish-50 hover:bg-credwish-600/80 px-10 py-7 text-base font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-credwish-300/20"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
              </motion.div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-credwish-200">
              <CheckCircle className="h-5 w-5 text-credish-300" />
              <span>No hidden fees</span>
              <span className="h-1 w-1 rounded-full bg-credwish-400"></span>
              <span>Fast approval</span>
              <span className="h-1 w-1 rounded-full bg-credwish-400"></span>
              <span>24/7 support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
