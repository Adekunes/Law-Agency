'use client';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Atlas Legal Partners provided exceptional guidance during our Series A funding. Their expertise in both corporate law and technology made the process seamless.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, InnovateLab',
    content: 'Their understanding of intellectual property law helped us protect our innovations effectively. Highly recommended for tech startups.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'General Counsel, Enterprise Solutions',
    content: 'The team at Atlas Legal Partners consistently delivers high-quality legal services with a modern approach that aligns perfectly with our business needs.',
  },
  {
    name: 'David Thompson',
    role: 'CTO, CloudTech Solutions',
    content: 'Their expertise in technology law was invaluable during our software patent applications. They truly understand the tech industry.',
  },
  {
    name: 'Lisa Martinez',
    role: 'Founder, BioMed Innovations',
    content: 'Outstanding support with our IP portfolio management. They helped us secure crucial patents in a highly competitive field.',
  },
  {
    name: 'James Wilson',
    role: 'Managing Director, Capital Ventures',
    content: 'The corporate law team at Atlas Legal Partners has been instrumental in our M&A transactions. Their attention to detail is unmatched.',
  },
  {
    name: 'Rachel Kim',
    role: 'CEO, AI Solutions Corp',
    content: 'Their understanding of both AI technology and legal frameworks helped us navigate complex regulatory requirements seamlessly.',
  },
  {
    name: 'Mark Anderson',
    role: 'Founder, GreenTech Innovations',
    content: 'Exceptional guidance in both environmental regulations and corporate structuring. They helped us build a solid foundation for our sustainable tech company.',
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our clients about their experience working with Atlas Legal Partners.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="p-6 h-full">
                  <blockquote className="space-y-4 h-full flex flex-col">
                    <p className="text-gray-600 flex-grow">{testimonial.content}</p>
                    <footer>
                      <p className="font-semibold text-[#1a237e]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </footer>
                  </blockquote>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}