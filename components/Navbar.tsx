'use client';
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-blue-800">Portfolio.</h1>
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-green-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-400 transition">Project</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400 transition">About</Link>
          </li>
          
          <li>
            <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
