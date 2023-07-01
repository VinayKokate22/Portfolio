import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Section1 = () => {
  const boxRef = useRef();
  useEffect(() => {
    // Refs allow you to access DOM nodes
    console.log(boxRef); // { current: div.box }
    // then we can animate them like so...
    gsap.fromTo(
      boxRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,

        ease: "power3.inOut",

        duration: 2,
      }
    );
  }, []);

  return (
    <div className="navbar" ref={boxRef}>
      <div>
        <ul className="nav-list">
          <li>logo</li>
          <li>light</li>
          <li>menu</li>
        </ul>
      </div>
    </div>
  );
};

export default Section1;
