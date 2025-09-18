'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Secure School Management Portal',
    description: 'Real-time exam management with authentication, payment gateway (Chapa), and student dashboard. Built with Next.js, PostgreSQL.',
    tech: ['Next.js', 'Tailwind', 'Chapa', 'PostgreSQL'],
    github: 'https://github.com/Chernetm/school_mg',
    live: 'https://school-mg.vercel.app/',
  },
  {
    title: 'Ministry Result Portal',
    description: 'Displays grade 6 ministry results with QR code verification, backend in Node.js.',
    tech: ['React', 'Node.js', 'MongoDB', 'QR Code'],
    github: 'https://github.com/Chernetm/portal',
    live: 'https://portal-pi-sooty.vercel.app/',
  },
  {
    title: 'Online Exam System',
    description: 'Monitors cheating using webcam, supports multiple question types, with proctoring dashboard.',
    tech: ['Next.js', 'TensorFlow.js', 'Socket.io'],
    github: 'https://github.com/Chernetm/online-exam',
    live: 'https://stepupacademy.vercel.app/',
  },
  {
  title: 'Smart Parking System',
  description: 'An intelligent parking system for efficient space management and real-time availability updates. Features include user reservation, admin panel, and parking history tracking.',
  tech: ['Java', 'JavaFX', 'MySQL'],
  github: 'https://github.com/BirukTesfaye0940/Smart-Parking-System',
  live: 'https://github.com/BirukTesfaye0940/Smart-Parking-System',
},
{
  title: 'EduTrack (Java Version)',
  description: 'A student management system supporting course registration, grade tracking, and user roles for administrators, students, and instructors.',
  tech: ['Java', 'JavaFX', 'SQLite'],
  github: 'https://github.com/Chernetm/EduTrack',
  live: 'https://github.com/Chernetm/EduTrack',
},

{
  title: 'OpenMarket Hub',
  description: 'A digital marketplace platform allowing users to list, search, and purchase products with an integrated admin dashboard.',
  tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
  github: 'https://github.com/Chernetm/OpenMarket-Hub',
  live: 'https://github.com/Chernetm/OpenMarket-Hub',
}

];

export default function ProjectsPage() {
  return (
    <div className="background min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-8">
      <div className="portfolio-container w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        <main className="main-content w-full flex flex-col items-center">
          <motion.section
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 flex flex-col"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 break-words">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm mb-4 break-words">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-700 text-neutral-200 px-2 py-1 rounded break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition text-lg"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition text-lg"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

