import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Portfolio: React.FC = () => {
    return (
        <div className="background">
            <div className="portfolio-container">
                <main className="main-content">
                    <div className="profile-section">
                        <div className="text-content">
                            <h2>Chernet Mekuria</h2>
                            <h3>I'm a Full-Stack Developer</h3>
                            <p>
                                My name is Chernet Mekuria, and I am a passionate Full-stack Developer with a keen interest in creating dynamic and responsive web applications. I specialize in React, Next.js, and Tailwind CSS, and I love turning complex problems into elegant solutions.
                            </p>
                            <button className="download-cv">Download CV</button>


                            <div className="flex space-x-4 mt-4 text-xl text-green-400">
                                <a href="https://github.com/Chernetm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub className="hover:text-green-600 transition" />
                                </a>
                                <a href="https://linkedin.com/in/chernetm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin className="hover:text-green-600 transition" />
                                </a>
                                <a href="https://x.com/MekuriaChe34241" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaXTwitter className="hover:text-green-600 transition" />
                                </a>
                                <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <FaYoutube className="hover:text-green-600 transition" />
                                </a>
                            </div>

                        </div>
                        <div className="image-section">
                            <div className="profile-image"></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Portfolio;