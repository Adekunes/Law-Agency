'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Scale } from 'lucide-react';
import { MobileMenu } from './navigation/mobile-menu';
import { DesktopMenu } from './navigation/desktop-menu';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(26, 35, 126, 0)', 'rgba(26, 35, 126, 0.95)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 2px 4px rgba(0,0,0,0.2)']
  );

  return (
    <motion.header
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 w-full z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-white" />
            <span className="font-bold text-xl text-white hidden sm:inline">
              Atlas Legal Partners
            </span>
            <span className="font-bold text-xl text-white sm:hidden">
              Atlas Legal
            </span>
          </Link>

          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}