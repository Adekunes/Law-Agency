'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-[#c4a777]">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-[#1a237e]">
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className={cn(
              'text-lg font-medium transition-colors hover:text-[#c4a777]',
              pathname === '/' ? 'text-[#c4a777]' : 'text-white'
            )}
          >
            Home
          </Link>
          <Link
            href="/practice-areas"
            className={cn(
              'text-lg font-medium transition-colors hover:text-[#c4a777]',
              pathname === '/practice-areas' ? 'text-[#c4a777]' : 'text-white'
            )}
          >
            Practice Areas
          </Link>
          <Link
            href="/contact"
            className={cn(
              'text-lg font-medium transition-colors hover:text-[#c4a777]',
              pathname === '/contact' ? 'text-[#c4a777]' : 'text-white'
            )}
          >
            Contact
          </Link>
          <Button className="bg-[#c4a777] hover:bg-[#c4a777]/90 text-white w-full mt-4">
            Schedule Consultation
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}