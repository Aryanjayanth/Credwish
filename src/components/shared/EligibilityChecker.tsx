
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EligibilityCheckerProps {
  compact?: boolean;
}

const EligibilityChecker = ({ compact = false }: EligibilityCheckerProps) => {
  const [salary, setSalary] = useState('');
  const [loanType, setLoanType] = useState('personal');
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('5');
  const [emiOutgo, setEmiOutgo] = useState('');
  const [existingEmi, setExistingEmi] = useState('0');
  const [result, setResult] = useState<'eligible' | 'notEligible' | null>(null);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  const checkEligibility = () => {
    if (!salary || !loanType || !loanAmount) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields to check your eligibility.",
        variant: "destructive",
      });
      return;
    }

    const monthlySalary = parseFloat(salary);
    const loanAmountValue = parseFloat(loanAmount);
    const existingEmiValue = parseFloat(existingEmi || '0');
    
    // Calculate EMI (simplified calculation)
    // Assuming 10% interest rate and 5 years tenure
    const rate = 10 / 12 / 100;
    const time = parseInt(tenure) * 12;
    
    const emi = loanAmountValue * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalEmi = emi + existingEmiValue;
    
    setEmiOutgo(totalEmi.toFixed(0));
    
    // Check if EMI is less than 60% of income
    const isEligible = totalEmi <= (monthlySalary * 0.6);
    
    setResult(isEligible ? 'eligible' : 'notEligible');
    setShowResults(true);
  };
  
  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="shadow-lg border-0 rounded-xl overflow-hidden bg-white">
        <CardHeader className="bg-gradient-to-r from-credwish-800 to-credwish-700 text-white py-4 sm:py-6">
          <CardTitle className="text-xl sm:text-2xl font-semibold text-center text-white font-playfair">Quick Eligibility Check</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-5 md:p-6 bg-white">
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-gray-800 mb-2 font-medium text-left text-sm sm:text-base">Annual Income (₹)</label>
              <Input
                type="number"
                placeholder="Enter your annual income"
                onChange={(e) => setSalary((parseInt(e.target.value) / 12).toString())}
                className="bg-white border border-gray-300 focus:border-credwish-500 focus:ring-1 focus:ring-credwish-500 h-10 sm:h-12 text-sm sm:text-base text-left text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-gray-800 mb-2 font-medium text-left text-sm sm:text-base">Employment Type</label>
              <Select value={loanType} onValueChange={setLoanType}>
                <SelectTrigger className="bg-white border border-gray-300 focus:border-credwish-500 focus:ring-1 focus:ring-credwish-500 h-10 sm:h-12 text-sm sm:text-base text-left text-gray-900">
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Salaried</SelectItem>
                  <SelectItem value="business">Self-Employed</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-gray-800 mb-2 font-medium text-left text-sm sm:text-base">Required Loan Amount (₹)</label>
              <Input
                type="number"
                placeholder="Enter required loan amount"
                onChange={(e) => setLoanAmount(e.target.value)}
                value={loanAmount}
                className="bg-white border border-gray-300 focus:border-credwish-500 focus:ring-1 focus:ring-credwish-500 h-10 sm:h-12 text-sm sm:text-base text-left text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-gray-800 mb-2 font-medium text-left text-sm sm:text-base">Loan Tenure (Years)</label>
              <Select value={tenure} onValueChange={setTenure}>
                <SelectTrigger className="bg-white border border-gray-300 focus:border-credwish-500 focus:ring-1 focus:ring-credwish-500 h-10 sm:h-12 text-sm sm:text-base text-left text-gray-900">
                  <SelectValue placeholder="Select tenure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 year</SelectItem>
                  <SelectItem value="2">2 years</SelectItem>
                  <SelectItem value="3">3 years</SelectItem>
                  <SelectItem value="5">5 years</SelectItem>
                  <SelectItem value="10">10 years</SelectItem>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {!compact && (
              <div>
                <label className="block text-gray-800 mb-2 font-medium text-left text-sm sm:text-base">Existing EMI Amount (if any)</label>
                <Input
                  type="number"
                  placeholder="Enter existing EMI amount"
                  onChange={(e) => setExistingEmi(e.target.value)}
                  value={existingEmi}
                  className="bg-white border border-gray-300 focus:border-credwish-500 focus:ring-1 focus:ring-credwish-500 h-10 sm:h-12 text-sm sm:text-base text-left text-gray-900"
                />
              </div>
            )}

            <Button 
              className="w-full bg-credwish-600 hover:bg-credwish-700 text-white h-12 sm:h-14 text-base sm:text-lg font-medium mt-2"
              onClick={checkEligibility}
            >
              Check Eligibility
            </Button>
          </div>
          
          {showResults && (
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
              <div className={`p-3 sm:p-4 rounded-lg ${
                result === 'eligible' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <h4 className={`text-base sm:text-lg font-medium mb-2 ${
                  result === 'eligible' ? 'text-green-800' : 'text-red-800'
                } text-left font-playfair`}>
                  {result === 'eligible' ? 'You Are Eligible!' : 'Not Eligible'}
                </h4>
                <p className={`text-xs sm:text-sm ${
                  result === 'eligible' ? 'text-green-700' : 'text-red-700'
                } text-left leading-relaxed`}>
                  {result === 'eligible' 
                    ? 'Based on your income, you qualify for this loan. Apply now to proceed!' 
                    : 'Your EMI exceeds 60% of your income. Consider reducing the loan amount or extending the tenure.'}
                </p>
                
                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white p-2 sm:p-3 rounded border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-600 text-left">Monthly EMI</p>
                    <p className="font-semibold text-left text-gray-900 text-sm sm:text-base">₹{parseInt(emiOutgo).toLocaleString()}</p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-600 text-left">Income Ratio</p>
                    <p className="font-semibold text-left text-gray-900 text-sm sm:text-base">
                      {(parseInt(emiOutgo) / parseFloat(salary) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
                
                {result === 'eligible' && !compact && (
                  <div className="mt-3 sm:mt-4">
                    <Button asChild className="w-full bg-credwish-600 hover:bg-credwish-700 text-white h-10 sm:h-12 text-sm sm:text-base">
                      <a href="/application">Apply Now</a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EligibilityChecker;
