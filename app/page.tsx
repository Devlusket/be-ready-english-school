import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Comparison from '@/components/Comparison';
import Platforms from '@/components/Platforms';
import Mockups from '@/components/Mockups';
import Methodology from '@/components/Methodology';
import Levels from '@/components/Levels';
import Carousel from '@/components/Carousel';
import Placement from '@/components/Placement';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WaveDivider fromColor="#ffffff" toColor="#F8F7F4" />
      <Comparison />
      <WaveDivider fromColor="#F8F7F4" toColor="#ffffff" />
      <Platforms />
      <Mockups />
      <WaveDivider fromColor="#ffffff" toColor="#1A3A8F" variant="redblue" />
      <Methodology />
      <Levels />
      <WaveDivider fromColor="#1D4ED8" toColor="#F8F7F4" />
      <Carousel />
      <Placement />
      <Footer />
    </main>
  );
}