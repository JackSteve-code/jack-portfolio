import Hero from './Hero';
import TechStack from './TechStack';
import WorkSection from './WorkSection';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Navbar from './Navbar';
import AboutSection from './AboutSection'; 
import UsesSection from './UsesSection';
import Guestbook from './Guestbook';
// Commented out to ensure Vercel build succeeds even if file is missing/misspelled
// import WorkSection from './WorkSection';   

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden selection:bg-white/30">
      {/* 1. Floating Navbar */}
      <Navbar />

      {/* 2. Background Layer (Stars, Grid & Horizon) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* The Professional Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Star Container */}
        <div className="stars-container absolute inset-0">
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

      {/* 3. Content Layer - Max-width 4xl provides the 'Organized' look */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-32">
        <Hero />
        
        <AboutSection />
        
        <TechStack />
        
        <WorkSection />
        
        <Testimonials />
        
        <UsesSection />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Guestbook />
          {/* Placeholder for WorkSection */}
          <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Work History</h3>
            <p className="text-zinc-500 text-sm italic">Coming soon...</p>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}