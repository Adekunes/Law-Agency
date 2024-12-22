'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const caseStudies = [
  {
    title: 'Series A Funding Success',
    client: 'TechStart Inc.',
    description: 'Successfully guided a tech startup through their Series A funding round, securing $10M in investment.',
    outcome: 'Successful funding round and regulatory compliance',
  },
  {
    title: 'Patent Portfolio Protection',
    client: 'InnovateLab',
    description: 'Developed and implemented a comprehensive IP protection strategy for a growing biotech company.',
    outcome: '5 patents secured, trade secrets protected',
  },
  {
    title: 'Corporate Restructuring',
    client: 'Enterprise Solutions',
    description: 'Led a complex corporate restructuring project for a multinational technology company.',
    outcome: 'Streamlined operations, reduced legal risks',
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results for real clients. Explore our recent success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold text-[#1a237e] mb-2">{study.title}</h3>
                <p className="text-[#c4a777] mb-4">{study.client}</p>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-[#1a237e]">Outcome:</p>
                  <p className="text-sm text-gray-600">{study.outcome}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}