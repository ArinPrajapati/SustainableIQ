import React, { useRef } from "react";
import { headTextAnimation, slideAnimation } from "../../helpers/animations";
import ImageCarousel from "../SwiperComponent";
import { AnimatePresence, motion, useInView } from "framer-motion";

const ActionContainer = () => {
  const ref = useRef(null);
  const containerRef = useInView(ref, { once: false });

  return (
    <div
      className=" mt-10 relative px-8 py-20 main h-screen flex flex-col gap-[5rem]  "
      ref={ref}
    >
      {" "}
      <AnimatePresence>
        <motion.h1
          {...headTextAnimation}
          className="text-[5rem] text-white w-full text-center mb-10 font-IstokWeb-Bold "
        >
          Engage and Learn
        </motion.h1>

        {containerRef && (
          <motion.div {...slideAnimation("up")}>
            <ImageCarousel />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActionContainer;
