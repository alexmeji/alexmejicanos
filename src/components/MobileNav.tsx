'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-default" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          {/* Logo */}
          <SheetTitle className="mt-32 mb-20 text-center text-white">
            <div className="text-4xl font-semibold">
              <div className="text-accent-default">~</div>
              AM
              <div className="text-accent-default">~</div>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`${link.path === pathName && 'text-accent-default border-b-2 border-accent-default'} text-xl capitalize hover:text-accent-default transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
