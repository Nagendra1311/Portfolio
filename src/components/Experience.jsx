import React, { useState } from 'react'

const Experience = ({isDarkMode}) => {
    
    const experience = [
    {
      company: "Bharat Batuk Pvt Ltd",
      role: "Backend Engineer",
      location: "Noida, Uttar Pradesh",
      duration: "Jun 2024 - Present",
      achievements: [
        "Developed and integrated three interconnected platforms: batuk.gold, partner.batuk.gold, and admin.batuk.in, providing a seamless experience for users, partners, and admins.",
        "Built backend architecture for batuk.gold and partner.batuk.gold, handling gold/silver investments, recurring payment (SIP), jewelry purchases, and coin redemption with a multi-level commission structure (Partner → Employee → MFD → Investor).",
        "Implemented Role-Based Access Control (RBAC) for secure, role-specific access to platform features, ensuring data security and compliance.",
        "Implemented secure API request/response encryption to safeguard sensitive transaction data and ensure high security.",
        "Created a custom deep link system to tag investors with their respective Partner/MFD, enabling personalized, trackable user journeys and enhancing referral tracking."
      ]
    },
    {
      company: "Ducat IT Training",
      role: "MERN Stack Developer",
      location: "Noida, Uttar Pradesh",
      duration: "Oct 2023 - Jun 2024",
      achievements: [
        "Worked on multiple full-stack projects using the MERN stack, implementing backend APIs, CRUD operations, and secure authentication features with JWT.",
        "Collaborated in an Agile environment with a focus on efficient code delivery through Git version control and Postman for API testing.",
        "Built scalable, performance-optimized solutions with MongoDB, Node.js, and Express.js, improving overall application speed and reliability."
      ]
    }
  ];
  return (
    <section id="experience" className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`} >
          <h2  className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8 max-w-6xl mx-auto px-4">
            {experience.map((exp, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{exp.role}</h3>
                    <h4 className="text-xl text-blue-600 mb-1">{exp.company}</h4>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.location}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Experience