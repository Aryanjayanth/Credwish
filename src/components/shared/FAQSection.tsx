import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string | string[];
  category?: string;
  tags?: string[];
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showCategories?: boolean;
  defaultCategory?: string;
  className?: string;
}

const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  showSearch = true,
  showCategories = false,
  defaultCategory = 'all',
  className = '',
}: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory || 'all');

  // Get unique categories
  const categories = ['all', ...new Set(faqs.flatMap(faq => faq.category || []))];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof faq.answer === 'string' 
        ? faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        : faq.answer.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    
    const matchesCategory = 
      activeCategory === 'all' || 
      !showCategories || 
      (faq.category && faq.category.toLowerCase() === activeCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Categories Only - Search Removed */}
          <div className="space-y-6 mb-12">

            {showCategories && (
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory.toLowerCase() === category.toLowerCase()
                        ? 'bg-credwish-100 text-credwish-700 border-2 border-credwish-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md ${
                    activeIndex === index ? 'ring-2 ring-credwish-200' : ''
                  }`}
                >
                  <button
                    className="flex items-start w-full px-6 py-5 text-left focus:outline-none group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activeIndex === index 
                          ? 'bg-credwish-100 text-credwish-600' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-credwish-50 group-hover:text-credwish-500'
                      }`}>
                        <HelpCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h3>
                      {activeIndex === index && (
                        <div className="mt-3 text-gray-600">
                          {Array.isArray(faq.answer) ? (
                            <ul className="space-y-2">
                              {faq.answer.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-credwish-500 font-bold mr-2 mt-1">•</span>
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="leading-relaxed">{faq.answer}</p>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <ChevronDown 
                        className={`h-6 w-6 text-gray-400 transform transition-transform duration-200 ${
                          activeIndex === index ? 'rotate-180 text-credwish-500' : 'group-hover:text-gray-500'
                        }`} 
                      />
                    </div>
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-credwish-50 mb-4">
                  <Search className="h-8 w-8 text-credwish-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any questions matching "{searchTerm}". Try different keywords or check out our other categories.
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center px-4 py-12 bg-gradient-to-br from-credwish-50 to-blue-50 rounded-2xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Our support team is here to help you with any questions about our services, features, or anything else.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  onClick={(e) => e.stopPropagation()}
                  className="px-8 py-3.5 bg-credwish-600 text-white font-medium rounded-xl hover:bg-credwish-700 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-credwish-500 focus:ring-offset-2 text-center"
                >
                  Contact Support
                </Link>
                <button className="px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-white transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                  View All FAQs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
