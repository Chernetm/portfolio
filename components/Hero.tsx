'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-dark text-white min-h-[80vh] rounded-lg my-10 mx-4 md:mx-10 p-10 flex flex-col md:flex-row items-center justify-between shadow-lg">
      {/* Left side text */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Lucius Meshach
          <br />
          <span className="text-primary">I'm a Frontend Developer</span>
        </h1>
        <p className="text-gray-300 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          corrupti atque modi asperiores a maiores rem officiis.
        </p>
        <button className="bg-primary hover:bg-green-600 px-6 py-2 rounded-full text-black font-semibold shadow">
          Download CV
        </button>

        <div className="flex space-x-4 text-primary text-xl mt-2">
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
          <FaYoutube />
        </div>
      </motion.div>

      {/* Right side image */}
      <motion.div
        className="relative mt-10 md:mt-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-60 h-60 rounded-full border-4 border-primary flex items-center justify-center overflow-hidden">
          <Image
            src="/profile-placeholder.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
