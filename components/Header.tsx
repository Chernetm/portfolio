'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = ['Home', 'About', 'Portfolio', 'Service', 'Contact'];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-dark text-white py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Portfolio.</h1>
        <nav className="space-x-6">
          {navItems.map((item) => {
            const href = `/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={`hover:text-primary transition ${
                  isActive ? 'text-primary' : ''
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
