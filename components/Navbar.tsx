'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-800">Portfolio.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-green-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-400 transition">Projects</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400 transition">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-6 space-y-4 text-lg">
          <Link
            href="/"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
