"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, IndianRupee } from 'lucide-react'; // Using IndianRupee as a placeholder for Maati (Soil/Earth)
import NavLinks from './nav-links';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Using a generic icon, ideally this would be a custom MaatiMap logo */}
          <IndianRupee className="h-8 w-8 text-primary" />
          <div className='flex flex-col'>
            <span className="font-headline text-xl font-bold">MaatiMap</span>
            <span className="text-xs text-muted-foreground font-body">Digital Soul of India</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <IndianRupee className="h-8 w-8 text-primary" />
                   <div className='flex flex-col'>
                    <span className="font-headline text-xl font-bold">MaatiMap</span>
                  </div>
                </Link>
                <NavLinks isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
