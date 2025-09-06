import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive";
import { useRef, useEffect } from "react";

function Hero() {

  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 769, maxWidth: 1024});
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && !isMobile && !isTablet) {
        videoRef.current.play();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isMobile, isTablet]);

  useGSAP(() => {
    const titleSplit = SplitText.create('.hero-title',{type: 'chars'});
    const tl = gsap.timeline({delay: 4.5});
    tl.from('.hero-content', {
      y: 100,
      opacity: 0,
      ease: 'power1.inOut'
    })
    .to('.hero-text-scroll', {
      duration: 1,
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      ease: 'circ.inOut'
    }, "-=0.4")
    .from(titleSplit.chars, {
      yPercent: 200,
      stagger: 0.02,  
      ease: 'power2.out',
    }, '-=0.5');

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        start: '1% top',
        end: 'bottom top',
        scrub: true,
      }
    })

    heroTl.to('.hero-container', {
      rotate: 7,
      scale: .9,
      yPercent: 30,
      ease: 'power1.inOut'
    })
  })
  return (
    <section className='bg-main-bg'>
      <div className="hero-container">
        {
          isMobile ? (
            <>
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />

              <img
                src="/images/hero-img.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
              />
            </>
          ) : isTablet ? (
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          ) : (
            <video
              ref={videoRef}
              src="/videos/hero-bg.mp4"
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        }
        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
        
          <div style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }} className="hero-text-scroll">
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>CHUG A SPLYT</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero