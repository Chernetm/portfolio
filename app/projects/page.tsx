'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Secure School Portal',
    description: 'Real-time exam management with authentication, payment gateway (Chapa), and student dashboard. Built with Next.js, PostgreSQL.',
    tech: ['Next.js', 'Tailwind', 'Chapa', 'PostgreSQL'],
    github: 'https://github.com/your-repo/school-portal',
    live: 'https://school-portal.example.com',
  },
  {
    title: 'Ministry Result Portal',
    description: 'Displays grade 6 ministry results with QR code verification, backend in Node.js.',
    tech: ['React', 'Node.js', 'MongoDB', 'QR Code'],
    github: 'https://github.com/your-repo/result-portal',
    live: 'https://result-portal.example.com',
  },
  {
    title: 'AI-Powered Exam System',
    description: 'Monitors cheating using webcam, supports multiple question types, with proctoring dashboard.',
    tech: ['Next.js', 'TensorFlow.js', 'Socket.io'],
    github: 'https://github.com/your-repo/ai-exam',
    live: 'https://ai-exam.example.com',
  },
];

export default function ProjectsPage() {
  return (

    <div className="background">
      <div className="portfolio-container">
        <main className="main-content">
                <motion.section
                  className="max-w-6xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:shadow-lg transition"
                        whileHover={{ y: -5, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3
                          className="text-xl font-semibold mb-2 project-title"
                          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-neutral-300 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 text-xs mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-neutral-700 text-neutral-200 px-2 py-1 rounded"
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

