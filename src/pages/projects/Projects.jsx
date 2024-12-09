import React, { useEffect, useState } from "react";

import { ProjectSlider, Bulb, Circles } from "../../components";

import { motion } from "framer-motion";
import { fadeIn } from "../../scripts/variants";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div className="h-full py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              className="h2 xl:mt-12"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
            >
              Projects<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className="text-white mb-4 max-w-[400px] mx-auto lg:mx-0"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
            >
              Here are some of my frontend projects, which i have built during
              my internship.
            </motion.p>
          </div>
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
          >
            <ProjectSlider windowWidth={windowWidth} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Projects;
