
import React from 'react'
import { motion } from 'framer-motion'

const Experience = ({ isDarkMode }) => {
  const experience = [
    {
      company: "Bharat Batuk Pvt Ltd",
      role: "Backend Engineer",
      location: "Noida, Uttar Pradesh",
      duration: "Jun 2024 - Present",
      // achievements: [
      //   "Developed and integrated three interconnected platforms: batuk.gold, partner.batuk.gold, and admin.batuk.in, providing a seamless experience for users, partners, and admins.",
      //   "Built backend architecture for batuk.gold and partner.batuk.gold, handling gold/silver investments, recurring payment (SIP), jewelry purchases, and coin redemption with a multi-level commission structure (Partner → Employee → MFD → Investor).",
      //   "Implemented Role-Based Access Control (RBAC) for secure, role-specific access to platform features, ensuring data security and compliance.",
      //   "Implemented secure API request/response encryption to safeguard sensitive transaction data and ensure high security.",
      //   "Created a custom deep link system to tag investors with their respective Partner/MFD, enabling personalized, trackable user journeys and enhancing referral tracking."
      // ]
      achievements: [
  "Architected and developed 3 interconnected production platforms — batuk.gold, partner.batuk.gold, and admin.batuk.in — supporting 30,000+ users across gold/silver investment, SIP, jewellery purchases, and coin redemptions.",
  
  "Built end-to-end backend systems using Node.js and Express.js, processing high-value financial transactions with 99.9% uptime and secure Cashfree webhook integrations.",
  
  "Implemented Role-Based Access Control (RBAC) across a 4-level hierarchy (Partner → Employee → MFD → Investor), eliminating unauthorized access incidents.",
  
  "Engineered full API request/response encryption for sensitive transaction data, strengthening platform security and compliance.",
  
  "Integrated Firebase Push Notifications for real-time transaction updates, improving user engagement by approximately 25%.",
  
  "Designed a custom deep-link system to tag investors with their MFD/Partner, enabling personalized user journeys and improving referral tracking accuracy by 40%.",
  
  "Integrated live metal price APIs and third-party catalog APIs to provide real-time gold and silver rate updates across platforms."
]
    },
    {
      company: "Ducat IT Training",
      role: "MERN Stack Developer",
      location: "Noida, Uttar Pradesh",
      duration: "Oct 2023 - Jun 2024",
      // achievements: [
      //   "Worked on multiple full-stack projects using the MERN stack, implementing backend APIs, CRUD operations, and secure authentication features with JWT.",
      //   "Collaborated in an Agile environment with a focus on efficient code delivery through Git version control and Postman for API testing.",
      //   "Built scalable, performance-optimized solutions with MongoDB, Node.js, and Express.js, improving overall application speed and reliability."
      // ]
      achievements: [
  "Developed 5+ full-stack applications using the MERN stack, implementing RESTful APIs, CRUD operations, and JWT-based secure authentication systems.",
  
  "Collaborated in Agile development environments using Git for version control and Postman for API testing, improving development workflow and delivery speed.",
  
  "Built performance-optimized backend solutions using MongoDB indexing and Node.js clustering, reducing average API response time by approximately 30%."
]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      id="experience"
      className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Work Experience
      </h2>
      <div className="space-y-8 max-w-6xl mx-auto px-4">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={cardVariants}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience












// import React, { useState } from 'react'

// const Experience = ({isDarkMode}) => {
    
//     const experience = [
//     {
//       company: "Bharat Batuk Pvt Ltd",
//       role: "Backend Engineer",
//       location: "Noida, Uttar Pradesh",
//       duration: "Jun 2024 - Present",
//       achievements: [
//         "Developed and integrated three interconnected platforms: batuk.gold, partner.batuk.gold, and admin.batuk.in, providing a seamless experience for users, partners, and admins.",
//         "Built backend architecture for batuk.gold and partner.batuk.gold, handling gold/silver investments, recurring payment (SIP), jewelry purchases, and coin redemption with a multi-level commission structure (Partner → Employee → MFD → Investor).",
//         "Implemented Role-Based Access Control (RBAC) for secure, role-specific access to platform features, ensuring data security and compliance.",
//         "Implemented secure API request/response encryption to safeguard sensitive transaction data and ensure high security.",
//         "Created a custom deep link system to tag investors with their respective Partner/MFD, enabling personalized, trackable user journeys and enhancing referral tracking."
//       ]
//     },
//     {
//       company: "Ducat IT Training",
//       role: "MERN Stack Developer",
//       location: "Noida, Uttar Pradesh",
//       duration: "Oct 2023 - Jun 2024",
//       achievements: [
//         "Worked on multiple full-stack projects using the MERN stack, implementing backend APIs, CRUD operations, and secure authentication features with JWT.",
//         "Collaborated in an Agile environment with a focus on efficient code delivery through Git version control and Postman for API testing.",
//         "Built scalable, performance-optimized solutions with MongoDB, Node.js, and Express.js, improving overall application speed and reliability."
//       ]
//     }
//   ];
//   return (
//     <section id="experience" className={`py-20 transition-colors duration-300 ${
//         isDarkMode ? "bg-gray-800" : "bg-white"
//       }`} >
//           <h2  className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Work Experience
//           </h2>
//           <div className="space-y-8 max-w-6xl mx-auto px-4">
//             {experience.map((exp, index) => (
//               <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
//                 isDarkMode ? 'bg-gray-800' : 'bg-white'
//               }`}>
//                 <div className="flex flex-wrap justify-between items-start mb-6">
//                   <div>
//                     <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{exp.role}</h3>
//                     <h4 className="text-xl text-blue-600 mb-1">{exp.company}</h4>
//                     <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.location}</p>
//                   </div>
//                   <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
//                     isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
//                   }`}>
//                     {exp.duration}
//                   </span>
//                 </div>
//                 <ul className="space-y-2">
//                   {exp.achievements.map((achievement, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{achievement}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//   )
// }

// export default Experience