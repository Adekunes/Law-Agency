'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas of law does Atlas Legal Partners specialize in?',
    answer: 'We specialize in corporate law, intellectual property, technology law, securities law, employment law, and contract law. Our expertise is particularly focused on serving modern businesses and startups.',
  },
  {
    question: 'How do I schedule an initial consultation?',
    answer: 'You can schedule a consultation by filling out our contact form, calling our office directly, or clicking the "Schedule Consultation" button in the navigation. We typically respond within 24 business hours.',
  },
  {
    question: 'What should I prepare for the initial consultation?',
    answer: 'Please prepare a brief overview of your legal needs, any relevant documents, and specific questions you\'d like to discuss. This helps us make the most of our time together.',
  },
  {
    question: 'What are your fee structures?',
    answer: 'We offer various fee arrangements including hourly rates, flat fees, and retainer agreements. The specific structure depends on your needs and the type of legal services required. We\'ll discuss this during the initial consultation.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#1a237e]">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}