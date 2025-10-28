
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  loanType: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    loanType: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.loanType) {
      newErrors.loanType = 'Please select a loan type';
    }
    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/xpwozvqq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          loanType: formData.loanType,
          _subject: `New Loan Inquiry from ${formData.name}`,
          _replyto: formData.email,
          _format: 'plain',
          _template: 'box',
          _next: window.location.href
        })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "We've received your message and will get back to you within 24 hours.",
        variant: "default",
        action: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Success</span>
          </div>
        ),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: ''
      });
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to Send Message",
        description: "We couldn't send your message. Please try again later or contact us directly at support@credwish.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const loanTypes = [
    'Personal Loan',
    'Business Loan',
    'Home Loan',
    'Education Loan',
    'Gold Loan',
    'Car Loan'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="loanType" className="text-sm font-medium text-gray-700">
          Loan Type
        </Label>
        <Select
          value={formData.loanType}
          onValueChange={(value) => setFormData({...formData, loanType: value})}
        >
          <SelectTrigger className={`mt-1 ${errors.loanType ? 'border-red-500' : ''}`}>
            <SelectValue placeholder="Select loan type" />
          </SelectTrigger>
          <SelectContent>
            {loanTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.loanType && <p className="mt-1 text-sm text-red-500">{errors.loanType}</p>}
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-credwish-600 hover:bg-credwish-700 transition-colors h-12 text-base font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
