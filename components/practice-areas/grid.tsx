'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Briefcase, Shield, Code, Scale, Users, FileText } from 'lucide-react';
import Link from 'next/link';

const practiceAreas = [
  {
    title: 'Corporate Law',
    description: 'Mergers & acquisitions, corporate governance, and business formation.',
    icon: Briefcase,
    link: '/practice-areas/corporate-law',
  },
  {
    title: 'Intellectual Property',
    description: 'Patents, trademarks, copyrights, and trade secrets protection.',
    icon: Shield,
    link: '/practice-areas/intellectual-property',
  },
  {
    title: 'Technology & Startups',
    description: 'Legal guidance for tech companies, from formation to funding.',
    icon: Code,
    link: '/practice-areas/technology-startups',
  },
  {
    title: 'Securities Law',
    description: 'SEC compliance, private placements, and securities offerings.',
    icon: Scale,
    link: '/practice-areas/securities-law',
  },
  {
    title: 'Employment Law',
    description: 'Employment agreements, policies, and dispute resolution.',
    icon: Users,
    link: '/practice-areas/employment-law',
  },
  {
    title: 'Contract Law',
    description: 'Contract drafting, review, and negotiation services.',
    icon: FileText,
    link: '/practice-areas/contract-law',
  },
];

export function PracticeAreasGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-200">
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-[#1a237e] rounded-full w-fit mb-4">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a237e] mb-2">{area.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{area.description}</p>
                  <Link href={area.link}>
                    <Button variant="ghost" className="text-[#1a237e] hover:text-[#1a237e]/90 p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}