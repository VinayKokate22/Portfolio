import React from "react";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import img7 from "../image/7.png";
import { cubicBezier, easeOut, motion } from "framer-motion";
const IndividualProject = () => {
  return (
    <div data-scroll-section>
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
      <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mainimage"
      >
        <img src={img1} alt="" />
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
              It is a fully functional online shoping platform for all goods{" "}
            </motion.p>
            <motion.p
              initial={{ y: +80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                ease: cubicBezier(0.42, 0, 0.58, 1),
              }}
            >
              It has an admin dashboard where admin can create new product or
              update their data and many more features
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
                React -Javascript
              </motion.li>
              <motion.li
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Scss
              </motion.li>
              <motion.li
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Mongodb
              </motion.li>
              <motion.li
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Express
              </motion.li>
              <motion.li
                initial={{ y: +80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: cubicBezier(0.42, 0, 0.58, 1),
                }}
              >
                Mongoose
              </motion.li>
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ x: 160, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
            ease: cubicBezier(0.42, 0, 0.58, 1),
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
      </motion.div>
    </div>
  );
};

export default IndividualProject;
