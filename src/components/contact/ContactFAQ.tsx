
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const ContactFAQ = () => {
  const faqs = [
    {
      id: 'track-application',
      question: "How can I track my loan application status?",
      answer: "You can track your loan application status by logging into your customer portal on our website or by contacting our customer service team with your application reference number. We also send regular updates via SMS and email."
    },
    {
      id: 'response-time',
      question: "What is the response time for inquiries?",
      answer: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please contact our customer service hotline during business hours for immediate assistance."
    },
    {
      id: 'branches',
      question: "Do you have branches in other cities?",
      answer: "Yes, we have branches in major cities across India including Delhi, Bangalore, Chennai, Kolkata, and Hyderabad. Visit our locations page for detailed information about branch addresses and contact details."
    },
    {
      id: 'appointment',
      question: "Can I schedule an appointment with a loan advisor?",
      answer: "Absolutely! You can schedule an appointment with our loan advisors by filling out the contact form above or by calling our customer service. We offer both in-person and virtual consultations to suit your convenience."
    },
    {
      id: 'documents',
      question: "What documents do I need to bring for a consultation?",
      answer: "For a consultation, please bring your ID proof, income documents (salary slips or ITR), bank statements for the last 6 months, and any existing loan details. Our advisor will guide you on specific requirements based on your loan type."
    },
    {
      id: 'fee',
      question: "Is there a fee for consultation?",
      answer: "No, our initial consultation is completely free. Our loan advisors will assess your requirements and provide personalized recommendations without any charges."
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 text-left hover:no-underline hover:bg-gray-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600 text-base">
                <p className="mt-2">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ContactFAQ;
