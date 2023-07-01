import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Section3 = () => {
  const abouttitle = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      abouttitle.current,
      { scale: 0.1 },
      {
        scale: 1,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
        duration: 2,
        scrollTrigger: {
          trigger: abouttitle.current,
        },
      }
    );
  }, []);
  return (
    <div className=" aboutcomponent" data-scroll-section>
      <div className="aboutsection">
        <div ref={abouttitle} className="infocomponent">
          <h2 className="abouttitle">about</h2>
          <p>
            Hi, Josiah here. Obviously! I am a software engineer who constantly
            seeks out innovative solutions to everyday problems. For whatever
            reason it is you are here, welcome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
