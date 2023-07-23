import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import img21 from "../../image/41.png";
import img2 from "../../image/44.png";

import img3 from "../../image/43.png";
import img4 from "../../image/45.png";
import img5 from "../../image/42.png";
// import img6 from "../../image/14.png";
// import img7 from "../../image/17.png";
import "./ecommerce.css";
import { cubicBezier, motion } from "framer-motion";
import IndividualProject from "../../components/IndividualProject";
import Section5 from "../../components/Section5";
import Section1 from "../../components/Section1";
const Blog = () => {
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
                  <span class="link-title1 title">Blog Website</span>
                  <span class="link-title2 title">Blog Website</span>
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
                <motion.h3
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  Overview
                </motion.h3>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  I Made a Portfolio website for a 3D Graphic Designer
                </motion.p>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  It has dark and light mode it was done using Dom
                </motion.p>
              </div>
              <div className="techstack">
                <motion.h3
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  Tech Stack used
                </motion.h3>
                <ul>
                  <motion.li
                    initial={{ y: +80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      ease: cubicBezier(0.42, 0, 0.58, 1),
                    }}
                  >
                    Html
                  </motion.li>
                  <motion.li
                    initial={{ y: +80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      ease: cubicBezier(0.42, 0, 0.58, 1),
                    }}
                  >
                    Css
                  </motion.li>
                  <motion.li
                    initial={{ y: +80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      ease: cubicBezier(0.42, 0, 0.58, 1),
                    }}
                  >
                    Javascript
                  </motion.li>
                </ul>
              </div>
            </div>
            <motion.div
              initial={{ x: 160, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="secondimage"
            >
              <img src={img2} alt="" />
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={img3}
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
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={img4}
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
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={img5}
              alt=""
            />
          </motion.div>

          {/* <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="imagerevelcoolanimation"
          >
            <motion.img
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
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
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
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

export default Blog;
