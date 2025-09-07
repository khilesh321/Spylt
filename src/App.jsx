import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Message from './sections/Message';
import Flavor from './sections/Flavor';
import Nutrition from './sections/Nutrition';
import Benefits from './sections/Benefits';
import Testimonial from './sections/Testimonial';
import Footer from './sections/Footer';
import PreFooter from './sections/PreFooter';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.7,
      effects: true,
    });

  })
  const handleLoaderComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Loader onLoaded={handleLoaderComplete} />}
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <Benefits />
          <Testimonial />
          <PreFooter />
          <Footer />
          {/* <div className="min-h-screen border border-red-400"></div> */}
        </div>
      </div>
    </div>
  )
}

export default App