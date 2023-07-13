import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/style.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Section5 from "./components/Section5";
import Ecommerce from "./pages/singleproject/ecommerce";
import Home from "./pages/homepage/Home";
import Hemant from "./pages/singleproject/Hemant";

import YoutubeClone from "./pages/singleproject/YoutubeClone";
import About from "./pages/about/About";
import Blog from "./pages/singleproject/Blog";
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const animatedPosition = useSpring({ to: position });
  return (
    <BrowserRouter>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <animated.div
        className="cursor"
        style={{
          position: "absolute",

          top: animatedPosition.y,
          left: animatedPosition.x,
        }}
      ></animated.div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="works/ecommerce" element={<Ecommerce />} />
        <Route path="works/Hemant" element={<Hemant />} />
        <Route path="works/YoutubeClone" element={<YoutubeClone />} />
        <Route path="works/Blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Section5 />} />
        <Route path="*" element={<Section5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
