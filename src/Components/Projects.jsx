import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll'; // ✅ Import scroll anchor

export const PROJECTS = [
  {
    title: "Auction Platform",
    image: "/images/AuctionPlatform.png",
    description: "An Auction Bidding Platform built with the MERN stack, enabling users to create, bid, and manage auctions in real time. Features include authentication, bidding history, and media uploads. Future enhancements include notifications .",
    technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
    url: "https://be-auctionbidding-1.onrender.com"
  },
  {
    title: "Password Reset Flow",
    image: "/images/PasswordReset.png",
    url: "https://frontend-password-reset.netlify.app",
    description: "A Password Reset Flow built with the MERN stack, allowing users to securely reset their passwords via email verification. Implements JWT authentication and OTP-based validation for enhanced security",
    technologies: ["React", "NodeJs", "MongoDB"]
  },
  {
    title: "React-Router",
    image: "/images/E-comm.png",
    url: "https://reactrouter-6.netlify.app/",
    description: "An E-Commerce website built with React and React Router, enabling seamless navigation between product listings, cart, and checkout pages. Features dynamic routing, state management, and a responsive UI..",
    technologies: ["React", "Javascript", "HTML", "CSS", "React-Router-Dom"]
  },
  {
    title: "Movie Searching App",
    image: "/images/MovieApp.png",
    url: "https://movieapp-7.netlify.app/",
    description: "A Movie Search App built with React, allowing users to search for movies in real time using an API. Features a clean UI, dynamic search, and movie details display.",
    technologies: ["HTML", "CSS", "React", "Javascript"]
  },
  {
    title: "Todo App",
    image: "/images/TodoApp.png",
    url: "https://todoapp-atchaya.netlify.app/",
    description: "A To-Do App built with HTML, CSS, and JavaScript, allowing users to add, edit, and delete tasks. Features a simple UI with dynamic task management using local storage.",
    technologies: ["Html", "Css", "Javascript"]
  },
  {
    title: "Landing Page",
    image: "/images/LandingPage.png",
    url: "https://guvi-task-1-trabook-atchaya.netlify.app/",
    description: "A simple landing page built using HTML & CSS, featuring a responsive design, smooth layout, and user-friendly interface. Ideal for showcasing products, services, or personal portfolios..",
    technologies: ["Html", "Css"]
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Element name="projects"> {/* ✅ Anchor point for smooth scroll */}
      <section className="px-4 py-16 text-white">
        <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
        <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105 "
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 h-40 w-full rounded object-cover"
                />
              </a>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((item, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
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
