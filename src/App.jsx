import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { ScrollTrigger } from 'gsap/all';
import Message from './sections/Message';
import ReactLenis from 'lenis/react';
import Flavor from './sections/Flavor';
import Nutrition from './sections/Nutrition';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Navbar />
      <ReactLenis root />
      <Hero />
      <Message />
      <Flavor />
      <Nutrition />
      <div className="min-h-screen border border-red-400"></div>
    </div>
  )
}

export default App