import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import Education from './Components/Education';
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certification from './Components/Certification';
import Experience from './Components/Experience';


function App() {
  return (
    <>
    <div className="overflow-x-hidden text-stone-300  antialiased">
      <div className='fixed inset-0 -z-10'>
        <div className="relative size-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute inset-x-0 top-[-10%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" style={{ width: '1000px', height: '1000px' }} />
        </div>
      </div>
      <div className="conatiner mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Education />
        <Experience />
        <Certification />
        <Contact />
        <Footer />

      </div>
    </div>
    </>
  );
}

export default App;
