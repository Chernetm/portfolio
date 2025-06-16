'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 text-white py-8 mt-16 border-t border-neutral-700"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400 text-center md:text-left">
          © {new Date().getFullYear()} Chernet Mekuria. All rights reserved.
        </p>

        <div className="flex space-x-5 text-xl">
          <a
            href="mailto:chernetmekuria379@gmail.com"
            className="hover:text-yellow-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/chernet-mekuria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
