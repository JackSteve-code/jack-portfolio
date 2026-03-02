import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection'; 
import UsesSection from './components/UsesSection';
import Guestbook from './components/Guestbook';
import WorkSection from './components/WorkSection';   
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* 1. Floating Navbar */}
      <Navbar />

      {/* 2. Background Layer (Stars & Horizon) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-container">
          {Array.from({ length: 90 }).map((_, i) => {
            const sizeClass =
              i % 5 === 0 ? 'star-large' :
              i % 3 === 0 ? 'star-medium' :
              'star-small';
            return (
              <div
                key={i}
                className={`star ${sizeClass}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 7}s`,
                }}
              />
            );
          })}
        </div>
        
        <div className="horizon-wrapper">
          <div className="horizon-curve" />
        </div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pt-32">
        <Hero />
        
        <AboutSection />
        
        <TechStack />
        <Projects />
        <Testimonials />
        
        <UsesSection />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 my-16">
          <Guestbook />
          <WorkSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}