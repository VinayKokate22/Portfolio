import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import img21 from "../../image/21.png";
import img2 from "../../image/21.png";

import img3 from "../../image/23.png";
import img4 from "../../image/24.png";
import img5 from "../../image/22.png";
// import img6 from "../../image/14.png";
// import img7 from "../../image/17.png";
import "./ecommerce.css";
import { cubicBezier, motion } from "framer-motion";
import IndividualProject from "../../components/IndividualProject";
import Section5 from "../../components/Section5";
import Section1 from "../../components/Section1";
const YoutubeClone = () => {
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
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="curtainrevel"
        ></motion.div>
        <Section1 />
        <div data-scroll-section>
          <div className="ecommercetitle">
            <div class="link">
              <span class="mask">
                <div class="link-container">
                  <span class="link-title1 title">Youtube Clone</span>
                  <span class="link-title2 title">Youtube Clone</span>
                </div>
              </span>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mainimage"
          >
            <img src={img21} alt="" />
          </motion.div>
          <div className="techstackused">
            <div className="techstackinfo">
              <div className="overview">
                <motion.h3>Overview</motion.h3>
                <motion.p>
                  I Made a Portfolio website for a 3D Graphic Designer
                </motion.p>
                <motion.p>
                  It has dark and light mode it was done using Dom
                </motion.p>
              </div>
              <div className="techstack">
                <motion.h3>Tech Stack used</motion.h3>
                <ul>
                  <motion.li>Html</motion.li>
                  <motion.li>Css</motion.li>
                  <motion.li>Javascript</motion.li>
                </ul>
              </div>
            </div>
            <motion.div className="secondimage">
              <img src={img2} alt="" />
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img src={img3} alt="" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img src={img4} alt="" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img src={img5} alt="" />
          </motion.div>
          {/* <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img
              
              src={img6}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img
              
              src={img7}
              alt=""
            />
          </motion.div> */}
        </div>
        <Section5 />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default YoutubeClone;
