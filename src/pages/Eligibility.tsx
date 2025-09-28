
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';
import EMICalculator from '@/components/shared/EMICalculator';
import EligibilityChecker from '@/components/shared/EligibilityChecker';
import { 
  CheckCircle, 
  CheckCircle2, 
  CreditCard, 
  FileText, 
  Shield, 
  TrendingDown, 
  TrendingUp, 
  Users, 
  Clock, 
  Percent, 
  Briefcase,
  Home, 
  Phone, 
  AlertCircle, 
  Info,
  Search,
  FileSearch,
  HelpCircle, 
  ChevronDown, 
  MessageSquareText
} from 'lucide-react';
import FAQSection from '@/components/shared/FAQSection';
import eligibilityFAQs from '@/data/eligibilityFAQs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Eligibility = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* Hero Section with Quick Check */}
      <section className="bg-gradient-to-r from-credwish-800 to-credwish-700 py-12 md:py-16 pt-24 md:pt-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white w-full flex flex-col items-center text-center">
                <div className="mb-2">
                  <span className="inline-block bg-credwish-600/20 text-credwish-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Quick & Easy Process
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-3xl">
                  Check Your <span className="text-credwish-300">Loan Eligibility</span> in Minutes
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                  Get pre-approved for a loan with our quick eligibility check. No impact on your credit score.
                </p>
                <div className="w-full flex justify-center">
                  <ul className="space-y-3 mb-8 inline-flex flex-col items-start">
                    <li className="flex items-center text-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <span>No impact on credit score</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <span>100% online process</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <span>Instant results</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Eligibility Checker */}
              <div className="w-full">
                <EligibilityChecker />
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Document Checklist Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4">
          <SectionHeading 
            title="Required Documents" 
            subtitle="Keep these documents ready for a smooth application process"
            center
          />
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "Identity Proof",
                icon: <CreditCard className="h-5 w-5 text-credwish-600" />,
                items: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID", "Driving License"]
              },
              {
                title: "Address Proof",
                icon: <Home className="h-5 w-5 text-credwish-600" />,
                items: ["Aadhaar Card", "Passport", "Utility Bills (not older than 3 months)", "Rent Agreement"]
              },
              {
                title: "Income Proof (Salaried)",
                icon: <FileText className="h-5 w-5 text-credwish-600" />,
                items: ["Last 3 months' salary slips", "Form 16", "Last 6 months' bank statements"]
              },
              {
                title: "Income Proof (Self-Employed)",
                icon: <Briefcase className="h-5 w-5 text-credwish-600" />,
                items: ["Last 2 years' ITR", "Last 2 years' P&L statement", "Business proof"]
              }
            ].map((category, index) => (
              <Card key={index} className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-xl p-10 max-w-5xl mx-auto shadow-sm border border-blue-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-blue-800">Document Submission Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-50 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-800 text-base text-left w-full">Clear Scans</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Ensure all documents are clearly visible and not cropped</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-50 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-800 text-base text-left w-full">File Format</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Upload in PDF, JPG, or PNG format (max 5MB per file)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-50 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-800 text-base text-left w-full">Validity</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">All documents should be valid and not expired</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-50 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-800 text-base text-left w-full">Name Matching</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Ensure names match across all documents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding CIBIL Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Understanding Your <span className="text-credwish-600">CIBIL Score</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your credit score is a crucial factor in loan approval and interest rates. A higher score means better loan terms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* CIBIL Score Ranges */}
            <Card className="h-fit shadow-lg border-0 rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-credwish-700 to-credwish-600">
                <CardTitle className="flex items-center justify-center gap-3 text-white text-center">
                  <CreditCard className="h-6 w-6 text-white" />
                  <span className="text-xl font-semibold">CIBIL Score Ranges</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { range: "750-900", status: "Excellent", color: "bg-green-500", desc: "Best loan terms & lowest interest rates" },
                    { range: "700-749", status: "Good", color: "bg-blue-500", desc: "Good loan approval chances" },
                    { range: "650-699", status: "Fair", color: "bg-yellow-500", desc: "Moderate approval chances" },
                    { range: "600-649", status: "Needs Work", color: "bg-orange-500", desc: "Limited loan options" },
                    { range: "300-599", status: "Needs Attention", color: "bg-red-500", desc: "Improvement needed for approval" }
                  ].map((score, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                      <div className={`h-5 w-5 rounded-full ${score.color} flex-shrink-0`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                          <span className="font-semibold text-gray-900 text-base">{score.range}</span>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                            {score.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-left">{score.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips to Improve CIBIL */}
            <Card className="h-fit shadow-lg border-0 rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-credwish-700 to-credwish-600">
                <CardTitle className="flex items-center justify-center gap-3 text-white text-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                  <span className="text-xl font-semibold">Boost Your CIBIL Score</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      tip: "Pay all EMIs and credit card bills on time",
                      impact: "High impact"
                    },
                    {
                      tip: "Keep credit utilization below 30%",
                      impact: "High impact"
                    },
                    {
                      tip: "Maintain a healthy credit mix",
                      impact: "Medium impact"
                    },
                    {
                      tip: "Check your credit report for errors",
                      impact: "Critical"
                    },
                    {
                      tip: "Avoid multiple loan applications",
                      impact: "High impact"
                    },
                    {
                      tip: "Keep old credit accounts active",
                      impact: "Medium impact"
                    },
                    {
                      tip: "Pay more than minimum due amount",
                      impact: "High impact"
                    },
                    {
                      tip: "Limit new credit applications",
                      impact: "High impact"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="h-8 w-8 rounded-full bg-credwish-50 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-credwish-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="text-gray-800 font-medium">{item.tip}</p>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700 ml-2 whitespace-nowrap">
                            {item.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CIBIL Score Factors - Pie Chart */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                How Your CIBIL Score is Calculated
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Your credit score is determined by these key factors, each contributing differently to your overall score
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
              {/* Enhanced Pie Chart */}
              <div className="w-full lg:w-1/2 max-w-md mx-auto">
                <div className="relative w-full aspect-square group">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-8 border-blue-50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Pie Chart Container */}
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{
                           boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
                         }}>
                    </div>
                    
                    {/* Pie Chart Segments with Gradient */}
                    <div 
                      className="w-full h-full rounded-full transform transition-transform duration-500 hover:scale-105"
                      style={{
                        background: 'conic-gradient(' +
                          'from 0deg, ' +
                          '#10B981 0% 35%, ' +  // Payment History (35%)
                          '#3B82F6 35% 65%, ' +  // Credit Utilization (30%)
                          '#F59E0B 65% 80%, ' +  // Credit Age (15%)
                          '#8B5CF6 80% 90%, ' +  // Credit Mix (10%)
                          '#EC4899 90% 100%'     // New Credit (10%)
                      }}
                    ></div>
                    
                    {/* Center circle with shadow */}
                    <div className="absolute inset-8 bg-white rounded-full shadow-inner">
                      <div className="absolute inset-0.5 rounded-full border border-gray-100"></div>
                    </div>
                  </div>
                  
                  {/* Center text with subtle animation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-credwish-600 to-blue-600 bg-clip-text text-transparent">
                      CIBIL
                    </span>
                    <span className="text-sm text-gray-500 mt-1">Score Factors</span>
                  </div>
                  
                  {/* Removed segment indicators for cleaner look */}
                </div>
              </div>
              
              {/* Legend */}
              <div className="w-full lg:w-1/2 space-y-4">
                {[
                  { 
                    factor: "Payment History", 
                    weight: "35%", 
                    color: "from-green-500 to-green-600"
                  },
                  { 
                    factor: "Credit Utilization", 
                    weight: "30%", 
                    color: "from-blue-500 to-blue-600"
                  },
                  { 
                    factor: "Credit Age", 
                    weight: "15%", 
                    color: "from-amber-500 to-amber-600"
                  },
                  { 
                    factor: "Credit Mix", 
                    weight: "10%", 
                    color: "from-purple-500 to-purple-600"
                  },
                  { 
                    factor: "New Credit", 
                    weight: "10%", 
                    color: "from-rose-500 to-rose-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} mr-3`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{item.factor}</span>
                        <span className="font-semibold text-gray-900">{item.weight}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          style={{ width: item.weight }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-credwish-600 hover:bg-credwish-700">
                Get Your Free CIBIL Report
              </Button>
              <p className="text-xs text-gray-500 mt-3">Checking your own score won't affect your credit rating</p>
            </div>
          </div>

          {/* Good Looking Credit Score Impact */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Impact on Your Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 md:p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 text-center">Good Credit Score (750+)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-left">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm md:text-base">Lower interest rates</span>
                      </li>
                      <li className="flex items-start text-left">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm md:text-base">Higher loan amounts</span>
                      </li>
                      <li className="flex items-start text-left">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm md:text-base">Faster approval process</span>
                      </li>
                      <li className="flex items-start text-left">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-sm md:text-base">Better negotiating power</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 md:p-6 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3 text-center">Poor Credit Score (Below 650)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-left">
                        <div className="h-4 w-4 bg-red-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                        <span className="text-red-700 text-sm md:text-base">Higher interest rates</span>
                      </li>
                      <li className="flex items-start text-left">
                        <div className="h-4 w-4 bg-red-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                        <span className="text-red-700 text-sm md:text-base">Lower loan amounts</span>
                      </li>
                      <li className="flex items-start text-left">
                        <div className="h-4 w-4 bg-red-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                        <span className="text-red-700 text-sm md:text-base">Longer approval process</span>
                      </li>
                      <li className="flex items-start text-left">
                        <div className="h-4 w-4 bg-red-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                        <span className="text-red-700 text-sm md:text-base">May require guarantor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container px-4">
          <SectionHeading 
            title="Eligibility Criteria" 
            subtitle="Understanding our loan eligibility requirements"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Individual Borrowers",
                criteria: [
                  "Age: 21-60 years",
                  "Indian Resident",
                  "Stable income source",
                  "Minimum monthly income: ₹20,000",
                  "Good credit score (700+)",
                  "Clean repayment history"
                ],
                note: "Requirements may vary based on loan type"
              },
              {
                title: "Self-Employed Professionals",
                criteria: [
                  "Age: 25-65 years",
                  "Indian Resident",
                  "Minimum business vintage: 3 years",
                  "ITR for last 2 financial years",
                  "Minimum annual income: ₹5,00,000",
                  "Business stability proof"
                ],
                note: "Additional documents may be required"
              },
              {
                title: "Business Entities",
                criteria: [
                  "Minimum business vintage: 3 years",
                  "Profitable operations for 2+ years",
                  "Audited financial statements",
                  "Minimum turnover: ₹50,00,000",
                  "Business registration proof",
                  "Banking relationship"
                ],
                note: "Partnership firms and corporations eligible"
              }
            ].map((category, index) => (
              <div key={index} className="card h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">{category.title}</h3>
                <ul className="space-y-2 mb-6">
                  {category.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start text-left">
                      <div className="h-1.5 w-1.5 bg-credwish-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm md:text-base">{criterion}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs md:text-sm text-gray-500 italic text-left">
                  Note: {category.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enhanced Loan Approval Process */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-credwish-400/30 blur-3xl"></div>
          <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"></div>
        </div>
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our <span className="text-credwish-600">Loan Approval</span> Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent and straightforward - know exactly what we look for in your application
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Process Timeline */}
            <div className="relative mb-16 hidden md:block">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-credwish-100 to-credwish-200 -translate-x-1/2"></div>
              
              {[
                {
                  title: "Application Review",
                  desc: "We verify your personal and financial details",
                  icon: <FileText className="h-6 w-6" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Document Verification",
                  desc: "Authenticating your submitted documents",
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Credit Assessment",
                  desc: "Analyzing your credit history and score",
                  icon: <CreditCard className="h-6 w-6" />,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Approval & Disbursal",
                  desc: "Funds transferred upon final approval",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "from-credwish-500 to-credwish-600"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center text-white shadow-lg z-10">
                    {step.icon}
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
            
            {/* Mobile Process */}
            <div className="md:hidden space-y-8 mb-12">
              {[
                {
                  title: "1. Application Review",
                  desc: "We verify your personal and financial details",
                  icon: <FileText className="h-5 w-5" />
                },
                {
                  title: "2. Document Verification",
                  desc: "Authenticating your submitted documents",
                  icon: <CheckCircle2 className="h-5 w-5" />
                },
                {
                  title: "3. Credit Assessment",
                  desc: "Analyzing your credit history and score",
                  icon: <CreditCard className="h-5 w-5" />
                },
                {
                  title: "4. Approval & Disbursal",
                  desc: "Funds transferred upon final approval",
                  icon: <CheckCircle className="h-5 w-5" />
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="h-10 w-10 rounded-full bg-credwish-100 text-credwish-600 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Key Factors & 60% Rule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Key Factors */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100 flex items-center gap-2">
                  <span className="h-8 w-1 bg-credwish-600 rounded-full"></span>
                  Key Factors We Consider
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Income & Employment",
                      desc: "Stable income source and employment history",
                      icon: <Briefcase className="h-5 w-5" />
                    },
                    {
                      title: "Credit Profile",
                      desc: "Credit score and repayment history",
                      icon: <CreditCard className="h-5 w-5" />
                    },
                    {
                      title: "Debt Obligations",
                      desc: "Existing EMIs and financial commitments",
                      icon: <TrendingDown className="h-5 w-5" />
                    },
                    {
                      title: "Loan Security",
                      desc: "Collateral value (for secured loans)",
                      icon: <Shield className="h-5 w-5" />
                    },
                    {
                      title: "Loan Tenure",
                      desc: "Age and requested repayment period",
                      icon: <Clock className="h-5 w-5" />
                    }
                  ].map((factor, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="h-10 w-10 rounded-lg bg-credwish-50 text-credwish-600 flex items-center justify-center flex-shrink-0 group-hover:bg-credwish-600 group-hover:text-white transition-colors">
                        {factor.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{factor.title}</h4>
                        <p className="text-sm text-gray-600">{factor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 60% Rule */}
              <div className="bg-gradient-to-br from-blue-600 to-credwish-700 p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full"></div>
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Percent className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">The 60% Rule</h3>
                </div>
                
                <p className="mb-6 text-credwish-50">
                  We ensure your financial well-being by capping your total EMIs at 60% of your monthly income.
                </p>
                
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium">Monthly Income</span>
                    <span className="font-semibold">₹50,000</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-credwish-100">60% EMI Limit</span>
                    <span className="text-xs font-medium">₹30,000</span>
                  </div>
                  
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-credwish-400 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Existing EMIs:</span>
                      <span>₹10,000</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Available for New Loan:</span>
                      <span>₹20,000</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-sm text-credwish-100">
                    This rule helps maintain your financial health while servicing your loan.
                  </p>
                </div>
                </div> {/* Close relative z-10 */}
              </div>
            </div>
            
            {/* Tips to Improve Eligibility */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-white/20 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-8">
                <span className="relative pb-2">
                  Tips to Improve Your Eligibility
                  <span className="absolute bottom-0 left-1/2 w-16 h-0.5 bg-credwish-600 -translate-x-1/2"></span>
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { 
                    tip: "Maintain a credit score above 750",
                    icon: <TrendingUp className="h-5 w-5" />
                  },
                  { 
                    tip: "Reduce existing debt obligations",
                    icon: <TrendingDown className="h-5 w-5" />
                  },
                  { 
                    tip: "Provide additional income proofs",
                    icon: <FileText className="h-5 w-5" />
                  },
                  { 
                    tip: "Opt for a longer loan tenure",
                    icon: <Clock className="h-5 w-5" />
                  },
                  { 
                    tip: "Add a co-applicant with good credit",
                    icon: <Users className="h-5 w-5" />
                  },
                  { 
                    tip: "Offer collateral for better terms",
                    icon: <Shield className="h-5 w-5" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="h-8 w-8 rounded-full bg-credwish-50 text-credwish-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.tip}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-credwish-600 hover:bg-credwish-700 px-8 py-6 text-base">
                  Check Your Eligibility Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about loans and eligibility
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
              
            <div className="space-y-4">
              {[
                {
                  question: "What are the basic eligibility criteria for a personal loan?",
                  answer: [
                    "• Minimum age: 21 years (23 for self-employed)",
                    "• Maximum age: 60 years at loan maturity (65 for pensioners)",
                    "• Minimum monthly income: ₹25,000 for salaried, ₹3 lakhs annual for self-employed",
                    "• Work experience: 1+ year (salaried) / 3+ years (self-employed)",
                    "• CIBIL score: 650+ (750+ for best rates)"
                  ]
                },
                {
                  question: "How is my loan eligibility amount calculated?",
                  answer: [
                    "Your eligibility is based on multiple factors:",
                    "• Monthly income and existing obligations (FOIR up to 50-60% of income)",
                    "• Credit score and credit history",
                    "• Employment stability and company profile",
                    "• Relationship with the bank (existing customers may get better terms)",
                    "• Loan tenure and interest rate"
                  ]
                },
                {
                  question: "What documents do I need for a salaried individual?",
                  answer: [
                    "• Identity Proof: PAN Card, Aadhaar Card, Passport, or Voter ID",
                    "• Address Proof: Aadhaar, Passport, Utility Bills (not older than 3 months)",
                    "• Income Proof: Last 3 months' salary slips, Last 6 months' bank statements",
                    "• Employment Proof: Employment certificate, Appointment letter, or Employee ID card"
                  ]
                },
                {
                  question: "What is the loan application process?",
                  answer: [
                    "1. Check Eligibility: Use our online eligibility calculator",
                    "2. Submit Application: Fill in basic details and upload documents online",
                    "3. Verification: Documents and details will be verified by the bank",
                    "4. Approval: Loan approval typically takes 2-4 working days",
                    "5. Disbursement: Once approved, the amount is disbursed to your account"
                  ]
                },
                {
                  question: "Can I prepay or foreclose my loan?",
                  answer: [
                    "Yes, most personal loans allow prepayment or foreclosure, but terms vary:",
                    "• Prepayment after 6-12 months of loan tenure (check with your bank)",
                    "• Prepayment charges: 2-5% of the outstanding amount (varies by bank)",
                    "• Some banks offer part-prepayment options with minimal charges",
                    "• No charges for foreclosure after a certain period (usually 12-24 months)"
                  ]
                },
                {
                  question: "Do I need to submit original documents?",
                  answer: [
                    "No, you typically don't need to submit original documents. Clear, colored scanned copies or photocopies are usually sufficient for the application process.",
                    "However, you may be required to show original documents for verification at the time of loan disbursement or during the verification process."
                  ]
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md ${
                    activeIndex === index ? 'ring-2 ring-credwish-200' : ''
                  }`}
                >
                  <button
                    className="flex items-start w-full px-6 py-5 text-left focus:outline-none group"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
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
                            <ul className="space-y-2 list-disc pl-5">
                              {faq.answer.map((item, i) => (
                                <li key={i} className="leading-relaxed">
                                  {item.replace(/^•\s*/, '')}
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
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center px-4 py-12 bg-gradient-to-br from-credwish-50 to-blue-50 rounded-2xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Our support team is here to help you with any questions about loans, eligibility, or the application process.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3.5 bg-credwish-600 text-white font-medium rounded-xl hover:bg-credwish-700 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-credwish-500 focus:ring-offset-2">
                    Contact Support
                  </button>
                  <button className="px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-white transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                    View All FAQs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Eligibility;
