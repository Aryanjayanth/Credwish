import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/shared/SectionHeading';

const Application = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  // Parse query string to get pre-selected product
  const queryParams = new URLSearchParams(location.search);
  const preSelectedProduct = queryParams.get('product');

  // Form state with added business-related properties
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
    
    // Business/Self-employed details
    businessNature: '',
    businessName: '',
    businessType: '',
    businessVintage: '',
    gstin: '',
    
    // Contact preference
    contactPreference: 'email',
    bestTimeToCall: 'morning',
    
    // Documents
    identityProof: null,
    addressProof: null,
    incomeProof: null,
    
    // Terms
    agreeTerms: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (name, checked) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
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
      if (!formData.employmentType || !formData.monthlyIncome) {
        toast({
          title: "Required Fields Missing",
          description: "Please provide employment type and monthly income.",
          variant: "destructive",
        });
        return false;
      }
      if (formData.employmentType === 'salaried' && (!formData.companyName || !formData.designation)) {
        toast({
          title: "Required Fields Missing",
          description: "Please provide company name and designation.",
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically submit the form data to your backend
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "Your loan application has been successfully submitted. Our team will review it shortly.",
      });
      window.scrollTo(0, 0);
    }, 1500);
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
      <Layout>
        <div className="section">
          <div className="container mx-auto max-w-3xl">
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
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
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
                      <Label>Employment Type <span className="text-red-500">*</span></Label>
                      <RadioGroup 
                        value={formData.employmentType} 
                        onValueChange={(value) => handleSelectChange('employmentType', value)}
                        className="flex flex-wrap gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="salaried" id="employmentType-salaried" />
                          <Label htmlFor="employmentType-salaried">Salaried</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self-employed" id="employmentType-self-employed" />
                          <Label htmlFor="employmentType-self-employed">Self-Employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business-owner" id="employmentType-business-owner" />
                          <Label htmlFor="employmentType-business-owner">Business Owner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="employmentType-other" />
                          <Label htmlFor="employmentType-other">Other</Label>
                        </div>
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
                            <SelectItem value="10+">More than 10 years</SelectItem>
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
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Document Upload & Terms */}
              {currentStep === 4 && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Document Upload</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="identityProof">Identity Proof (PAN/Aadhar/Passport)</Label>
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">Click or drag & drop file to upload</p>
                        <p className="text-xs text-gray-500">Supported formats: JPG, PNG, PDF (Max: 5MB)</p>
                        <Input 
                          id="identityProof" 
                          name="identityProof" 
                          type="file" 
                          className="hidden" 
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => document.getElementById('identityProof').click()}
                        >
                          Browse Files
                        </Button>
                        {formData.identityProof && (
                          <p className="text-green-600 text-sm mt-2">
                            File selected: {formData.identityProof.name}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="addressProof">Address Proof (Utility Bill/Bank Statement)</Label>
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">Click or drag & drop file to upload</p>
                        <p className="text-xs text-gray-500">Supported formats: JPG, PNG, PDF (Max: 5MB)</p>
                        <Input 
                          id="addressProof" 
                          name="addressProof" 
                          type="file" 
                          className="hidden" 
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => document.getElementById('addressProof').click()}
                        >
                          Browse Files
                        </Button>
                        {formData.addressProof && (
                          <p className="text-green-600 text-sm mt-2">
                            File selected: {formData.addressProof.name}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="incomeProof">Income Proof (Salary Slip/IT Returns)</Label>
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">Click or drag & drop file to upload</p>
                        <p className="text-xs text-gray-500">Supported formats: JPG, PNG, PDF (Max: 5MB)</p>
                        <Input 
                          id="incomeProof" 
                          name="incomeProof" 
                          type="file" 
                          className="hidden" 
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => document.getElementById('incomeProof').click()}
                        >
                          Browse Files
                        </Button>
                        {formData.incomeProof && (
                          <p className="text-green-600 text-sm mt-2">
                            File selected: {formData.incomeProof.name}
                          </p>
                        )}
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
                        onCheckedChange={(checked) => handleCheckboxChange('agreeTerms', checked)}
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
      <section className="section bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading 
            title="Need Assistance?" 
            subtitle="Our loan experts are ready to help you with your application"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-credwish-100 rounded-full flex items-center justify-center text-credwish-600 mb-4">
                <User className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Branch</h3>
              <p className="text-gray-600">
                Schedule an appointment at our nearest branch for in-person assistance
              </p>
              <Button asChild variant="link" className="text-credwish-600 mt-4">
                <a href="/contact#locations">Find Branches</a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-credwish-100 rounded-full flex items-center justify-center text-credwish-600 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600">
                Send us your queries and get a response within 24 hours
              </p>
              <Button asChild variant="link" className="text-credwish-600 mt-4">
                <a href="mailto:support@credwish.com">support@credwish.com</a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-credwish-100 rounded-full flex items-center justify-center text-credwish-600 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Helpline</h3>
              <p className="text-gray-600">
                Talk to our experts directly for immediate assistance
              </p>
              <Button asChild variant="link" className="text-credwish-600 mt-4">
                <a href="tel:+18001234567">1-800-123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Application;
