'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="background">
      <div className="portfolio-container">
        <section className="max-w-3xl mx-auto space-y-12">
          <motion.section
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">Contact Me</h2>
            <p className="text-center text-neutral-300 mb-12">
              Have a project idea, collaboration, or just want to connect? Feel free to reach out!
            </p>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6 bg-neutral-900 p-4 rounded-xl border border-neutral-700 shadow-md"
            >
              <div>
                <label htmlFor="name" className="block mb-1 text-xs font-medium text-neutral-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-2 py-1 text-sm rounded-md bg-neutral-800 text-white border border-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-xs font-medium text-neutral-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-2 py-1 text-sm rounded-md bg-neutral-800 text-white border border-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-xs font-medium text-neutral-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Type your message here..."
                  className="w-full px-2 py-1 text-sm rounded-md bg-neutral-800 text-white border border-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-400 text-black text-sm font-semibold rounded-md hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-10 flex justify-center items-center gap-6 text-xl">
              <a
                href="mailto:chernetmekuria379@gmail.com"
                className="text-neutral-300 hover:text-yellow-400 transition"
                title="Send Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/chernet-mekuria"
                target="_blank"
                rel="noopener"
                className="text-neutral-300 hover:text-yellow-400 transition"
                title="Visit LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Chernetm"
                target="_blank"
                rel="noopener"
                className="text-neutral-300 hover:text-yellow-400 transition"
                title="Visit GitHub Profile"
              >
                <FaGithub />
              </a>
            </div>
          </motion.section>
        </section>
      </div>
    </div>
  );
}



