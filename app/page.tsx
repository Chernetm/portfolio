// 'use client';

// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20 flex flex-col items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         <Image
//           src="/profile-placeholder.png" // Replace with your image in /public
//           alt="Chernet Mekuria"
//           width={140}
//           height={140}
//           className="rounded-full mx-auto border-4 border-yellow-400 shadow-lg mb-4"
//         />
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">Chernet Mekuria</h1>
//         <p className="text-lg text-gray-300 mb-6">
//           Full Stack Developer · Computer Engineering Student · Data Analyst
//         </p>

//         <div className="flex justify-center space-x-6 text-2xl mb-6">
//           <a href="mailto:chernetmekuria379@gmail.com" className="hover:text-yellow-400 transition"><FaEnvelope /></a>
//           <a href="https://github.com" className="hover:text-gray-400 transition"><FaGithub /></a>
//           <a href="https://www.linkedin.com/in/chernet-mekuria" className="hover:text-blue-500 transition"><FaLinkedin /></a>
//         </div>

//         <Link href="/about">
//           <span className="inline-block bg-yellow-400 text-black font-medium py-2 px-5 rounded-full hover:bg-yellow-300 transition">
//             More About Me
//           </span>
//         </Link>
//       </motion.div>
//     </main>
//   );
// }
import Portfolio from '@/components/Portfolio';

export default function HomePage() {
  return (
    <main className="bg-[#0F172A] min-h-screen text-white">
      <Portfolio />
    </main>
  );
}

