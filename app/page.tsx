// app/page.jsx (or pages/index.jsx)
import HeroSection from '../components/HeroSection';
import BenefitSection from '../components/Benefit';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* Add a top margin to the BenefitSection */}
      <BenefitSection className="mt-0" />


      {/* You can add more sections here as needed */}
      {/* <AnotherSection /> */}
      {/* <Footer /> */}
      
    </main>
  );
}