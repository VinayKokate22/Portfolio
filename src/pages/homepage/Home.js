import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";

const Home = () => {
  const containerRef = useRef(null);
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
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
