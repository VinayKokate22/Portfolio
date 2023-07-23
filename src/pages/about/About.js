import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./about.css";
import { cubicBezier, motion } from "framer-motion";

import Section5 from "../../components/Section5";
import Section1 from "../../components/Section1";
const About = () => {
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
        <div data-scroll-section className="aboutpage">
          <div className="maintitle">
            <div class="link">
              <span class="mask">
                <div class="link-container">
                  <span class="link-title1 title">Vinay Kokate</span>
                  <span class="link-title2 title">Vinay Kokate</span>
                </div>
              </span>
            </div>
            <motion.p
              initial={{ y: +80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                ease: cubicBezier(0.42, 0, 0.58, 1),
              }}
            >
              Always exploring...
            </motion.p>
          </div>
          <div className="myinfo">
            <div className="myskills">
              <div className="singleskill">
                <motion.h3
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  Frontend Tools
                </motion.h3>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  HTML CSS3 SCSS FramerMotion GSAP StyledComponents Bootstrap
                  TailwindCSS MaterialUI React Redux ReduxToolkit
                </motion.p>
              </div>
              <div className="singleskill">
                <motion.h3
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  Backend Tools
                </motion.h3>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  MongoDB Node ExpressJS MySQL React Postman
                </motion.p>
              </div>
              <div className="singleskill">
                <motion.h3
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  Education
                </motion.h3>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  IIITGwalior (2021-2026){" "}
                </motion.p>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  Integrated Btech and Mtech
                </motion.p>
                <motion.p
                  initial={{ y: +80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: cubicBezier(0.42, 0, 0.58, 1),
                  }}
                >
                  CGPA : 8.33 (Till 4th semester)
                </motion.p>
              </div>
            </div>
            <div className="aboutmesection">
              <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Hey there! I'm Vinay Kokate, a web developer with a passion for
                the MERN stack.
              </motion.p>
              <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                I love building dynamic and efficient web applications that
                provide seamless user experiences. My journey in web development
                started with HTML, CSS, and JavaScript. Along the way, I fell in
                love with the MERN stack, which allows me to create full-stack
                applications effortlessly.
              </motion.p>
              <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                I'm experienced in working with MongoDB for managing data and
                crafting efficient data models. On the backend, I enjoy using
                Express.js and Node.js to handle server-side logic and build
                robust APIs. When it comes to the frontend, React is my go-to
                tool for creating responsive and interactive user interfaces.
                I'm all about delivering high-quality code and ensuring
                scalability and maintainability in my projects.
              </motion.p>
              {/* <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Staying updated with the latest industry trends and best
                practices is important to me. Collaboration is key! I thrive in
                agile teams, where we can brainstorm ideas and contribute to
                project success together. I believe in clean code, code reviews,
                and continuous integration to keep the development process
                smooth and efficient.
              </motion.p> */}
              <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                When I'm not coding I enjoy watching Movies and Web Series . I
                also enjoy playing online Games and watching tech Stuff On
                Youtube
              </motion.p>
              <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                If you're looking for a dedicated web developer to bring your
                ideas to life, let's connect! Together, we can create
                exceptional web experiences that leave a lasting impact.
              </motion.p>{" "}
              {/* <motion.p
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Feel free to customize and tweak the above description to match
                your own style and tone. Let's make it a true reflection of your
                skills and personality!
              </motion.p> */}
            </div>
          </div>
        </div>

        <Section5 />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default About;
