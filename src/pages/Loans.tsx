import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  User, 
  Building, 
  Home as HomeIcon, 
  GraduationCap, 
  Coins, 
  Car,
  CheckCircle,
  FileText,
  Users,
  Clock
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '@/components/shared/SectionHeading';
import LoanCard from "@/components/shared/LoanCard";
import { Button } from "@/components/ui/button";

const Loans = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('personal');
  
  // Handle scroll to section when hash changes
  useEffect(() => {
    const handleScrollToSection = () => {
      if (location.hash) {
        const hash = location.hash.replace('#', '');
        if (['personal', 'business', 'home', 'education', 'gold', 'car'].includes(hash)) {
          setActiveTab(hash);
          
          // Small timeout to ensure the tab content is rendered
          setTimeout(() => {
            // Get the tabs container element
            const tabsElement = document.querySelector('.tabs-container');
            if (tabsElement) {
              // Calculate position to show tabs slightly lower on the page
              const tabsPosition = tabsElement.getBoundingClientRect().top + window.pageYOffset - 120; // 120px offset from top to show more context
              
              // Smooth scroll to show the tabs at the top
              window.scrollTo({
                top: tabsPosition,
                behavior: 'smooth'
              });
            }
          }, 50);
        }
      } else {
        // If no hash, scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleScrollToSection();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleScrollToSection);
    
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, [location]);

  const loanTypes = [
    {
      id: 'personal',
      name: 'Personal Loan',
      icon: <User className="h-6 w-6" />,
      description: 'Quick personal loans with minimal documentation for all your needs',
      interestRate: '9.9% - 24%',
      processingFee: '1% - 2% of loan amount',
      eligibility: [
        'Age: 21-60 years',
        'Minimum income: ₹20,000 per month',
        'Employment: Salaried with 1 year experience',
        'Credit score: 700+',
      ],
      documents: [
        'Identity proof (PAN card, Aadhar card)',
        'Address proof (Utility bill, Passport)',
        'Income proof (Salary slips, Form 16)',
        'Bank statements for last 6 months',
      ],
      features: [
        'Loan amount: ₹50,000 - ₹25,00,000',
        'Tenure: 12 - 60 months',
        'Quick approval in 24-48 hours',
        'No collateral required',
        'Flexible repayment options',
      ],
      image: '/assets/images/Personal Loan.webp'
    },
    {
      id: 'business',
      name: 'Business Loan',
      icon: <Building className="h-6 w-6" />,
      description: 'Grow your business with our flexible financing solutions',
      interestRate: '14% - 32%',
      processingFee: '1.5% - 2.5% of loan amount',
      eligibility: [
        'Business vintage: Minimum 2 years',
        'Annual turnover: Minimum ₹20 lakhs',
        'Profitable business for at least 1 year',
        'Good business and personal credit history',
      ],
      documents: [
        'Business registration documents',
        'GST registration and returns',
        'Income Tax returns for last 2 years',
        'Bank statements for last 12 months',
        'KYC documents of promoters',
      ],
      features: [
        'Loan amount: ₹5,00,000 - ₹1,00,00,000',
        'Tenure: 12 - 84 months',
        'Line of credit options available',
        'Minimal collateral requirements',
        'Customized repayment schedules',
      ],
      image: '/assets/images/Business Loan.webp'
    },
    {
      id: 'home',
      name: 'Home Loan',
      icon: <HomeIcon className="h-6 w-6" />,
      description: 'Make your dream home a reality with our affordable home loans',
      interestRate: '8.5% - 16%',
      processingFee: '0.5% - 1% of loan amount',
      eligibility: [
        'Age: 21-65 years',
        'Income: Stable source with adequate income',
        'Employment: 2 years of work experience',
        'Credit score: 650+',
      ],
      documents: [
        'Identity and address proof',
        'Income proof (Salary slips, IT returns)',
        'Property documents',
        'Bank statements for last 6 months',
        'Passport size photographs',
      ],
      features: [
        'Loan amount: Up to 80% of property value',
        'Tenure: Up to 30 years',
        'Balance transfer facility available',
        'Part-payment and foreclosure options',
        'Tax benefits under Section 80C and 24(b)',
      ],
      image: '/assets/images/Home Loan.avif'
    },
    {
      id: 'education',
      name: 'Education Loan',
      icon: <GraduationCap className="h-6 w-6" />,
      description: 'Invest in your future with our education financing options',
      interestRate: '8.5% - 19%',
      processingFee: '0.5% - 1% of loan amount',
      eligibility: [
        'Student: Good academic record',
        'Course: Approved by recognized institution',
        'Co-applicant (parent/guardian) required',
        'Co-applicant income should meet criteria',
      ],
      documents: [
        'Academic records',
        'Admission letter from institution',
        'Fee structure document',
        'Co-applicant identity and income proof',
        'Collateral documents (if applicable)',
      ],
      features: [
        'Loan amount: Up to ₹75 lakhs for studies abroad',
        'Tenure: Up to 15 years',
        'Interest subsidy for economically weaker sections',
        'Moratorium period during course + 6 months',
        'Tax benefits under Section 80E',
      ],
      image: '/assets/images/Education Loan.webp'
    },
    {
      id: 'gold',
      name: 'Gold Loan',
      icon: <Coins className="h-6 w-6" />,
      description: 'Unlock the value of your gold with instant loans at best rates',
      interestRate: '9% - 14%',
      processingFee: '0.5% - 1% of loan amount',
      eligibility: [
        'Age: 21-70 years',
        'Ownership of gold being pledged',
        'Purity of gold: 18-24 karats',
        'No strict income criteria',
      ],
      documents: [
        'Identity proof',
        'Address proof',
        'Recent passport size photograph',
        'Gold ownership proof (if available)',
      ],
      features: [
        'Loan amount: Up to 75% of gold value',
        'Tenure: 3 months to 3 years',
        'Quick disbursement within hours',
        'Secure gold storage with insurance',
        'Flexible repayment options',
      ],
      image: '/assets/images/Gold Loan.jpg'
    },
    {
      id: 'car',
      name: 'Car Loan',
      icon: <Car className="h-6 w-6" />,
      description: 'Drive your dream car home with quick and easy auto loans',
      interestRate: '9% - 18%',
      processingFee: '0.5% - 1.5% of loan amount',
      eligibility: [
        'Age: 21-65 years',
        'Income: Minimum ₹25,000 per month',
        'Employment: 1 year of work experience',
        'Credit score: 680+',
      ],
      documents: [
        'Identity and address proof',
        'Income proof',
        'Bank statements for last 3 months',
        'Proforma invoice of vehicle',
        'Passport size photographs',
      ],
      features: [
        'Loan amount: Up to 90% of vehicle cost',
        'Tenure: 1-7 years',
        'Quick approval within 48 hours',
        'No foreclosure charges after 6 months',
        'Option to include insurance and accessories',
      ],
      image: '/assets/images/Car Loan.webp'
    }
  ];

  // Find the active loan details
  const activeLoan = loanTypes.find(loan => loan.id === activeTab) || loanTypes[0];

  const processSteps = [
    {
      title: "Application",
      description: "Submit your loan application online or in-person with all required documents",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Verification",
      description: "Our team verifies your documents and assesses loan eligibility",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Approval",
      description: "Loan approval with final terms and conditions offered to you",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Disbursement",
      description: "Signing of loan agreement followed by quick fund disbursement",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-credwish-800 to-credwish-700 py-16 sm:py-20 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Loan Products</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Find the perfect loan solution tailored to your needs with competitive rates and flexible terms.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types Tabs Section - Mobile Optimized */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Loan Products" 
            subtitle="Select a loan type to learn more about its features, eligibility criteria, and required documentation"
            center
          />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full tabs-container">
            {/* Mobile-friendly tab layout */}
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center mb-8 bg-blue-200/50 gap-2 h-auto">
              {loanTypes.map((loan) => (
                <TabsTrigger 
                  key={loan.id} 
                  value={loan.id}
                  className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 data-[state=active]:bg-navy data-[state=active]:text-white text-xs sm:text-sm md:text-base"
                >
                  <span className="text-base sm:text-lg">{loan.icon}</span>
                  <span className="text-center sm:text-left">{loan.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {loanTypes.map((loan) => (
              <TabsContent key={loan.id} value={loan.id} id={loan.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{loan.name}</h2>
                    <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">{loan.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm">
                        <p className="text-gray-500 text-sm sm:text-base">Interest Rate</p>
                        <p className="font-semibold text-lg sm:text-xl text-navy">{loan.interestRate}</p>
                      </div>
                      <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm">
                        <p className="text-gray-500 text-sm sm:text-base">Processing Fee</p>
                        <p className="font-semibold text-lg sm:text-xl text-navy">{loan.processingFee}</p>
                      </div>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg sm:text-xl mb-3 text-navy">Key Features</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {loan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-credwish-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href="/application" className="btn-primary inline-block text-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                      Apply for {loan.name}
                    </a>
                  </div>
                  
                  <div className="mt-6 lg:mt-0">
                    <div className="bg-navy/90 text-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                        <img 
                          src={loan.image} 
                          alt={loan.name}
                          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                            loan.id === 'gold' ? 'object-top' : 
                            loan.id === 'car' ? 'object-bottom' : 'object-center'
                          }`}
                          loading="lazy"
                          style={{
                            imageRendering: '-webkit-optimize-contrast',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                            ...(loan.id === 'gold' && { objectPosition: 'center 20%' }),
                            ...(loan.id === 'car' && { objectPosition: 'center 80%' })
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
                      </div>
                      
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                          <div>
                            <h3 className="font-semibold text-lg sm:text-xl mb-3 text-white">Eligibility</h3>
                            <ul className="space-y-2">
                              {loan.eligibility.map((item, index) => (
                                <li key={index} className="text-sm sm:text-base text-gray-200 flex items-start">
                                  <div className="h-1.5 w-1.5 bg-credwish-300 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-lg sm:text-xl mb-3 text-white">Required Documents</h3>
                            <ul className="space-y-2">
                              {loan.documents.map((item, index) => (
                                <li key={index} className="text-sm sm:text-base text-gray-200 flex items-start">
                                  <div className="h-1.5 w-1.5 bg-credwish-300 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
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

      {/* Loan Process Section - Mobile Optimized */}
      <section id="process" className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Loan Application Process" 
            subtitle="Our streamlined process ensures quick approval and disbursement of funds"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 h-full">
                  <div className="bg-credwish-50 text-credwish-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Step {index + 1}: {step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300">
                    <div className="absolute -right-1 -top-1 w-3 h-3 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents - Mobile Optimized */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Documentation Requirements" 
            subtitle="Prepare these documents beforehand to ensure a smooth loan application process"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Identity Proof",
                items: ["Aadhar Card", "PAN Card", "Passport", "Voter ID", "Driving License"]
              },
              {
                title: "Address Proof",
                items: ["Utility Bills", "Rent Agreement", "Property Tax Receipt", "Passport"]
              },
              {
                title: "Income Proof",
                items: ["Salary Slips", "Form 16", "IT Returns", "Bank Statements", "Business Financials"]
              },
              {
                title: "Additional Documents",
                items: ["Property Documents (for secured loans)", "Vehicle RC (for car loans)", "Course Documents (for education loans)"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start text-sm sm:text-base">
                      <div className="h-1.5 w-1.5 bg-credwish-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Link 
              to={`/application?product=${activeTab || 'personal'}`} 
              className="btn-primary inline-block px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

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
              Need Help Choosing the Right Loan?
            </h2>
            <p className="text-lg md:text-xl text-credwish-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Speak with our loan advisors who can guide you to the best financial solution based on your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden px-8 py-4 text-base font-semibold bg-white text-credwish-700 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-lg"
              >
                Contact an Advisor
              </Link>
              <Link 
                to="/eligibility" 
                className="px-8 py-4 text-base font-semibold text-white border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-lg"
              >
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
