"use client"; // Add this at the very top!
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import CollaborationSection from '@/components/CollaborationSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  const [stars, setStars] = useState<{left: string, top: string, delay: string}[]>([]);

  useEffect(() => {
    // Generate stars only on the client side to avoid hydration mismatch
    const generatedStars = Array.from({ length: 90 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 7}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* === Background Layer === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-container relative w-full h-full">
          {stars.map((star, i) => (
            <div
              key={i}
              className={`star absolute ${i % 5 === 0 ? 'star-large' : i % 3 === 0 ? 'star-medium' : 'star-small'}`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
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
        <WorkSection />
        <CollaborationSection/>
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}