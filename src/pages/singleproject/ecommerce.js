import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import img1 from "../../image/1.png";
import "./ecommerce.css";
import { easeInOut, motion } from "framer-motion";
import { duration } from "@mui/material";
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
          transition={{ duration: 2, ease: "anticipate" }}
          className="curtainrevel"
        ></motion.div>
        <div>
          <div className="ecommercetitle">
            <div class="link">
              <span class="mask">
                <div class="link-container">
                  <span class="link-title1 title">E-commerce</span>
                  <span class="link-title2 title">E-commerce</span>
                </div>
              </span>
            </div>
          </div>
          <div className="mainimage">
            <img src={img1} alt="" />
          </div>
          <div className="mainimage">
            <img src={img1} alt="" />
          </div>
          <div className="mainimage">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Ecommerce;
