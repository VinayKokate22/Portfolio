import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./ecommerce.css";
import { cubicBezier, easeOut, motion } from "framer-motion";
import IndividualProject from "../../components/IndividualProject";
import Section5 from "../../components/Section5";

const Ecommerce = () => {
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
      <div data-scroll-container ref={containerRef} className="ecommercepage">
        <motion.div
          initial={{ height: "130vh" }}
          animate={{ height: 0, borderRadius: "70%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="curtainrevel"
        ></motion.div>
        <IndividualProject />
        <Section5 />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Ecommerce;
