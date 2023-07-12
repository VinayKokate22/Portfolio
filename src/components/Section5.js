import React from "react";
import { cubicBezier, motion } from "framer-motion";
const Section5 = () => {
  return (
    <div data-scroll-section className="contactsection">
      <motion.h4
        initial={{ y: +80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", ease: cubicBezier(0.42, 0, 0.58, 1) }}
      >
        I am Open To Work
      </motion.h4>

      <div class="link">
        <span class="mask">
          <div class="link-container">
            <span class="link-title1 title">Let's Talk</span>
            <span class="link-title2 title">Let's Talk</span>
          </div>
        </span>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/vinay-kokate-318250215/ "
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/VinayKokate22" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section5;
