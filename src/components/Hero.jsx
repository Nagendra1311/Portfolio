import React from "react";
import { Mail, ExternalLink, Github, Linkedin, ChevronDown, Download } from "lucide-react";

const Hero = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-50"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl">
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center text-6xl md:text-7xl font-bold transition-colors ${isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                    }`}
                >
                  NG
                </div>
              </div>
              {/* Status Badge */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nagendra Gupta
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Full Stack Developer with 1+ years of experience building scalable web
            applications, integrating secure payment systems, and delivering
            real-time solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:nagendragupta3248@gmail.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="../Nagendra Gupta.pdf"
              download
              className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Nagendra1311"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isDarkMode
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
                }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nagendra-gupta-617321309/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isDarkMode
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
                }`}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-blue-600 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
