'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`${link.path === pathName && 'text-accent-default border-b-2 border-accent-default'} capitalize font-medium hover:text-accent-default transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
