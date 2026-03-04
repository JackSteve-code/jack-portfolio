import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';

import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import UsesSection from '@/components/UsesSection';
import CollaborationSection from '@/components/CollaborationSection';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection'; 
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      {/* 1. Navigation - Highest z-index to float over everything */}
      <Navbar />

      {/* 2. Fixed background layers – lowest z-index */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-container">
          {Array.from({ length: 90 }).map((_, i) => {
            const sizeClass =
              i % 5 === 0 ? 'star-large' :
              i % 3 === 0 ? 'star-medium' :
              'star-small';
            const left = `${Math.random() * 100}%`;
            const top = `${Math.random() * 95}%`;
            const delay = `${Math.random() * 7}s`;

            return (
              <div
                key={i}
                className={`star ${sizeClass}`}
                style={{
                  left,
                  top,
                  animationDelay: delay,
                }}
              />
            );
          })}
        </div>

        <div className="horizon-wrapper">
          <div className="horizon-curve" />
        </div>
      </div>

      {/* 3. Scrollable content layer */}
      <main className="relative z-10 min-h-screen text-white">
        <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20 pt-32">
          {/* Main Content Sections */}
          <Hero />
          <AboutSection />
          <Services />
          
          
          <TechStack />
          
          <Testimonials />
          
          {/* Polaroid / Interactive Sections */}
          <UsesSection />
          <CollaborationSection/>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 my-16 md:my-24">
            
            
            {/* You can add SpotifyLastPlayed here later */}
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}