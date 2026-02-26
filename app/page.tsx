import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';// Ensure this matches your filename
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <TechStack />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}