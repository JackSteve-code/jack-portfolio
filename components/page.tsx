import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* === Background Layer === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-container">
          {Array.from({ length: 90 }).map((_, i) => (
            <div
              key={i}
              className={`star ${i % 5 === 0 ? 'star-large' : i % 3 === 0 ? 'star-medium' : 'star-small'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 7}s`,
              }}
            />
          ))}
        </div>
        <div className="horizon-wrapper">
          <div className="horizon-curve" />
        </div>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <Hero />
        <TechStack />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}