import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-credwish-600" />,
      title: 'Phone Support',
      info: 'Speak with our loan experts directly',
      action: 'Call +91 98765 43210',
      href: 'tel:+919876543210',
      className: 'hover:shadow-lg hover:border-credwish-100',
      iconBg: 'bg-credwish-50',
      buttonVariant: 'outline' as const,
    },
    {
      icon: <Mail className="h-6 w-6 text-credwish-600" />,
      title: 'Email Us',
      info: 'Get a response within 24 hours',
      action: 'Email support@credwish.com',
      href: 'mailto:support@credwish.com',
      className: 'hover:shadow-lg hover:border-credwish-100',
      iconBg: 'bg-credwish-50',
      buttonVariant: 'outline' as const,
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-credwish-600" />,
      title: 'Live Chat',
      info: 'Chat with our support team in real-time',
      action: 'Start Chat',
      href: '#live-chat',
      className: 'md:col-span-2 lg:col-span-1 hover:shadow-lg hover:border-credwish-100',
      iconBg: 'bg-credwish-50',
      buttonVariant: 'default' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {contactMethods.map((method, index) => (
        <div 
          key={index}
          className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 ${method.className}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start mb-4">
              <div className={`p-3 rounded-lg ${method.iconBg} mr-4 flex-shrink-0`}>
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.info}</p>
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-t border-gray-100">
              <Button 
                asChild 
                variant={method.buttonVariant}
                className={`w-full ${
                  method.buttonVariant === 'default' 
                    ? 'bg-credwish-600 hover:bg-credwish-700 text-white' 
                    : 'border-credwish-200 text-credwish-700 hover:bg-credwish-50 hover:text-credwish-800'
                } transition-colors`}
              >
                <Link to={method.href}>
                  {method.action}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Office Location Card - Full Width */}
      <div className="md:col-span-2 lg:col-span-3 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-credwish-100 transition-all duration-300">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="p-3 rounded-lg bg-credwish-50 text-credwish-600 flex-shrink-0">
            <MapPin className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Office</h3>
            <p className="text-gray-600 mb-4">
              123 Financial District, Nariman Point,<br />
              Mumbai, Maharashtra 400021, India
            </p>
            <p className="text-sm text-gray-500 flex flex-wrap items-center gap-x-2">
              <span className="inline-flex items-center">
                <Clock className="h-4 w-4 mr-1.5 flex-shrink-0" />
                Monday - Friday: 9:00 AM - 6:00 PM
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span>Saturday: 10:00 AM - 4:00 PM</span>
            </p>
          </div>
          <div className="w-full lg:w-auto mt-4 lg:mt-0">
            <Button 
              asChild 
              variant="outline"
              className="w-full lg:w-auto border-credwish-200 text-credwish-700 hover:bg-credwish-50 hover:text-credwish-800 transition-colors"
            >
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whitespace-nowrap"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
