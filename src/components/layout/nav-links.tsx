"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Palette, CookingPot, Landmark, HandHeart, Music as MusicIconLucide, PartyPopper, Search, LayoutGrid, BookHeart } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon; // Icon is optional for desktop, used for mobile
}

const mainNavItems: NavItem[] = [
  { href: '/discover?category=art-forms', label: 'Art', icon: Palette },
  { href: '/discover?category=food', label: 'Food', icon: CookingPot },
  { href: '/discover?category=heritage-sites', label: 'Heritage', icon: Landmark },
  { href: '/discover?category=rituals', label: 'Rituals', icon: HandHeart },
  { href: '/discover?category=music', label: 'Music', icon: MusicIconLucide },
  { href: '/discover?category=festivals', label: 'Festivals', icon: PartyPopper },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/feed', label: 'Feed', icon: LayoutGrid },
  { href: '/bookmarks', label: 'Bookmarks', icon: BookHeart },
];


interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void; // For closing mobile sheet
}

export default function NavLinks({ isMobile = false, onLinkClick }: NavLinksProps) {
  const pathname = usePathname();
  const currentCategory = pathname.includes('/discover?category=') ? pathname.split('=')[1] : null;

  return (
    <>
      {mainNavItems.map((item) => {
        const isActive = item.href.startsWith('/discover?category=') 
          ? currentCategory === item.href.split('=')[1] && pathname.startsWith('/discover')
          : pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "text-foreground hover:bg-accent hover:text-accent-foreground",
              isMobile ? "text-lg w-full justify-start" : "text-base",
            )}
          >
            {isMobile && item.icon && <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />}
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
