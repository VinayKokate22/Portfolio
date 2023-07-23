import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Section5 from "../../components/Section5";
import Section1 from "../../components/Section1";
import { motion } from "framer-motion";
import "./work.css";
import img1 from "../../image/1.png";
const Works = () => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef} className="ecommercepage">
        <motion.div
          initial={{ height: "150vh" }}
          animate={{ height: 0, borderRadius: "70%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="curtainrevel"
        ></motion.div>
        <Section1 />
        <div data-scroll-section className="workpage">
          <div className="workpagetitle">
            <div class="link">
              <span class="mask">
                <div class="link-container">
                  <span class="link-title1 title">Works</span>
                  <span class="link-title2 title">Works</span>
                </div>
              </span>
            </div>
          </div>
          <div className="allworksection">
            <div className="singlework">
              <div className="singleworktitle">
                <h2>Ecommerce</h2>
              </div>
              <div className="singleworkmoreinfo">
                <div className="singleworkimage">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati commodi dolor sit eos eum tempore hic nemo, odio
                  </p>
                </div>
              </div>
            </div>
            <div className="singlework">
              <div className="singleworktitle">
                <h2>Ecommerce</h2>
              </div>
              <div className="singleworkmoreinfo">
                <div className="singleworkimage">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati commodi dolor sit eos eum tempore hic nemo, odio
                  </p>
                </div>
              </div>
            </div>
            <div className="singlework">
              <div className="singleworktitle">
                <h2>Ecommerce</h2>
              </div>
              <div className="singleworkmoreinfo">
                <div className="singleworkimage">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati commodi dolor sit eos eum tempore hic nemo, odio
                  </p>
                </div>
              </div>
            </div>
            <div className="singlework">
              <div className="singleworktitle">
                <h2>Ecommerce</h2>
              </div>
              <div className="singleworkmoreinfo">
                <div className="singleworkimage">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati commodi dolor sit eos eum tempore hic nemo, odio
                  </p>
                </div>
              </div>
            </div>
            <div className="singlework">
              <div className="singleworktitle">
                <h2>Ecommerce</h2>
              </div>
              <div className="singleworkmoreinfo">
                <div className="singleworkimage">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati commodi dolor sit eos eum tempore hic nemo, odio
                  </p>
                </div>
              </div>
            </div>
            <div className="singlework">
              <div className="singleworktitle">
                <h2>Ecommerce</h2>
              </div>
              <div className="singleworkmoreinfo">
                <div className="singleworkimage">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati commodi dolor sit eos eum tempore hic nemo, odio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section5 />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Works;
