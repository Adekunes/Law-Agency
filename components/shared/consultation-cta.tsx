'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ConsultationCTA() {
  return (
    <section className="py-24 bg-[#1a237e]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced legal team today.
          </p>
          <Button
            size="lg"
            className="bg-[#c4a777] hover:bg-[#c4a777]/90 text-white"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}