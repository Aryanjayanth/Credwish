import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-credwish-700 text-white py-8 -mt-12">
        <div className="container mx-auto px-4 text-center pt-16">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 lg:p-10">
          <div className="prose max-w-none text-left">
            {children}
            
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-credwish-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Danavaipeta, Opp Street to HDFC Bank,<br />
                    Rajahmundry - 533101
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-credwish-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">+91 – 7569250960</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-credwish-600 mr-3 flex-shrink-0" />
                  <a href="mailto:chaitanya@credwish.in" className="text-gray-700 hover:text-credwish-600 transition-colors">
                    chaitanya@credwish.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-left">
            <Button asChild variant="outline" className="px-6 py-5 text-base">
              <Link to="/" className="flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
