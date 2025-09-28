import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  User, 
  Building, 
  Home as HomeIcon, 
  GraduationCap, 
  Coins, 
  Car,
  ArrowRight,
  CheckCircle,
  FileText,
  Scale,
  Clock,
  UserCheck,
  Briefcase,
  Zap,
  CreditCard,
  Search,
  ChevronDown,
  FileSearch,
  ShieldCheck,
  Handshake,
  Percent,
  ListChecks,
  WalletCards,
  Headset,
  CircleDollarSign,
  Shield,
  Landmark
} from 'lucide-react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import LoanCard from '@/components/shared/LoanCard';
import TestimonialCard from '@/components/shared/TestimonialCard';
import EMICalculator from '@/components/shared/EMICalculator';
import EligibilityChecker from '@/components/shared/EligibilityChecker';
import PartnerBanner from '@/components/shared/PartnerBanner';
import PageCTA from '@/components/shared/PageCTA';
import FAQSection from '@/components/shared/FAQSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const Home = () => {
  // State for carousel autoplay
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to section if anchor is in URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add offset for fixed header
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  }, []);

  // Setup carousel autoplay
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });

    // Cleanup interval
    return () => {
      clearInterval(interval);
    };
  }, [carouselApi]);

  // Hero carousel slides
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Expert Loan Consultation",
      description: "Get personalized financial advice from our expert consultants"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digital Financial Tools",
      description: "Access cutting-edge financial planning and loan management tools"
    }
  ];

  // Loan categories data
  const loanCategories = [
    {
      title: "Personal Loan",
      icon: <User size={48} />,
      description: "Quick personal loans with minimal documentation for all your needs",
      interestRate: "10.5% - 15%",
      tenure: "5 Years",
      link: "/loans#personal"
    },
    {
      title: "Business Loan",
      icon: <Building size={48} />,
      description: "Grow your business with our flexible financing solutions",
      interestRate: "12% - 16%",
      tenure: "7 Years",
      link: "/loans#business"
    },
    {
      title: "Home Loan",
      icon: <HomeIcon size={48} />,
      description: "Make your dream home a reality with our affordable home loans",
      interestRate: "7.5% - 9.5%",
      tenure: "30 Years",
      link: "/loans#home"
    },
    {
      title: "Education Loan",
      icon: <GraduationCap size={48} />,
      description: "Invest in your future with our education financing options",
      interestRate: "8% - 10.5%",
      tenure: "10 Years",
      link: "/loans#education"
    },
    {
      title: "Gold Loan",
      icon: <Coins size={48} />,
      description: "Unlock the value of your gold with instant loans at best rates",
      interestRate: "7% - 9%",
      tenure: "3 Years",
      link: "/loans#gold"
    },
    {
      title: "Car Loan",
      icon: <Car size={48} />,
      description: "Drive your dream car home with quick and easy auto loans",
      interestRate: "9% - 12%",
      tenure: "7 Years",
      link: "/loans#car"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      title: "Fill The Application Form",
      description: "Check your qualifying criteria and if you are eligible, submit a filled-in loan application form along with all the required details & documents",
      icon: <FileText className="h-8 w-8" />
    },
    {
      title: "Compare Your Options",
      description: "We will provide quotes from different financiers in regard to your loan request and you can compare your options to choose the most preferable one",
      icon: <Scale className="h-8 w-8" />
    },
    {
      title: "Get Your Funds",
      description: "Once you choose the preferred loan option, we will carry forward the process with the financier and you can have your funds at the earliest in your bank account",
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      title: "Competitive Rates",
      description: "Interest rates starting from just 7.5% per annum",
      icon: <Landmark className="h-10 w-10 text-credwish-600" />
    },
    {
      title: "Quick Approval",
      description: "Get your loan approved within 48 hours",
      icon: <Clock className="h-10 w-10 text-credwish-600" />
    },
    {
      title: "Secure Process",
      description: "End-to-end encrypted application with bank-grade security",
      icon: <Shield className="h-10 w-10 text-credwish-600" />
    },
    {
      title: "Instant Disbursal",
      description: "Funds transferred directly to your account within 24 hours of approval",
      icon: <Zap className="h-10 w-10 text-credwish-600" />
    }
  ];

  // Testimonial data with Telugu state addresses and first names only
  const testimonials = [
    {
      name: "Aryan",
      location: "Visakhapatnam, AP",
      testimonial: "Credwish made my home loan process incredibly smooth. The rates were competitive and the service was excellent!",
      rating: 5
    },
    {
      name: "Akshay",
      location: "Vijayawada, AP",
      testimonial: "I needed an urgent personal loan and Credwish came through when other lenders couldn't. Highly recommend their services!",
      rating: 5
    },
    {
      name: "Shruti",
      location: "Hyderabad, TS",
      testimonial: "The business loan I got through Credwish helped me expand my restaurant. Their team was very supportive throughout the process.",
      rating: 4
    },
    {
      name: "Satya",
      location: "Warangal, TS",
      testimonial: "Incredible customer service! They guided me through my first home loan with patience and expertise.",
      rating: 5
    },
    {
      name: "Venkat",
      location: "Tirupati, AP",
      testimonial: "Fast approval and competitive rates. Will definitely use Credwish again for my financial needs.",
      rating: 5
    },
    {
      name: "Priyanka",
      location: "Karimnagar, TS",
      testimonial: "The education loan process was seamless. Thank you for helping me fund my master's degree!",
      rating: 4
    }
  ];
  
  // Create a duplicated array for infinite scrolling effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // FAQ data with categories
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'eligibility', name: 'Eligibility' },
    { id: 'documents', name: 'Documents' },
    { id: 'repayment', name: 'Repayment' }
  ];

  const faqs = [
    {
      question: "What documents do I need for a loan application?",
      answer: "For most loans, you'll need identity proof (passport, driver's license), address proof, income proof (pay slips, tax returns), and bank statements for the past 6 months. Specific loan types may require additional documentation.",
      category: 'documents',
      tags: ['documents', 'application', 'requirements']
    },
    {
      question: "How long does the loan approval process take?",
      answer: "Our loan approval process typically takes 2-3 business days after receiving all required documentation. For pre-approved customers, it may be faster. Business loans may take 3-5 business days for verification.",
      category: 'general',
      tags: ['approval', 'timeline', 'process']
    },
    {
      question: "What is the minimum credit score required?",
      answer: "We consider applications with credit scores of 650 and above, though certain loan products may have different requirements. We also look at other factors like income stability and debt-to-income ratio.",
      category: 'eligibility',
      tags: ['credit score', 'requirements', 'eligibility']
    },
    {
      question: "Can I repay my loan before the tenure ends?",
      answer: "Yes, you can make prepayments or foreclose your loan before the tenure ends. Some loan types may have a nominal prepayment charge, while others offer this facility free of cost after a minimum lock-in period.",
      category: 'repayment',
      tags: ['prepayment', 'foreclosure', 'repayment']
    },
    {
      question: "What are the interest rates for personal loans?",
      answer: "Our personal loan interest rates start from 10.5% per annum and vary based on your credit profile, loan amount, and tenure. You can check your personalized rate instantly using our online calculator.",
      category: 'general',
      tags: ['interest rates', 'personal loan', 'pricing']
    },
    {
      question: "Is there a prepayment penalty for business loans?",
      answer: "Most of our business loans don't have prepayment penalties after the initial 6-month lock-in period. However, certain specialized loan products might have specific terms, which will be clearly communicated during the application process.",
      category: 'repayment',
      tags: ['business loan', 'prepayment', 'penalty']
    }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 md:py-16 pt-24 md:pt-32 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content on the Left - Takes 6 columns */}
            <div className="lg:col-span-6 flex items-start p-4 md:p-6">
              <div className="text-gray-900 w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 font-sans">
                  Financial Solutions <span className="text-credwish-600">Tailored</span> to Your Needs
                </h1>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-700">
                  Get the funds you need with competitive interest rates and flexible repayment options
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-credwish-600 hover:bg-credwish-700 text-white px-8 py-6 text-base md:text-lg">
                    <Link to="/loans">Explore Loan Options</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-credwish-600 text-credwish-600 hover:bg-credwish-50 px-8 py-6 text-base md:text-lg">
                    <Link to="/eligibility">Check Eligibility</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* EMI Calculator on the Right - Takes 6 columns */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <EMICalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <PartnerBanner />

      {/* Loan Categories */}
      <section className="section" id="loan-categories">
        <div className="container">
          <SectionHeading 
            title="Explore Our Loan Products" 
            subtitle="Find the right financial solution for your personal and business needs"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {loanCategories.map((loan, index) => (
              <LoanCard 
                key={index}
                title={loan.title}
                icon={loan.icon}
                description={loan.description}
                interestRate={loan.interestRate}
                tenure={loan.tenure}
                link={loan.link}
              />
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <Button asChild className="bg-credwish-600 hover:bg-credwish-700">
              <Link to="/loans">View All Loan Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="container px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              How It Works
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-credwish-600 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Applying for a suitable loan and getting it from Credwish is as simple as ABC and can be accomplished successfully in an uncomplicated way. We offer a wide range of loan options for various purposes from which you can choose the one that suits your requirements well and apply for it conveniently.
            </motion.p>
          </motion.div>
          
          {/* Vertical Timeline */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-16">
                {howItWorksSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {/* Step content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="w-16 h-16 rounded-full bg-credwish-100 text-credwish-600 flex items-center justify-center text-2xl mb-4 mx-auto">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    
                    {/* Step number */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-credwish-600 text-white flex items-center justify-center text-xl font-bold relative z-10">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Empty space for right side */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Animated progress line */}
              <motion.div 
                className="absolute left-1/2 top-0 h-full w-0.5 bg-credwish-600 origin-top transform -translate-x-1/2"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Credwish - Enhanced Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50" id="why-choose-us">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Credwish for Your Financial Needs
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-credwish-500 to-credwish-600 mx-auto mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Credwish, we've redefined financial solutions with a customer-first approach, offering tailored loan products that meet your unique needs. Our commitment to transparency, speed, and exceptional service makes us the preferred choice for thousands of customers across India.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Personalized Loan Solutions",
                desc: "Customized financial products designed to fit your specific requirements and repayment capacity.",
                icon: <UserCheck className="h-6 w-6 text-white" />,
                delay: 0.1,
                bgColor: "from-blue-500 to-blue-600"
              },
              {
                title: "Competitive Interest Rates",
                desc: "Enjoy some of the most attractive interest rates in the market, starting from 7.5% per annum.",
                icon: <Percent className="h-6 w-6 text-white" />,
                delay: 0.2,
                bgColor: "from-green-500 to-green-600"
              },
              {
                title: "Fast & Paperless Process",
                desc: "Experience quick approvals with our fully digital application process and minimal documentation.",
                icon: <Zap className="h-6 w-6 text-white" />,
                delay: 0.3,
                bgColor: "from-amber-500 to-amber-600"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-credwish-400 to-credwish-600"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-credwish-500 to-credwish-600 flex items-center justify-center group-hover:from-credwish-600 group-hover:to-credwish-700 transition-all duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-credwish-600 transition-colors pt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section" id="about-us">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4 md:mb-6 text-gray-900">About Credwish</h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Established in 2022, Credwish is a reputed financial advisory platform in Andhra Pradesh, Telangana that connects creditworthy borrowers with trustworthy financial institutions like the banks & NBFCs, to provide suitable fund raising options for individual applicants & for businesses across India, at the most considerable interest rates.
              </p>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Our mission is to make financing accessible, transparent, and hassle-free for everyone. With a team of experienced financial advisors and partnerships with leading banks, we ensure that you get the best deals tailored to your specific needs.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center">
                  <div className="font-bold text-2xl md:text-3xl text-credwish-600">10K+</div>
                  <p className="text-gray-600 text-xs md:text-sm">Happy Customers</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center">
                  <div className="font-bold text-2xl md:text-3xl text-credwish-600">₹500Cr+</div>
                  <p className="text-gray-600 text-xs md:text-sm">Loans Disbursed</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm text-center col-span-2 sm:col-span-1">
                  <div className="font-bold text-2xl md:text-3xl text-credwish-600">25+</div>
                  <p className="text-gray-600 text-xs md:text-sm">Banking Partners</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-white rounded-lg shadow-lg p-2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Credwish Team" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Auto-scrolling Carousel */}
      <section className="section py-12 md:py-16 bg-gray-50" id="testimonials">
        <div className="container">
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Join thousands of satisfied customers who've found their perfect loan solution"
            center
          />
          
          <div className="relative overflow-hidden py-8">
            {/* Scrolling container */}
            <div className="w-full overflow-hidden">
              <div 
                className="flex gap-6 py-2 animate-scroll"
                style={{
                  animation: 'scroll 40s linear infinite',
                  width: 'fit-content',
                  display: 'inline-flex'
                }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-80 flex-shrink-0" style={{ whiteSpace: 'normal' }}>
                    <TestimonialCard 
                      name={testimonial.name}
                      location={testimonial.location}
                      testimonial={testimonial.testimonial}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient fade effects */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
          
          {/* Custom animation */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-250px * ${testimonials.length} - 1.5rem * ${testimonials.length - 1})); }
              }
              
              @media (max-width: 768px) {
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-280px * ${testimonials.length} - 1.5rem * ${testimonials.length - 1})); }
                }
              }
              
              .animate-scroll {
                animation: scroll 40s linear infinite;
                display: inline-flex;
              }
              
              .animate-scroll:hover {
                animation-play-state: paused;
              }
              
              /* Ensure text wraps properly */
              .testimonial-text {
                white-space: normal;
                word-wrap: break-word;
                overflow-wrap: break-word;
              }
            `
          }} />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our loan services"
        showSearch={true}
        showCategories={true}
        defaultCategory="all"
        className="py-16 md:py-24"
      />

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-credwish-600 to-credwish-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your{' '}
              <span className="text-yellow-300">Financial Journey</span>?
            </h2>
            <p className="text-xl mb-8 text-credwish-100 max-w-3xl mx-auto">
              Take the first step towards your dreams. Our team is here to guide you through every step of the loan process with transparency and care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/application"
                className="bg-white text-credwish-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-center"
              >
                Apply Now
              </a>
              <a 
                href="/eligibility"
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-center"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
