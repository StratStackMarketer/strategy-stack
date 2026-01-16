import { useEffect } from 'react';
import { Header, Footer } from './components/layout';
import {
  Hero,
  Problem,
  Solution,
  Results,
  Testimonials,
  Projects,
  Pricing,
  Contact,
} from './components/sections';

function App() {
  // Custom cursor click handler - shows thumbs up on click
  useEffect(() => {
    const handleMouseDown = () => {
      document.documentElement.classList.add('cursor-clicking');
    };

    const handleMouseUp = () => {
      document.documentElement.classList.remove('cursor-clicking');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Results />
        <Testimonials />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
