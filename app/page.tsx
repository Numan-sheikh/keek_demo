// app/page.jsx (or pages/index.jsx)
import HeroSection from '../components/HeroSection';
import BenefitSection from '../components/Benefit';
import Navbar from '../components/Navbar';
import HowItWorksSection from '../components/How_it_Works';
import TestimonialsSection from '../components/Testimonials';
import CallToAction from '../components/CalltoAction';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BenefitSection/>
      <HowItWorksSection/>
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>


      {/* You can add more sections here as needed */}
      {/* <AnotherSection /> */}
      {/* <Footer /> */}
      
    </main>
  );
}