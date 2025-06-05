

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative bg-gray-1500">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#111827" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#14b8a6" },
            links: {
              color: "#14b8a6",
              distance: 100,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { direction: "none", enable: true, speed: 0.5 },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: 2 },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Footer Content */}
      <footer className="relative z-10 text-white py-10 px-6 md:px-20 bg-gradient-animate">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left: Profile */}
          <div className="flex items-center gap-4">
            <img
              src="images/profile.webp"
              alt="Atchaya Vijayakumar"
              className="w-16 h-16 object-cover rounded-full shadow-lg border-2 border-teal-400"
            />
            <div>
              <h3 className="text-lg font-semibold">Atchaya Vijayakumar</h3>
              <p className="text-sm text-gray-300">MERN Stack Developer</p>
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="mt-6 flex flex-col items-center text-sm text-gray-400 space-y-2">
          <a
  href="tel:+918870046795"
  className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition"
>
  
</a>

            <a
  href="mailto:atchayavijayakumar36@gmail.com"
  className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition"
>
  <FaEnvelope className="text-teal-400" /> atchayavijayakumar36@gmail.com
</a>


            {/* Extra space between email and copyright */}
            <div className="h-6" />

            <p className="text-xs text-gray-500 tracking-widest text-center">
              © {new Date().getFullYear()} Atchaya Vijayakumar. All rights reserved.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
            <div className="flex gap-6 justify-center text-2xl text-gray-300">
              <a
                href="https://github.com/Atchayavijay"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/atchaya-vijayakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
              {/* <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
