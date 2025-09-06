import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onLoaded }) => {
  const loaderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const loader = loaderRef.current;

    const handleVideoEnd = () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setTimeout(() => {
            onLoaded();
          }, 100);
        }
      });
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, [onLoaded]);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-60 bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/loader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
