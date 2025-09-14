import React from "react";
import { Phone, Mail, MapPin, Server, Code, Database, Briefcase ,Shield,
  MessageSquare,
  Layout,
  BarChart, } from "lucide-react";


const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Summary */}
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Professional Summary
            </h3>
            <p
              className={`mb-6 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Experienced Backend Engineer with over 1+ year of expertise in designing, developing, and maintaining scalable web applications. Strong in API development, payment gateway integrations, and real-time features. Proven track record in implementing Role-Based Access Control (RBAC), optimizing transactional systems, and enhancing security. Skilled in working with MERN stack, Redis, and Firebase to build high-performance, secure solutions.
            </p>
            <p
              className={`mb-6 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Currently working at Bharat Batuk Pvt Ltd, where I've designed and
              developed backend infrastructure for multiple live platforms handling
              gold/silver investments, counseling sessions, and complex multi-role
              commission flows.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-blue-600" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  +91-9628960163
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-blue-600" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  +91-8005403961
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-blue-600" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  nagendragupta3248@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Expertise */}
          <div
  className={`p-8 rounded-2xl transition-colors ${
    isDarkMode
      ? "bg-gradient-to-br from-gray-700 to-gray-600"
      : "bg-gradient-to-br from-blue-50 to-purple-50"
  }`}
>
  <h4
    className={`text-xl font-semibold mb-6 ${
      isDarkMode ? "text-white" : "text-gray-800"
    }`}
  >
    Key Expertise
  </h4>
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <Server size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Backend Engineering (Node.js, Express.js)
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Code size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        API Development & Integrations
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Database size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Database Management (MongoDB, MySQL, Redis)
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Briefcase size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Payment Gateway Integration (Razorpay, Cashfree, Stripe)
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Shield size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Security & Authentication (JWT, OAuth, Encryption)
      </span>
    </div>
    <div className="flex items-center gap-3">
      <MessageSquare size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Real-Time Systems (Socket.IO, WebSockets)
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Layout size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Frontend Development (React.js, Tailwind, MUI)
      </span>
    </div>
    <div className="flex items-center gap-3">
      <BarChart size={20} className="text-blue-600" />
      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
        Reporting & Automation (PDF/XLSX, BullMQ)
      </span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
