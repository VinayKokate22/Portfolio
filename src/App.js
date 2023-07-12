import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useRef } from "react";
import "./App.css";
import "./components/style.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import AOS from "aos";
import "aos/dist/aos.css";
import Section5 from "./components/Section5";
function App() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const animatedPosition = useSpring({ to: position });
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <animated.div
          className="cursor"
          style={{
            position: "absolute",

            top: animatedPosition.y,
            left: animatedPosition.x,
          }}
        ></animated.div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      ;
    </LocomotiveScrollProvider>
  );
}

export default App;
