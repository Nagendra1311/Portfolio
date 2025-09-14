import React from "react";
import { Mail, Linkedin, Phone, Github, ExternalLink } from "lucide-react";

const Contact = ({  }) => {
  let isDarkMode=false;
  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        {/* Description + Buttons */}
        <div className="text-center mb-12">
          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new opportunities and exciting
            projects. Let's connect and build something amazing together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:nagendragupta3248@gmail.com"
              className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Mail size={24} />
              <span className="font-semibold">Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nagendra-gupta-617321309/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 rounded-full transition-colors shadow-lg border-2 border-blue-600 ${
                isDarkMode
                  ? "bg-gray-800 text-blue-400 hover:bg-gray-700"
                  : "bg-white text-blue-600 hover:bg-gray-50"
              }`}
            >
              <Linkedin size={24} />
              <span className="font-semibold">Connect on LinkedIn</span>
            </a>
          </div>

          {/* Contact Numbers */}
          <div
            className={`flex flex-wrap justify-center gap-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+91-9628960163</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+91-8005403961</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Nagendra1311"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:text-blue-600"
              }`}
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/nagendra-gupta-617321309/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:text-blue-600"
              }`}
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://nagendra1311.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:text-blue-600"
              }`}
            >
              <ExternalLink size={24} />
            </a>
          </div>

          {/* Footer Note */}
          <p className={isDarkMode ? "text-gray-500" : "text-gray-500"}>
            © 2024 Nagendra Gupta. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
