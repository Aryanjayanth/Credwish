import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingDown, 
  ShieldCheck,
  CreditCard,
  CheckCircle
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import SectionHeading from '@/components/shared/SectionHeading';
import FAQSection from '@/components/shared/FAQSection';

const SpecialProducts = () => {
  const specialProducts = [
    {
      id: 'debt-consolidation',
      name: 'Debt Consolidation',
      icon: <TrendingDown className="h-8 w-8 sm:h-10 sm:w-10" />,
      description: 'Combine multiple loans into a single manageable loan with lower interest rate',
      benefits: [
        'Lower interest rate than credit cards',
        'Single EMI instead of multiple payments',
        'Improved credit score over time',
        'Stress-free debt management',
        'Fixed monthly payment',
      ],
      eligibility: [
        'Age: 21-60 years',
        'Stable income source',
        'Good repayment track record on existing loans',
        'Total existing debt should be manageable',
      ],
      features: [
        'Loan amount: Up to ₹30,00,000',
        'Interest rates from 11.5%',
        'Tenure: Up to 6 years',
        'Quick approval process',
        'No hidden charges'
      ],
      image: '/assets/images/Debt consolidation.webp'
    },
    {
      id: 'emi-protection',
      name: 'EMI Protection',
      icon: <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10" />,
      description: 'Insurance coverage that pays your loan EMIs during unforeseen circumstances',
      benefits: [
        'Protection against unemployment',
        'Coverage during critical illness',
        'Financial security during temporary disability',
        'Peace of mind for you and your family',
        'Affordable premium rates',
      ],
      eligibility: [
        'Age: 21-60 years',
        'Active loan account with us',
        'Good health declaration',
        'Employed for at least 6 months',
      ],
      features: [
        'Coverage up to 6 months of EMIs',
        'Premium starting at just 0.5% of loan amount',
        'Simple claims process',
        'Multiple coverage options',
        '30-day waiting period'
      ],
      image: '/assets/images/EMI Protection.jpg'
    },
    {
      id: 'instant-credit',
      name: 'Instant Line of Credit',
      icon: <CreditCard className="h-8 w-8 sm:h-10 sm:w-10" />,
      description: 'Pre-approved credit line that you can access instantly when you need it',
      benefits: [
        'Instant access to funds',
        'Pay interest only on the amount used',
        'Flexible repayment options',
        'No collateral required',
        'Revolving credit facility',
      ],
      eligibility: [
        'Age: 21-60 years',
        'Monthly income: ₹30,000+',
        'Credit score: 720+',
        'Existing customer with good repayment history',
      ],
      features: [
        'Credit limit up to 5x monthly income',
        'Interest rates from 14% per annum',
        'No annual maintenance fee for first year',
        'Withdraw in multiples of ₹5,000',
        'Digital approval process'
      ],
      image: '/assets/images/Instant Line of Credit.webp'
    }
  ];

  const faqs = [
    {
      question: "How does debt consolidation work?",
      answer: "Debt consolidation involves taking a new loan to pay off multiple existing debts. This combines all your debts into a single loan with potentially lower interest rates and a structured repayment plan."
    },
    {
      question: "What does EMI protection cover?",
      answer: "EMI protection typically covers your loan EMIs in case of involuntary job loss, critical illness, or temporary disability. The coverage period and conditions vary based on the specific plan you choose."
    },
    {
      question: "How quickly can I access funds through the Instant Line of Credit?",
      answer: "Once approved, you can access funds instantly through our mobile app or website. The credit line is pre-approved, so there's no waiting time when you need the funds."
    },
    {
      question: "Can I apply for multiple special products simultaneously?",
      answer: "Yes, you can apply for multiple products based on your eligibility. For example, you can opt for a debt consolidation loan and also get EMI protection on that loan."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-credwish-800 to-credwish-700 py-16 sm:py-20 md:py-24 pt-24 md:pt-32">
        <div className="container">
          <div className="text-center text-white px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Special Financial Products</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Tailored solutions to help you manage debt, protect your finances, and access quick credit
            </p>
          </div>
        </div>
      </section>

      {/* Special Products Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Special Products" 
            subtitle="Explore our specialized financial products designed to meet your unique requirements"
            center
          />
          
          <Tabs defaultValue="debt-consolidation" className="w-full">
            <TabsList className="flex flex-col sm:flex-row w-full mb-6 sm:mb-8 h-auto">
              {specialProducts.map((product) => (
                <TabsTrigger 
                  key={product.id} 
                  value={product.id}
                  className="w-full sm:w-auto flex items-center gap-2 px-3 py-3 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base mb-1 sm:mb-0"
                >
                  <span className="hidden sm:inline">{product.name}</span>
                  <span className="sm:hidden">{product.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {specialProducts.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
                  <div className="lg:col-span-3 order-2 lg:order-1">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
                      <div className="p-2 bg-credwish-50 rounded-lg text-credwish-600">
                        {React.cloneElement(product.icon, { className: 'h-8 w-8' })}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 text-center sm:text-left">{product.name}</h2>
                        <div className="w-12 h-1 bg-credwish-500 my-2"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-base text-center sm:text-left leading-relaxed">{product.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold text-base sm:text-lg mb-3 text-center sm:text-left">Key Benefits</h3>
                      <ul className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-left">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-credwish-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm md:text-base">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold text-base sm:text-lg mb-3 text-center sm:text-left">Product Features</h3>
                      <ul className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-left">
                            <div className="h-1.5 w-1.5 bg-credwish-600 rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col gap-2 sm:gap-3 mt-6">
                      <Button asChild className="bg-credwish-600 hover:bg-credwish-700 w-full sm:w-auto">
                        <Link to="/application" state={{ product: product.id }}>Apply Now</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-credwish-600 text-credwish-600 hover:bg-credwish-50 w-full sm:w-auto">
                        <Link to="/contact" state={{ inquiryType: 'advisor', product: product.name }}>Speak to an Advisor</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col w-full">
                      <div className="flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-40 sm:h-48 object-cover"
                        />
                      </div>
                      
                      <div className="p-3 sm:px-3 sm:py-4 flex-1 flex flex-col w-full">
                        <h3 className="font-semibold text-lg sm:text-xl mb-3 text-center">Eligibility Criteria</h3>
                        <ul className="space-y-2.5 mb-5">
                          {product.eligibility.map((item, index) => (
                            <li key={index} className="text-gray-700 flex items-start">
                              <div className="h-2 w-2 bg-credwish-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="space-y-4 mb-5">
                          <div className="bg-credwish-50 rounded-lg p-4">
                            <div className="flex items-start">
                              <div className="bg-credwish-100 p-2 rounded-full mr-3">
                                <ShieldCheck className="h-5 w-5 text-credwish-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-base text-gray-800 mb-1.5">Quick Approval</h4>
                                <p className="text-sm text-gray-600">Get a decision within 24 hours with our streamlined process</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-amber-50 rounded-lg p-4">
                            <div className="flex items-start">
                              <div className="bg-amber-100 p-2 rounded-full mr-3">
                                <TrendingDown className="h-5 w-5 text-amber-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-base text-gray-800 mb-1.5">Competitive Rates</h4>
                                <p className="text-sm text-gray-600">Enjoy lower interest rates compared to credit cards</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <Button asChild className="w-full bg-credwish-600 hover:bg-credwish-700">
                            <Link to="/eligibility" state={{ product: product.id }}>Check Eligibility</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Compare Products Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Compare Special Products" 
            subtitle="Find the right financial product that suits your specific needs"
            center
          />
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full bg-white shadow-sm rounded-lg">
                <thead>
                  <tr className="bg-credwish-50">
                    <th className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-left text-xs sm:text-sm md:text-base font-semibold">Features</th>
                    <th className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base font-semibold">Debt Consolidation</th>
                    <th className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base font-semibold">EMI Protection</th>
                    <th className="py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base font-semibold">Instant Line of Credit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 font-medium text-xs sm:text-sm md:text-base">Purpose</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">Combine multiple debts</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">Protect loan payments</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">Immediate access to funds</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 font-medium text-xs sm:text-sm md:text-base">Interest Rate</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">11.5% - 16%</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">N/A (Insurance product)</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">14% - 18%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 font-medium text-xs sm:text-sm md:text-base">Processing Time</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">2-3 business days</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">Same day</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center text-xs sm:text-sm md:text-base">Instant</td>
                  </tr>
                  <tr>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6"></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center">
                      <Button asChild size="sm" className="bg-credwish-600 hover:bg-credwish-700 text-xs">
                        <Link to="/application" state={{ product: 'debt-consolidation' }}>Apply</Link>
                      </Button>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center">
                      <Button asChild size="sm" className="bg-credwish-600 hover:bg-credwish-700 text-xs">
                        <Link to="/application" state={{ product: 'emi-protection' }}>Apply</Link>
                      </Button>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 md:px-6 text-center">
                      <Button asChild size="sm" className="bg-credwish-600 hover:bg-credwish-700 text-xs">
                        <Link to="/application" state={{ product: 'instant-credit' }}>Apply</Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Success Stories" 
            subtitle="See how our special products have helped our customers overcome financial challenges"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Credit Card Debt Relief",
                product: "Debt Consolidation",
                story: "Rahul was struggling with multiple credit card debts at high interest rates. Our debt consolidation loan helped him combine all debts into one affordable EMI, saving ₹8,000 monthly in interest payments.",
                savings: "₹4.8 Lakhs over 5 years",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Protection During Job Loss",
                product: "EMI Protection",
                story: "When Priya lost her job unexpectedly, her EMI protection plan covered her home loan EMIs for 4 months, giving her time to find a new job without defaulting on her loan payments.",
                savings: "₹1.2 Lakhs in covered EMIs",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Business Opportunity",
                product: "Instant Line of Credit",
                story: "Vikram needed quick funds to take advantage of a business opportunity. His pre-approved credit line allowed him to access ₹5 Lakhs instantly, helping him secure the deal within hours.",
                savings: "Business revenue increased by 30%",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              }
            ].map((story, index) => (
              <div key={index} className="card h-full flex flex-col">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="text-xs sm:text-sm text-credwish-600 font-medium mb-1 text-center">{story.product}</div>
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 text-center">{story.title}</h3>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm md:text-base text-left">{story.story}</p>
                <div className="mt-auto">
                  <div className="border-t pt-4 mt-4">
                    <p className="font-semibold text-center text-xs sm:text-sm">Savings: <span className="text-credwish-600">{story.savings}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our special financial products"
        showSearch={true}
        showCategories={false}
        className="bg-gray-50"
      />
      

      {/* CTA Section - Styled to match PageCTA */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-credwish-700 via-credwish-600 to-credwish-700">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white rounded-full mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-credwish-100 bg-white/20 rounded-full mb-4">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Simplify Your Finances?
            </h2>
            <p className="text-lg md:text-xl text-credwish-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Speak with our financial experts to find the right product for your specific situation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/application" 
                className="group relative overflow-hidden px-8 py-4 text-base font-semibold bg-white text-credwish-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-lg"
              >
                Apply Now
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 text-base font-semibold text-white border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-lg"
              >
                Speak to an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialProducts;
