import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Building, 
  Home as HomeIcon, 
  GraduationCap, 
  Coins, 
  Car,
  Upload,
  CheckCircle,
  Info,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/shared/SectionHeading';

interface FormData {
  // Personal details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  panCard: string;
  aadharNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  
  // Loan details
  loanType: string;
  loanAmount: string;
  loanPurpose: string;
  loanTenure: string;
  existingLoan: string;
  
  // Employment details
  employmentType: string;
  companyName: string;
  designation: string;
  workExperience: string;
  monthlyIncome: string;
  additionalIncome: string;
  
  // Business/Self-employed details
  businessNature: string;
  businessName: string;
  businessType: string;
  businessVintage: string;
  gstin: string;
  
  // Document information
  documentType: string;
  documentNumber: string;
  
  // Additional information
  reference: string;
  message: string;
  contactPreference: string;
  bestTimeToCall: string;
  
  // Terms and conditions
  agreeTerms: boolean;
}

const Application = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  // Parse query string to get pre-selected product
  const queryParams = new URLSearchParams(location.search);
  const preSelectedProduct = queryParams.get('product');

  // Form state with all necessary fields (file uploads removed)
  const [formData, setFormData] = useState({
    // Personal details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    panCard: '',
    aadharNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Loan details
    loanType: preSelectedProduct || 'personal',
    loanAmount: '',
    loanPurpose: '',
    loanTenure: '3',
    existingLoan: 'no',
    
    // Employment details
    employmentType: 'salaried',
    companyName: '',
    designation: '',
    workExperience: '',
    monthlyIncome: '',
    additionalIncome: '',
    
    // Business/Self-employed details
    businessNature: '',
    businessName: '',
    businessType: '',
    businessVintage: '',
    gstin: '',
    
    // Document information (references only, no uploads)
    documentType: '',
    documentNumber: '',
    
    // Additional information
    reference: '',
    message: '',
    contactPreference: 'email',
    bestTimeToCall: 'morning',
    
    // Terms and conditions
    agreeTerms: false
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (name: keyof FormData, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required personal details.",
          variant: "destructive",
        });
        return false;
      }
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return false;
      }
      // Basic phone validation
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(formData.phone)) {
        toast({
          title: "Invalid Phone Number",
          description: "Please enter a valid 10-digit phone number.",
          variant: "destructive",
        });
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.loanAmount || !formData.loanPurpose) {
        toast({
          title: "Required Fields Missing",
          description: "Please provide loan amount and purpose.",
          variant: "destructive",
        });
        return false;
      }
      if (parseInt(formData.loanAmount) < 50000) {
        toast({
          title: "Invalid Loan Amount",
          description: "Minimum loan amount is ₹50,000.",
          variant: "destructive",
        });
        return false;
      }
    } else if (currentStep === 3) {
      // Check employment type is selected
      if (!formData.employmentType) {
        toast({
          title: "Employment Type Required",
          description: "Please select your employment type.",
          variant: "destructive",
        });
        return false;
      }
      
      // Check monthly income is provided and valid
      if (!formData.monthlyIncome) {
        toast({
          title: "Monthly Income Required",
          description: "Please provide your monthly income.",
          variant: "destructive",
        });
        return false;
      }
      
      // Additional validation for salaried employees
      if (formData.employmentType === 'salaried' && (!formData.companyName || !formData.designation)) {
        toast({
          title: "Employment Details Required",
          description: "Please provide company name and designation for salaried employees.",
          variant: "destructive",
        });
        return false;
      }
    }
    return true;
  };
  
  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create URLSearchParams for form data (simpler than FormData for non-file uploads)
      const formDataToSend = new URLSearchParams();

      // Add all form data
      (Object.entries(formData) as [string, string | number | boolean][]).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formDataToSend.append(key, String(value));
        }
      });

      // Add Formspree specific fields
      formDataToSend.append('_subject', `New Loan Application - ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_format', 'plain');
      formDataToSend.append('_template', 'box');
      formDataToSend.append('submissionDate', new Date().toISOString());
      formDataToSend.append('pageUrl', window.location.href);

      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/xqagkrgw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }
      
      setApplicationSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "Your loan application has been successfully submitted. Our team will review it shortly.",
        variant: "default",
      });
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.error('Application submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "We couldn't submit your application. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Loan type icons
  const loanIcons = {
    personal: <User className="h-6 w-6" />,
    business: <Building className="h-6 w-6" />,
    home: <HomeIcon className="h-6 w-6" />,
    education: <GraduationCap className="h-6 w-6" />,
    gold: <Coins className="h-6 w-6" />,
    car: <Car className="h-6 w-6" />,
    'debt-consolidation': <Coins className="h-6 w-6" />,
    'emi-protection': <CheckCircle className="h-6 w-6" />,
    'instant-credit': <Coins className="h-6 w-6" />
  };
  
  // Application success view
  if (applicationSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="heading-lg mb-4 text-green-700">Application Submitted Successfully!</h1>
          
          <p className="text-lg mb-6">
            Thank you for choosing Credwish. Your application reference number is <span className="font-bold">CW-{Math.floor(100000 + Math.random() * 900000)}</span>
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
            
            <ol className="text-left space-y-4">
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-credwish-100 text-credwish-600 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <p>Our team will review your application within 24-48 hours</p>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-credwish-100 text-credwish-600 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <p>You'll receive an email and SMS with application status</p>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-credwish-100 text-credwish-600 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <p>A loan officer will contact you for further verification</p>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-credwish-100 text-credwish-600 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <p>Upon approval, loan agreement will be shared for e-signing</p>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-credwish-600 hover:bg-credwish-700">
              <a href="/">Return to Home</a>
            </Button>
            <Button asChild variant="outline" className="border-credwish-600 text-credwish-600 hover:bg-credwish-50">
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-credwish-800 to-credwish-700 py-16 pt-24 md:pt-32">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h1 className="heading-xl mb-4">Loan Application</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Complete the form below to apply for your loan
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep === step 
                        ? 'bg-credwish-600 text-white' 
                        : currentStep > step 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  <div className="text-sm mt-2 hidden sm:block">
                    {step === 1 && 'Personal Details'}
                    {step === 2 && 'Loan Details'}
                    {step === 3 && 'Employment'}
                    {step === 4 && 'Documents'}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-4">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-credwish-600 rounded-full transition-all" 
                style={{width: `${(currentStep / 4) * 100}%`}}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        placeholder="Enter your first name" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        placeholder="Enter your last name" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="your-email@example.com" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="10-digit mobile number" 
                        maxLength={10}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input 
                        id="dateOfBirth" 
                        name="dateOfBirth" 
                        type="date" 
                        value={formData.dateOfBirth} 
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="panCard">PAN Card Number</Label>
                      <Input 
                        id="panCard" 
                        name="panCard" 
                        value={formData.panCard} 
                        onChange={handleChange} 
                        placeholder="ABCDE1234F"
                        className="uppercase"
                      />
                    </div>
                  </div>
                  
                  <Separator className="my-8" />
                  
                  <h3 className="text-xl font-semibold mb-4">Address Information</h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="Enter your full address"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          placeholder="Your city"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select 
                          value={formData.state} 
                          onValueChange={(value) => handleSelectChange('state', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                            <SelectItem value="telangana">Telangana</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input 
                          id="pincode" 
                          name="pincode" 
                          value={formData.pincode} 
                          onChange={handleChange} 
                          placeholder="6-digit PIN code"
                          maxLength={6}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Loan Details */}
              {currentStep === 2 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Loan Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="loanType">Loan Type <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.loanType} 
                        onValueChange={(value) => handleSelectChange('loanType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Loan</SelectItem>
                          <SelectItem value="business">Business Loan</SelectItem>
                          <SelectItem value="home">Home Loan</SelectItem>
                          <SelectItem value="education">Education Loan</SelectItem>
                          <SelectItem value="gold">Gold Loan</SelectItem>
                          <SelectItem value="car">Car Loan</SelectItem>
                          <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                          <SelectItem value="emi-protection">EMI Protection</SelectItem>
                          <SelectItem value="instant-credit">Instant Line of Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount">Loan Amount (₹) <span className="text-red-500">*</span></Label>
                      <Input 
                        id="loanAmount" 
                        name="loanAmount" 
                        type="number" 
                        value={formData.loanAmount} 
                        onChange={handleChange} 
                        placeholder="Enter amount (Min ₹50,000)"
                        min="50000"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="loanTenure">Loan Tenure (Years) <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.loanTenure} 
                        onValueChange={(value) => handleSelectChange('loanTenure', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select tenure" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Year</SelectItem>
                          <SelectItem value="2">2 Years</SelectItem>
                          <SelectItem value="3">3 Years</SelectItem>
                          <SelectItem value="4">4 Years</SelectItem>
                          <SelectItem value="5">5 Years</SelectItem>
                          <SelectItem value="7">7 Years</SelectItem>
                          <SelectItem value="10">10 Years</SelectItem>
                          <SelectItem value="15">15 Years</SelectItem>
                          <SelectItem value="20">20 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="loanPurpose">Loan Purpose <span className="text-red-500">*</span></Label>
                      <Input 
                        id="loanPurpose" 
                        name="loanPurpose" 
                        value={formData.loanPurpose} 
                        onChange={handleChange} 
                        placeholder="E.g., Home renovation, Business expansion"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <Label>Do you have any existing loans?</Label>
                    <RadioGroup 
                      value={formData.existingLoan} 
                      onValueChange={(value) => handleSelectChange('existingLoan', value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="existingLoan-yes" />
                        <Label htmlFor="existingLoan-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="existingLoan-no" />
                        <Label htmlFor="existingLoan-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              {/* Step 3: Employment & Income */}
              {currentStep === 3 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Employment & Income Details</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="block font-medium">Employment Type <span className="text-red-500">*</span></Label>
                      <RadioGroup 
                        value={formData.employmentType}
                        onValueChange={(value) => handleSelectChange('employmentType', value)}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                      >
                        {[
                          { id: 'salaried', label: 'Salaried' },
                          { id: 'selfEmployed', label: 'Self-Employed' },
                          { id: 'businessOwner', label: 'Business Owner' },
                          { id: 'other', label: 'Other' }
                        ].map((type) => (
                          <div key={type.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={type.id} id={type.id} />
                            <Label htmlFor={type.id}>{type.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    {formData.employmentType === 'salaried' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                          <Input 
                            id="companyName" 
                            name="companyName" 
                            value={formData.companyName} 
                            onChange={handleChange} 
                            placeholder="Your employer's name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="designation">Designation <span className="text-red-500">*</span></Label>
                          <Input 
                            id="designation" 
                            name="designation" 
                            value={formData.designation} 
                            onChange={handleChange} 
                            placeholder="Your job title"
                            required
                          />
                        </div>
                      </div>
                    )}
                    
                    {formData.employmentType === 'self-employed' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="businessNature">Nature of Profession <span className="text-red-500">*</span></Label>
                          <Input 
                            id="businessNature" 
                            name="businessNature" 
                            value={formData.businessNature} 
                            onChange={handleChange} 
                            placeholder="E.g., Doctor, Consultant, Freelancer"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="businessVintage">Years in Profession <span className="text-red-500">*</span></Label>
                          <Select 
                            value={formData.businessVintage} 
                            onValueChange={(value) => handleSelectChange('businessVintage', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select years" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="10+">More than 10 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                    
                    {formData.employmentType === 'business-owner' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="businessName">Business Name <span className="text-red-500">*</span></Label>
                          <Input 
                            id="businessName" 
                            name="businessName" 
                            value={formData.businessName} 
                            onChange={handleChange} 
                            placeholder="Your business name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
                          <Input 
                            id="businessType" 
                            name="businessType" 
                            value={formData.businessType} 
                            onChange={handleChange} 
                            placeholder="E.g., Retail, Manufacturing, Services"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="businessVintage">Years in Business <span className="text-red-500">*</span></Label>
                          <Select 
                            value={formData.businessVintage} 
                            onValueChange={(value) => handleSelectChange('businessVintage', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select years" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="10+">More than 10 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="gstin">GSTIN (if applicable)</Label>
                          <Input 
                            id="gstin" 
                            name="gstin" 
                            value={formData.gstin} 
                            onChange={handleChange} 
                            placeholder="Your GST identification number"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="workExperience">Total Work Experience</Label>
                        <Select 
                          value={formData.workExperience} 
                          onValueChange={(value) => handleSelectChange('workExperience', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="monthlyIncome">Monthly Income (₹) <span className="text-red-500">*</span></Label>
                        <Input
                          id="monthlyIncome"
                          name="monthlyIncome"
                          type="number"
                          value={formData.monthlyIncome}
                          onChange={handleChange}
                          placeholder="Enter your monthly income"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additionalIncome">Additional Monthly Income (₹)</Label>
                        <Input
                          id="additionalIncome"
                          name="additionalIncome"
                          type="number"
                          value={formData.additionalIncome}
                          onChange={handleChange}
                          placeholder="Any additional income"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Document Upload & Terms */}
              {Number(currentStep) === 4 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Document Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Document Information</h3>
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-blue-800">
                          Our representative will contact you to collect the necessary documents after reviewing your application.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Document Type */}
                        <div className="space-y-2">
                          <Label htmlFor="documentType">Document Type</Label>
                          <Select 
                            value={formData.documentType}
                            onValueChange={(value) => handleSelectChange('documentType', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select document type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                              <SelectItem value="pan">PAN Card</SelectItem>
                              <SelectItem value="passport">Passport</SelectItem>
                              <SelectItem value="voter">Voter ID</SelectItem>
                              <SelectItem value="driving">Driving License</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {/* Document Number */}
                        <div className="space-y-2">
                          <Label htmlFor="documentNumber">Document Number</Label>
                          <Input 
                            id="documentNumber"
                            name="documentNumber"
                            value={formData.documentNumber}
                            onChange={handleChange}
                            placeholder="Enter document number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-8" />
                  
                  <h3 className="text-xl font-semibold mb-4">Contact Preference</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Preferred Mode of Communication</Label>
                      <RadioGroup 
                        value={formData.contactPreference} 
                        onValueChange={(value) => handleSelectChange('contactPreference', value)}
                        className="flex flex-wrap gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                          <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Best Time to Contact</Label>
                      <RadioGroup 
                        value={formData.bestTimeToCall} 
                        onValueChange={(value) => handleSelectChange('bestTimeToCall', value)}
                        className="flex flex-wrap gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="time-morning" />
                          <Label htmlFor="time-morning">Morning (9AM-12PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="time-afternoon" />
                          <Label htmlFor="time-afternoon">Afternoon (12PM-5PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="time-evening" />
                          <Label htmlFor="time-evening">Evening (5PM-8PM)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <Separator className="my-8" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="agreeTerms" 
                        checked={formData.agreeTerms} 
                        onCheckedChange={(checked: boolean) => handleCheckboxChange('agreeTerms', checked)}
                      />
                      <div className="flex-grow">
                        <Label 
                          htmlFor="agreeTerms" 
                          className="text-sm text-gray-700"
                        >
                          I agree to the Terms & Conditions, Privacy Policy, and consent to the processing of my personal data for the purpose of this loan application. I confirm that all information provided is accurate and complete.
                        </Label>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-700">
                        By submitting this application, you authorize Credwish to check your credit information with credit bureaus and verify the information provided.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Form Navigation */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="border-credwish-600 text-credwish-600 hover:bg-credwish-50"
                  >
                    Previous
                  </Button>
                )}
                
                {currentStep < 4 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="ml-auto bg-credwish-600 hover:bg-credwish-700"
                  >
                    Next
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="ml-auto bg-credwish-600 hover:bg-credwish-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <motion.section 
        className="section bg-gray-50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading 
              title="Need Assistance?" 
              subtitle="Our loan experts are ready to help you with your application"
              center
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 bg-credish-100 rounded-full flex items-center justify-center text-credish-600 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send us your queries and get a response within 24 hours
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="link" className="text-credwish-600 mt-2">
                  <a href="mailto:chaitanya@credwish.in">chaitanya@credwish.in</a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-credish-100 rounded-full flex items-center justify-center text-credish-600 mb-4"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Phone className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Call Helpline</h3>
              <p className="text-gray-600 mb-4">
                Talk to our experts directly for immediate assistance
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="link" className="text-credwish-600 mt-2">
                  <a href="tel:+917569250960">+91 75692 50960</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Application;
