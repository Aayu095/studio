"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Leaf, Search, User } from 'lucide-react';
import NavLinks from './nav-links';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">MaatiMap</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
          <NavLinks />
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <User className="h-5 w-5" />
            <span className="sr-only">User Profile</span>
          </Button>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-6">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="flex items-center space-x-2 mb-6">
                    <Leaf className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl font-bold text-foreground">MaatiMap</span>
                  </Link>
                  <NavLinks isMobile={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
