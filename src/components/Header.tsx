import Link from 'next/link';
import { CiCalendar } from 'react-icons/ci';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent-default">~</span>
            AM
            <span className="text-accent-default">~</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="https://calendar.app.google/egcEQvNAueKG5j9T7"
            passHref
            target="_blank"
          >
            <Button className="bg-accent-default rounded-full whitespace-nowrap text-black font-semibold hover:text-white">
              <CiCalendar /> Schedule a Call
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
