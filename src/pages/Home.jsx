import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import ScienceSection from '../components/ScienceSection.jsx';
import CommunitySection from '../components/CommunitySection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import FaqSection from '../components/FaqSection.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ScienceSection />
      <CommunitySection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}