import React, { useEffect } from "react";

import { cubicBezier } from "framer-motion";
import { motion } from "framer-motion";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useNavigate } from "react-router-dom";
import img11 from "../image/11.png";
import img21 from "../image/21.png";
import img1 from "../image/1.png";
import img41 from "../image/41.png";
const Section4 = () => {
  /* Store the element in el */
  const navigate = useNavigate();
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
          <div
            className="singleprojectImage "
            onClick={() => {
              navigate("/works/ecommerce");
            }}
          >
            <motion.b
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),
                duration: 1,
              }}
            >
              01/04
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

              <img id="tilt" src={img1} alt="" />
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
              02/04
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
                onClick={() => {
                  navigate("/works/Hemant");
                }}
                id="tilt"
                src={img11}
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
              03/04
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
                onClick={() => {
                  navigate("/works/YoutubeClone");
                }}
                id="tilt"
                src={img21}
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="singleproject reverse">
          <div className="singleprojectImage row-reverse">
            <motion.b
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                ease: cubicBezier(0.42, 0, 0.58, 1),
                duration: 1,
              }}
            >
              04/04
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
                onClick={() => {
                  navigate("/works/Blog");
                }}
                id="tilt"
                src={img41}
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
