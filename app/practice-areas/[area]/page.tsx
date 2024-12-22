import { notFound } from 'next/navigation';

const practiceAreaContent = {
  'corporate-law': {
    title: 'Corporate Law',
    description: 'Expert guidance in corporate governance, M&A, and business formation.',
    content: 'Our corporate law practice...'
  },
  'intellectual-property': {
    title: 'Intellectual Property',
    description: 'Protecting your innovations and creative assets.',
    content: 'Our IP practice...'
  },
  'technology-startups': {
    title: 'Technology & Startups',
    description: 'Legal solutions for emerging tech companies.',
    content: 'Our technology practice...'
  },
  'securities-law': {
    title: 'Securities Law',
    description: 'Navigate complex securities regulations with confidence.',
    content: 'Our securities practice...'
  },
  'employment-law': {
    title: 'Employment Law',
    description: 'Comprehensive employment law services.',
    content: 'Our employment law practice...'
  },
  'contract-law': {
    title: 'Contract Law',
    description: 'Expert contract drafting and negotiation.',
    content: 'Our contract law practice...'
  }
};

export default function PracticeAreaPage({ params }: { params: { area: string } }) {
  const areaContent = practiceAreaContent[params.area as keyof typeof practiceAreaContent];

  if (!areaContent) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1a237e] mb-4">{areaContent.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{areaContent.description}</p>
        <div className="prose max-w-none">
          <p>{areaContent.content}</p>
        </div>
      </div>
    </div>
  );
}