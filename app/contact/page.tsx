import { ContactHero } from '@/components/contact/hero';
import { ContactForm } from '@/components/contact/form';
import { ContactInfo } from '@/components/contact/info';
import { FAQ } from '@/components/contact/faq';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <FAQ />
    </div>
  );
}