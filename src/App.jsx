import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import { About, Skills, Experience, Projects, Education } from "./components/Sections.jsx";
import { profile } from "./data.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} {profile.name}. {profile.location}</div>
      </footer>
    </>
  );
}
