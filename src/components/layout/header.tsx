'use client';

import {
  GiIndiaGate, GiMusicalNotes, GiChopsticks, GiClassicalKnowledge,
  GiBookmark, GiLotus
} from 'react-icons/gi';
import { TbBuildingPavilion } from 'react-icons/tb';
import { PiPlant } from 'react-icons/pi';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isHomePage = pathname === '/';

  const navLinks = [
    { icon: <PiPlant />, label: 'Art', route: '/discover?category=art' },
    { icon: <GiChopsticks />, label: 'Food', route: '/discover?category=food' },
    { icon: <TbBuildingPavilion />, label: 'Heritage', route: '/discover?category=heritage' },
    { icon: <GiClassicalKnowledge />, label: 'Rituals', route: '/discover?category=rituals' },
    { icon: <GiMusicalNotes />, label: 'Music', route: '/discover?category=music' },
    { icon: <GiLotus />, label: 'Festivals', route: '/discover?category=festivals' },
    { icon: <GiIndiaGate />, label: 'Discover', route: '/discover' },
    { icon: <GiBookmark />, label: 'Bookmarks', route: '/bookmarks' },
  ];

  return (
    <header className="bg-[#1C1C1E] text-[#F3E4BE] px-6 py-4 flex items-center justify-between shadow-md z-50 relative">

      {/* Logo - Click to go home */}
      <Link href="/" className="flex items-center space-x-2">
        <img src="https://i.postimg.cc/4xTXVnpN/mandala.png" alt="MaatiMap Logo" className="h-8" />
        <span className="text-xl font-bold text-[#F3E4BE]">MaatiMap</span>
      </Link>

      {/* Desktop Nav */}
      {isHomePage && (
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ icon, label, route }) => (
            <Link key={label} href={route} className="flex flex-col items-center text-sm text-[#F3E4BE] hover:text-[#B08D57]">
              <div className="text-xl">{icon}</div>
              <span className="mt-1">{label}</span>
            </Link>
          ))}
        </nav>
      )}

      {/* Header Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-[#F3E4BE] hover:text-[#B08D57]"><FaSearch /></button>

        {isHomePage && (
          <button className="md:hidden text-[#F3E4BE]" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <FaBars />
          </button>
        )}

        <Link href="/auth/login" className="text-[#F3E4BE] hover:text-[#B08D57]">
          <FaUser />
        </Link>

      </div>

      {/* Mobile Dropdown (Modern compact) */}
      {isHomePage && showMobileMenu && (
        <div className="absolute top-full right-4 mt-2 w-60 bg-[#2B2B2E] rounded-lg shadow-lg py-3 px-4 md:hidden z-50">
          {navLinks.map(({ icon, label, route }) => (
            <Link key={label} href={route} className="flex items-center gap-3 py-2 px-2 rounded-md text-sm text-[#F3E4BE] hover:bg-[#3A3A3D] transition">
              <div className="text-lg">{icon}</div>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
