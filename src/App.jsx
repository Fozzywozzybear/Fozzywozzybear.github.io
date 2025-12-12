import { motion } from 'framer-motion';
import './index.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-sand/90 backdrop-blur-sm border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-sm text-ink-muted">
            Aaron Fosmire / Security Engineer
          </span>
          <div className="flex gap-6 text-sm">
            <a href="#experience" className="text-ink-muted hover:text-ink transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-ink-muted hover:text-ink transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-ink-muted hover:text-ink transition-colors">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-ink-subtle">
          <p>© 2024 Aaron Fosmire. Vibe coded with Love 💙</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
