'use client';

import { motion } from 'framer-motion';
import { Scale, Briefcase, FileText, Code, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const practiceAreas = [
  {
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses of all sizes.',
    icon: Briefcase,
  },
  {
    title: 'Intellectual Property',
    description: 'Protecting your innovations and creative assets.',
    icon: Shield,
  },
  {
    title: 'Technology & Startups',
    description: 'Legal guidance for emerging tech companies.',
    icon: Code,
  },
];

export function PracticeAreas() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Our Practice Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized legal expertise tailored to meet the unique challenges of modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#1a237e] rounded-full mb-4">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a237e] mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}