import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

function PreFooter() {
  useGSAP(() => {
    const splitText = SplitText.create('.prefooter-title', {type: 'chars'});
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".prefooter-section",
        start: '40% center',
        toggleActions: "play none none reverse",
      }
    });

    tl.from(splitText.chars, {
      yPercent: 150,
      stagger: 0.02,
      ease: 'power2.inOut',
    })
      .to(".prefooter-text-scroll", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        ease: "power1.inOut",
      }, '-=0.5')
  })
  return (
    <section className="prefooter-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />
      
      <div className="h-[85vh] sm:pl-10 md:pl-20" style={{backgroundImage: "url('/images/preFooter.png')"}}>
        <div className="relative flex justify-center items-center sm:items-start flex-col h-full text-center sm:text-left text-milk">
          <div className="overflow-hidden">
            <h1 className="prefooter-title mt-10">Right Around</h1>
          </div>
          <div style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}} className="prefooter-text-scroll">
            <h1>The Corner</h1>
          </div>
          <div className="mt-20 md:mt-50">
            <p className="text-milk font-paragraph w-72 text-lg">Buy our drinks at your local store or get them delivered (to your door).</p>
          </div>
          <div className="prefooter-button mt-7 md:mt-10">
            <p>find in stores</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PreFooter