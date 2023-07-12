import React, { useEffect } from "react";
import { easeInOut, useWillChange } from "framer-motion";
import { cubicBezier } from "framer-motion";
import { motion } from "framer-motion";
import NorthEastIcon from "@mui/icons-material/NorthEast";
const Section4 = () => {
  /* Store the element in el */

  return (
    <div data-scroll-section>
      <div className="featureworkstitle">
        <div className="featuretitle">
          <motion.h2
            initial={{ y: +50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            F
          </motion.h2>
          <motion.h2
            initial={{ y: +60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            e
          </motion.h2>
          <motion.h2
            initial={{ y: +70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            a
          </motion.h2>
          <motion.h2
            initial={{ y: +80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            t
          </motion.h2>
          <motion.h2
            initial={{ y: +90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            u
          </motion.h2>
          <motion.h2
            initial={{ y: +100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            r
          </motion.h2>
          <motion.h2
            initial={{ y: +110, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            e
          </motion.h2>
          <motion.h2
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            d
          </motion.h2>
        </div>

        <div className="worktitle">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            W
          </motion.h2>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            o
          </motion.h2>
          <motion.h2
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            r
          </motion.h2>
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            k
          </motion.h2>
          <motion.h2
            initial={{ y: 90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: cubicBezier(0.42, 0, 0.58, 1),
            }}
          >
            s
          </motion.h2>
        </div>
      </div>
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

                duration: 0.7,
              }}
            >
              <motion.div
                initial={{ width: "40rem" }}
                whileInView={{ width: 0 }}
                transition={{
                  duration: 1,

                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="imagerevelanimation"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
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

                duration: 0.7,
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
                whileInView={{ scale: 1, rotate: 520 }}
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

                duration: 0.7,
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
                whileInView={{ scale: 1, rotate: 720 }}
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

                duration: 0.7,
              }}
            >
              <motion.div
                initial={{ width: "40rem" }}
                whileInView={{ width: 0 }}
                transition={{
                  duration: 1,

                  ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                className="imagerevelanimation"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
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
