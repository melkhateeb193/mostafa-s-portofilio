import {  ProjectsBtn } from "../../components";

import { motion } from "framer-motion";

import { fadeIn } from "../../scripts/variants";

const Home = () => {
  return (
    <div className=" h-full">
      <div className="w-full h-full ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="h3"
          >
            Hi.!
            <br />
            I&#39;m <span className="text-accent">Mostafa M.Elkhateeb</span>
            <br />
            Full stack developer.
          </motion.h3>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10 text-white"
          >
            Transforming Ideas Into
            <span className="text-accent font-semibold"> Digital Reality.</span>
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="flex justify-center xl:hidden relative z-10"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full hidden xl:block max-w-[600px] max-h-[640px] absolute -bottom-32 lg:bottom-0 lg:right-[10%]"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
