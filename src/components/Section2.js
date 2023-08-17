import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
const Section2 = () => {
  const boxRef = useRef();
  const nameRef = useRef();
  const [Title, setTitle] = useState("MernStack Developer");
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
        duration: 1.5,
      }
    );
    gsap.fromTo(
      nameRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: -50,
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
        duration: 2,
      }
    );
  }, []);

  return (
    <div data-scroll-section>
      <div className="herosection">
        <p ref={nameRef}>Hi! I am Vinay Kokate</p>
        <div
          ref={boxRef}
          // initial={{ scale: 0 }}
          // animate={{ scale: 1 }}
          // transition={{ type: "keyframes", duration: 1.5 }}
          className="heroTitle"
        >
          <h1 className="animate-title">{Title}</h1>
        </div>
        <span>
          Currently working <br />
          on mern Stack Projects
        </span>
      </div>
    </div>
  );
};

export default Section2;
