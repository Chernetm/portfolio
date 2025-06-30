'use client';

import Image from 'next/image';
import { FaSchool, FaQrcode, FaLock,FaCar,FaUserGraduate,FaStore} from 'react-icons/fa';

export default function About() {
  return (

    <div className="background">
      <div className="portfolio-container">
        <section className="max-w-6xl mx-auto space-y-12">
          {/* Intro */}
          <div >
            <Image
              src="https://res.cloudinary.com/dsa1gjnyd/image/upload/v1713169185/YelpCamp/kp0cqrlrqyzooii0o2ve.jpg"
              alt="Chernet Mekuria"
              width={160}
              height={160}
              className="rounded-full mx-auto mb-6 border-4 border-indigo-500/50 shadow-lg"
            />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Full-stack engineer from Ethiopia, crafting innovative solutions with modern tech and elegant design.
            </p>
          </div>

          {/* Experience + Education Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Experience */}
            <div className="flex-1 bg-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Experience</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400">•</span>
                  <div>
                    <strong className="text-white">Intern (2023–2024):</strong> Developed web applications using React and Tailwind CSS, deployed on Vercel with CI/CD pipelines.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400">•</span>
                  <div>
                    <strong className="text-white">VEX5 Robotics:</strong> Led hardware/software integration, securing championship in national robotics competition.
                  </div>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="flex-1 bg-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Education</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-3">
                  <span className="text-indigo-400">🎓</span> Addis Ababa University — BSc in ECE (2026)
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-indigo-400">📊</span> Certified Data Analyst — Udacity (2024)
                </p>
              </div>
            </div>
          </div>


          {/* Projects as cards */}
          <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaSchool className="text-indigo-400 text-2xl" />,
                  title: "Secure School Portal",
                  desc: "Full-featured exam portal with real-time control and Chapa payment integration.",
                },
                {
                  icon: <FaQrcode className="text-green-400 text-2xl" />,
                  title: "Ministry Result Portal",
                  desc: "Built with React/Node.js, featuring QR code result verification.",
                },
                {
                  icon: <FaLock className="text-red-400 text-2xl" />,
                  title: "Online Exam System",
                  desc: "AI-powered cheat detection with real-time monitoring and analytics.",
                },
                {
                  icon: <FaCar className="text-blue-400 text-2xl" />,
                  title: "Smart Parking System",
                  desc: "Intelligent system for managing parking space reservations, real-time updates, and admin oversight.",
                },
                {
                  icon: <FaUserGraduate className="text-purple-400 text-2xl" />,
                  title: "EduTrack (Java Version)",
                  desc: "Student management system with features like course enrollment, grade tracking, and multi-role access.",
                },
                {
                  icon: <FaStore className="text-emerald-400 text-2xl" />,
                  title: "OpenMarket Hub",
                  desc: "Online marketplace with product listings, search functionality, and admin dashboard features.",
                },

              ].map((proj, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-5 hover:shadow-lg hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {proj.icon}
                    <h4 className="text-lg font-semibold text-white">{proj.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300 text-sm">
              <div>
                <strong className="text-white">Languages:</strong>
                <p>C/C++, Python, JavaScript, Java, TypeScript, Scala</p>
              </div>
              <div>
                <strong className="text-white">Frameworks:</strong>
                <p>React, Next.js, Django, Vue.js, ejs</p>
              </div>
              <div>
                <strong className="text-white">Databases/Cloud:</strong>
                <p>PostgreSQL, MongoDB, MySQL, MS-SQL, AWS</p>
              </div>
              <div>
                <strong className="text-white">Tools:</strong>
                <p>Excel, Arduino, Raspberry Pi, Digital Logic Design</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}





