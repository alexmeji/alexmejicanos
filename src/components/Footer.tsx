import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-3">
      <div className="border-b border-white/20 w-full" />
      <span className="block text-sm text-white sm:text-center p-5">
        © {year}{' '}
        <Link href="https://deerlab.studio/" className="hover:underline">
          Deerlab Studio
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
