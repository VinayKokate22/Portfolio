import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

const Section3 = () => {
  return (
    <div className=" aboutcomponent" data-scroll-section>
      <div className="aboutsection">
        {/* <Marquee
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
        </Marquee> */}
        <div className="infocomponent">
          <motion.p
            initial={{ y: +80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            Hi, Josiah here. Obviously!
          </motion.p>
          <motion.p
            initial={{ y: +80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", ease: cubicBezier(0.42, 0, 0.58, 1) }}
          >
            I am a software engineer who constantly seeks out innovative
            solutions to everyday problems.
          </motion.p>
          <motion.p
            initial={{ y: +80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            For whatever reason it is you are here, welcome.
          </motion.p>
          <div className="abouttitle">
            <motion.h2
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),
                duration: 0.5,
              }}
            >
              a
            </motion.h2>
            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),
                duration: 0.5,
              }}
            >
              b
            </motion.h2>
            <motion.h2
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                ease: cubicBezier(0.42, 0, 0.58, 1),
              }}
            >
              o
            </motion.h2>
            <motion.h2
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,

                ease: cubicBezier(0.42, 0, 0.58, 1),
              }}
            >
              u
            </motion.h2>
            <motion.h2
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,

                ease: cubicBezier(0.42, 0, 0.58, 1),
              }}
            >
              t
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
