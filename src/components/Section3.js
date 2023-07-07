import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
gsap.registerPlugin(ScrollTrigger);
const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const abouttitle = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      abouttitle.current,
      { scale: 0.1 },
      {
        scale: 1,
        ease: "power3.inOut",

        duration: 2,
        // scrollTrigger: {
        //   trigger: abouttitle.current,
        // },
      }
    );
  }, []);
  return (
    <div className=" aboutcomponent" data-scroll-section>
      <div className="aboutsection">
        <Marquee
          className="Marquee"
          speed={100}
          style={{
            fontSize: "4rem",
            fontWeight: "bolder",
            wordSpacing: "2rem",
            margin: "5rem auto 1rem auto ",
          }}
        >
          HTML CSS SCSS REACT JAVASCRIPT NODEJS .
        </Marquee>
        <Marquee
          pauseOnHover="true"
          className="Marquee"
          direction="right"
          speed={100}
          style={{
            fontSize: "4rem",
            fontWeight: "bolder",
            wordSpacing: "2rem",
            margin: "1rem auto 5rem auto",
          }}
        >
          EXPRESSJS MONGODB GIT FRAMERMOTION .
        </Marquee>
        <div ref={abouttitle} className="infocomponent">
          <p>
            Hi, Josiah here. Obviously! I am a software engineer who constantly
            seeks out innovative solutions to everyday problems. For whatever
            reason it is you are here, welcome.
          </p>

          <h2 className="abouttitle">about</h2>
        </div>
      </div>
    </div>
  );
};

export default Section3;
