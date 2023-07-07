import React, { useEffect } from "react";
import { easeInOut, useWillChange } from "framer-motion";
import { cubicBezier } from "framer-motion";
import { motion } from "framer-motion";
import NorthEastIcon from "@mui/icons-material/NorthEast";
const Section4 = () => {
  /* Store the element in el */
  const willChange = useWillChange();
  return (
    <div data-scroll-section>
      <h2 className="featureworkstitle">
        Featured <br /> Works
      </h2>
      <div className="Workssection">
        <div className="singleproject">
          <div className="singleprojectImage ">
            <motion.b
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),

                duration: 1,
              }}
            >
              01/05
            </motion.b>
            <motion.div
              initial={{ scale: 0.4, opacity: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),

                duration: 1,
              }}
            >
              <motion.div
                initial={{ width: "35rem" }}
                whileInView={{ width: 0 }}
                transition={{
                  duration: 1,
                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="imagerevelanimation"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 7200 }}
                transition={{
                  duration: 1.6,
                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="redirectarroranimation"
              >
                <NorthEastIcon style={{ fontSize: "3rem" }} />
              </motion.div>

              <img
                id="tilt"
                src="https://images.prismic.io/folio2022/145f4d1b-794d-442d-a66e-eb7406a8d505_Hero+4.png?auto=compress,format&rect=117,0,1207,1024&w=660&h=560"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="singleproject reverse">
          <div className="singleprojectImage ">
            <motion.b
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),

                duration: 1,
              }}
            >
              01/05
            </motion.b>
            <motion.div
              initial={{ scale: 0.4, opacity: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),

                duration: 1,
              }}
            >
              <motion.div
                initial={{ width: "35rem" }}
                whileInView={{ width: 0 }}
                transition={{
                  duration: 1,
                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="imagerevelanimation"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 820 }}
                transition={{
                  duration: 1.6,
                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="redirectarroranimation"
              >
                <NorthEastIcon style={{ fontSize: "3rem" }} />
              </motion.div>
              <img
                id="tilt"
                src="https://images.prismic.io/folio2022/145f4d1b-794d-442d-a66e-eb7406a8d505_Hero+4.png?auto=compress,format&rect=117,0,1207,1024&w=660&h=560"
                alt=""
              />
            </motion.div>
          </div>
        </div>

        {/* 
        //  */}
        {/*  */}
        {/* 
        //  */}
        <div className="singleproject">
          <div className="singleprojectImage ">
            <motion.b
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),

                duration: 1,
              }}
            >
              01/05
            </motion.b>
            <motion.div
              initial={{ scale: 0.4, opacity: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),

                duration: 1,
              }}
            >
              <motion.div
                initial={{ width: "35rem" }}
                whileInView={{ width: 0 }}
                transition={{
                  duration: 1,
                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="imagerevelanimation"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 7200 }}
                transition={{
                  duration: 1.6,
                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="redirectarroranimation"
              >
                <NorthEastIcon style={{ fontSize: "3rem" }} />
              </motion.div>
              <img
                id="tilt"
                src="https://images.prismic.io/folio2022/145f4d1b-794d-442d-a66e-eb7406a8d505_Hero+4.png?auto=compress,format&rect=117,0,1207,1024&w=660&h=560"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
