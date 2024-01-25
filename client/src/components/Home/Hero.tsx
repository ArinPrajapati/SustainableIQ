import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { slideAnimation } from "../../helpers/animations";
import homevideo from "../../assets/videos/herobackground.webm";
import Button from "../../utils/Button";

const Hero = () => {
  return (
    <div className="relative h-[100dvh] flex justify-center items-center">
      <AnimatePresence>
        {" "}
        <video
          key={"herovideo"}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 overflow-x-hidden z-[-2]"
        >
          <source src={homevideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="w-full h-full absolute top-0 left-0 bg-[#000000bc] z-[-1]"></div>
        <motion.div
          key={"herotext"}
          {...slideAnimation("up")}
          className=" text-white flex flex-col justify-center items-center"
        >
          <p className="font-IBMPlexMono text-6xl p-4 text-center w-1/2  ">
            <span className="textBlueGreen">SustainableIQ</span>
            :Nurturing Sustainable Living
          </p>
          <div className="font-IstokWeb text-3xl w-3/4 text-center ">
            Empowering Change Through Knowledge, Challenges, and Eco-Friendly
            Action
          </div>
          <Button
            text={"Learn More"}
            color={"#8333F5"}
            extraClasses="active:scale-95 mt-8 text-black"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
