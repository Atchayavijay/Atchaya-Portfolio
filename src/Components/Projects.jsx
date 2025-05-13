
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
import { FaGithub } from 'react-icons/fa'; // ✅ GitHub icon

export const PROJECTS = [
  {
    title: "Auction Platform",
    image: "/images/AuctionPlatform.png",
    description: "An Auction Bidding Platform built with the MERN stack, enabling users to create, bid, and manage auctions in real time. Features include authentication, bidding history, and media uploads. Future enhancements include notifications.",
    technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
    url: "https://be-auctionbidding-1.onrender.com",
    githubbackend: "https://github.com/Atchayavijay/BE-AuctionBidding.git",
    githubfrontend: "https://github.com/Atchayavijay/FE-BiddingPlatform.git"
  },
   {
    title: "Eyecamp",
    image: "/images/eyecamp.png",
    url: "https://eyecamp.netlify.app/",
    description: "A dynamic, responsive, and secure frontend for the Eye-Camp management system, built with Vite + React & Tailwind CSS for a seamless user experience.",
    technologies: ["HTML", "CSS", "React", "Javascript","NodeJs","Mongodb"],
    githubbackend: "https://github.com/Atchayavijay/BE-eyecamp.git",
    githubfrontend: "https://github.com/Atchayavijay/FE-eyecamp.git"
  },
  {
    title: "Password Reset Flow",
    image: "/images/PasswordReset.png",
    url: "https://frontend-password-reset.netlify.app",
    description: "A Password Reset Flow built with the MERN stack, allowing users to securely reset their passwords via email verification. Implements JWT authentication and OTP-based validation for enhanced security.",
    technologies: ["React", "NodeJs", "MongoDB", "Javascript", "HTML", "CSS"],
    githubbackend: "https://github.com/Atchayavijay/Backend-Password-Reset.git",
    githubfrontend: "https://github.com/Atchayavijay/Frontend-Password-Reset.git"
  },
  {
    title: "Social Platform",
    image: "/images/social.png",
    url: "https://reactrouter-6.netlify.app/",
    description: "An E-Commerce website built with React and React Router, enabling seamless navigation between product listings, cart, and checkout pages. Features dynamic routing, state management, and a responsive UI.",
    technologies: ["React", "Javascript", "HTML", "CSS", "NodeJs", "Mongodb"],
    githubbackend: "https://github.com/Atchayavijay/BE-SocialPlatform.git",
    githubfrontend: "https://github.com/Atchayavijay/FE-SocialPlatform.git"
  },
 
  {
    title: "Todo App",
    image: "/images/TodoApp.png",
    url: "https://todoapp-atchaya.netlify.app/",
    description: "A To-Do App built with HTML, CSS, and JavaScript, allowing users to add, edit, and delete tasks. Features a simple UI with dynamic task management using local storage.",
    technologies: ["Html", "Css", "Javascript"],
    githubbackend: "https://github.com/Atchayavijay/Backend-Password-Reset.git",
    githubfrontend: "https://github.com/Atchayavijay/Frontend-Password-Reset.git"
  },
  {
    title: "Landing Page",
    image: "/images/LandingPage.png",
    url: "https://guvi-task-1-trabook-atchaya.netlify.app/",
    description: "A simple landing page built using HTML & CSS, featuring a responsive design, smooth layout, and user-friendly interface. Ideal for showcasing products, services, or personal portfolios.",
    technologies: ["Html", "Css"],
    githubfrontend: "https://github.com/Atchayavijay/Guvi-Task-1-Trabook.git"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Element name="projects">
      <section className="px-4 py-16 text-white">
        <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
        <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="mb-4 h-40 w-full rounded object-cover"
                />
              </a>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-2 text-gray-400">{project.description}</p>
          

              {/* ✅ GitHub Backend Link */}
{project.githubbackend && (
  <div className="mb-1">
    <a
      href={project.githubbackend}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline"
    >
      <FaGithub /> GitHub Backend
    </a>
  </div>
)}

{/* ✅ GitHub Frontend Link */}
{project.githubfrontend && (
  <div className="mb-2">
    <a
      href={project.githubfrontend}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline"
    >
      <FaGithub /> GitHub Frontend
    </a>
  </div>
)}





              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;


// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Element } from 'react-scroll';
// import { FaGithub } from 'react-icons/fa';

// export const PROJECTS = [
//   {
//     title: "Auction Platform",
//     image: "/images/AuctionPlatform.png",
//     description:
//       "An Auction Bidding Platform built with the MERN stack, enabling users to create, bid, and manage auctions in real time.",
//     technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
//     url: "https://be-auctionbidding-1.onrender.com",
//     githubbackend: "https://github.com/Atchayavijay/BE-AuctionBidding.git",
//     githubfrontend: "https://github.com/Atchayavijay/FE-BiddingPlatform.git",
//   },
//   {
//     title: "Eyecamp",
//     image: "/images/eyecamp.png",
//     url: "https://eyecamp.netlify.app/",
//     description:
//       "Frontend for Eye-Camp management built with Vite + React & Tailwind CSS for a seamless user experience.",
//     technologies: ["HTML", "CSS", "React", "Javascript", "NodeJs", "Mongodb"],
//     githubbackend: "https://github.com/Atchayavijay/BE-eyecamp.git",
//     githubfrontend: "https://github.com/Atchayavijay/FE-eyecamp.git",
//   },
//   {
//     title: "Password Reset Flow",
//     image: "/images/PasswordReset.png",
//     url: "https://frontend-password-reset.netlify.app",
//     description:
//       "Secure password reset flow with JWT, OTP, and email verification using MERN stack.",
//     technologies: ["React", "NodeJs", "MongoDB", "Javascript", "HTML", "CSS"],
//     githubbackend: "https://github.com/Atchayavijay/Backend-Password-Reset.git",
//     githubfrontend: "https://github.com/Atchayavijay/Frontend-Password-Reset.git",
//   },
//   {
//     title: "Social Platform",
//     image: "/images/social.png",
//     url: "https://reactrouter-6.netlify.app/",
//     description:
//       "React-based E-Commerce site with product listings, cart, and checkout using dynamic routing.",
//     technologies: ["React", "Javascript", "HTML", "CSS", "NodeJs", "Mongodb"],
//     githubbackend: "https://github.com/Atchayavijay/BE-SocialPlatform.git",
//     githubfrontend: "https://github.com/Atchayavijay/FE-SocialPlatform.git",
//   },
// ];

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <Element name="projects">
//       <section className="px-4 py-16 text-white">
//         <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>
//         {/* Grid: 2 columns on medium screens and up */}
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {PROJECTS.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
//               data-aos="fade-up"
//             >
//               <a href={project.url} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="rounded-md mb-4 w-full h-40 object-cover"
//                 />
//               </a>
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-400 text-sm mb-3">{project.description}</p>

//               {project.githubbackend && (
//                 <div className="mb-1">
//                   <a
//                     href={project.githubbackend}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline"
//                   >
//                     <FaGithub /> GitHub Backend
//                   </a>
//                 </div>
//               )}

//               {project.githubfrontend && (
//                 <div className="mb-2">
//                   <a
//                     href={project.githubfrontend}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline"
//                   >
//                     <FaGithub /> GitHub Frontend
//                   </a>
//                 </div>
//               )}

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-gray-700 text-sm px-2 py-1 rounded text-gray-200"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-2 bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded text-sm font-semibold text-white"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Element>
//   );
// };

// export default Projects;
