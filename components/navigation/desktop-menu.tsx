'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center space-x-8">
      <nav className="flex items-center space-x-6">
        {[
          { href: '/', label: 'Home' },
          { href: '/practice-areas', label: 'Practice Areas' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'relative text-sm font-medium transition-colors hover:text-[#c4a777]',
              pathname === href ? 'text-[#c4a777]' : 'text-white'
            )}
          >
            {label}
            {pathname === href && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 h-0.5 bg-[#c4a777] bottom-[-4px]"
                animate
              />
            )}
          </Link>
        ))}
      </nav>
      <Button
        className="bg-[#c4a777] hover:bg-[#c4a777]/90 text-white"
      >
        Schedule Consultation
      </Button>
    </div>
  );
}