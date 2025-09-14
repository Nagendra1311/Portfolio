import React from "react";
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiPython, SiTypescript, SiJavascript, 
  SiHtml5, SiCss3, SiRedux, SiGraphql, SiTailwindcss, SiBootstrap, 
  SiMysql, SiFirebase, SiPrisma, SiSequelize, SiRedis, SiSocketdotio, 
  SiPostman, SiStripe, SiRazorpay 
} from "react-icons/si";

const Skills = ({isDarkMode}) => {

  const skills = {
    "Languages & Frameworks": [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "Sequelize ORM", icon: <SiSequelize /> },
    ],
    "Tools & Technologies": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "BullMQ", icon: <FaAws /> }, // no specific icon
      { name: "Docker", icon: <FaDocker /> },
      { name: "Firebase Push/Dynamic Links", icon: <SiFirebase /> },
    ],
    "Payment Gateways": [
      { name: "Cashfree", icon: <FaAws /> }, // placeholder
      { name: "Stripe", icon: <SiStripe /> },
      { name: "Razorpay", icon: <SiRazorpay /> },
    ],
    "Security & Authentication": [
      { name: "RBAC", icon: <FaAws /> }, // placeholder
      { name: "API Encryption", icon: <FaAws /> }, // placeholder
      { name: "OAuth", icon: <FaAws /> }, // placeholder
      { name: "JWT", icon: <FaAws /> }, // placeholder
    ],
    "Real-time Technologies": [
      { name: "WebSockets", icon: <SiSocketdotio /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
    "Version Control & Collaboration": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Agile Methodologies", icon: <FaAws /> }, // placeholder
    ],
  };

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Category Title */}
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {category}
              </h3>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 rounded-full text-sm border transition-colors flex items-center gap-2 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 border-gray-600 hover:border-blue-400"
                        : "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border-blue-100 hover:border-blue-300"
                    }`}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
