
import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-black bg-opacity-80 shadow-md backdrop-blur-lg'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>

        {/* Logo */}
        <div className='flex items-center'>
          <a href='/' aria-label='Home'>
            <img src='images/logo.jpg' className='mx-2 rounded-full' width={50} height={43} alt="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex gap-6 text-white text-lg font-semibold'>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-teal-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-teal-400 transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-teal-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-teal-400 transition"
            >
              Education
            </Link>
          </li>
          <li>
          <a
              href="#Experience"
              className="cursor-pointer hover:text-teal-400 transition"
            >
              Experience
            </a>  
          </li>

          <li>
            <a
              href="#certifications"
              className="cursor-pointer hover:text-teal-400 transition"
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer hover:text-teal-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='flex items-center gap-4 text-white text-2xl'>
          <a
            href="https://www.linkedin.com/in/atchaya-vijayakumar-05165a369"
            target="_blank"
            rel="noopener noreferrer"
            aria-label='LinkedIn'
            className='hover:text-blue-500 transition'
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Atchayavijay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label='GitHub'
            className='hover:text-gray-400 transition'
          >
            <FaGithub />
          </a>



{/* <a
  href="mailto:atchayavijayakumar36@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="hover:text-red-400 transition"
>
  <FaEnvelope title="Send Email" />
</a> */}


<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atchayavijayakumar36@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-400 transition"
>
  <FaEnvelope title="Open Gmail to Send Email" />
</a>



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
