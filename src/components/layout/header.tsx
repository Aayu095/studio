// components/Header.tsx
'use client';

import { GiIndiaGate, GiMusicalNotes, GiChopsticks, GiClassicalKnowledge, GiBookmark, GiLotus } from 'react-icons/gi';
import { TbBuildingPavilion } from 'react-icons/tb';
import { PiPlant } from 'react-icons/pi';
import { FaSearch, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Header() {
  return (
    <header className="bg-[#1C1C1E] text-[#F3E4BE] px-6 py-4 flex items-center justify-between shadow-md z-50 relative">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="https://i.postimg.cc/4xTXVnpN/mandala.png" alt="MaatiMap Logo" className="h-8" />
        <span className="text-xl font-bold text-[#F3E4BE]">MaatiMap</span>
      </div>

      {/* Navigation Icons */}
      <nav className="hidden md:flex items-center space-x-6">
        <NavItem icon={<PiPlant />} label="Art" route="/discover?category=art" />
        <NavItem icon={<GiChopsticks />} label="Food" route="/discover?category=food" />
        <NavItem icon={<TbBuildingPavilion />} label="Heritage" route="/discover?category=heritage" />
        <NavItem icon={<GiClassicalKnowledge />} label="Rituals" route="/discover?category=rituals" />
        <NavItem icon={<GiMusicalNotes />} label="Music" route="/discover?category=music" />
        <NavItem icon={<GiLotus />} label="Festivals" route="/discover?category=festivals" />
        <NavItem icon={<GiIndiaGate />} label="Discover" route="/discover" />
        <NavItem icon={<GiBookmark />} label="Bookmarks" route="/bookmarks" />
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-[#F3E4BE] hover:text-[#B08D57]">
          <FaSearch />
        </button>
        <button className="text-[#F3E4BE] hover:text-[#B08D57]">
          <FaUser />
        </button>
      </div>
    </header>
  );
}

// Reusable nav item
function NavItem({ icon, label, route }: { icon: JSX.Element; label: string; route: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div
      className="flex flex-col items-center text-sm text-[#F3E4BE] hover:text-[#B08D57] cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-xl">{icon}</div>
      <span className="mt-1">{label}</span>
    </div>
  );
}
