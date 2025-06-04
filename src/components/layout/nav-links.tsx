"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MapPin, Compass, BookHeart, MessagesSquare, LayoutGrid, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Map', icon: MapPin },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/feed', label: 'Feed', icon: LayoutGrid },
  { href: '/nearby', label: 'Nearby', icon: Compass },
  { href: '/bookmarks', label: 'Bookmarks', icon: BookHeart },
  { href: '/ai-guide', label: 'AI Guide', icon: MessagesSquare },
];

interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void; // For closing mobile sheet
}

export default function NavLinks({ isMobile = false, onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onLinkClick}
          className={cn(
            "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-foreground hover:bg-accent hover:text-accent-foreground",
            isMobile ? "text-lg w-full" : ""
          )}
        >
          <item.icon className={cn("h-5 w-5", isMobile ? "mr-3" : "mr-2")} />
          {item.label}
        </Link>
      ))}
    </>
  );
}
