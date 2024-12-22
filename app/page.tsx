import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/hero-section';
import { PracticeAreas } from '@/components/practice-areas';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PracticeAreas />
      <Testimonials />
    </div>
  );
}