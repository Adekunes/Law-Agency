import { PracticeAreasHero } from '@/components/practice-areas/hero';
import { PracticeAreasGrid } from '@/components/practice-areas/grid';
import { CaseStudies } from '@/components/practice-areas/case-studies';
import { ConsultationCTA } from '@/components/shared/consultation-cta';

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen">
      <PracticeAreasHero />
      <PracticeAreasGrid />
      <CaseStudies />
      <ConsultationCTA />
    </div>
  );
}