import { useInView, AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";
import {
  fadeAnimation,
  headTextAnimation,
  slideAnimation,
} from "../../helpers/animations";
import Section2Cards from "../Cards";
import data from "../../data/section2data.json";

interface data {
  issue: string;
  description: string;
  imgLink: string;
  pageLink: string;
}

const Section2 = () => {
  const Data: data[] = data.environmental_concerns;
  const tef = useRef(null);

  const containerRef = useInView(tef, { once: false });

  return (
    <div
      className="w-full bg-black mt-5 p-10 flex flex-col justify-center items-center pl-[10rem]"
      ref={tef}
      id="section2"
    >
      <AnimatePresence>
        {containerRef && (
          <>
            <motion.h1
              {...headTextAnimation}
              className=" text-center font-IstokWeb-Bold text-[5rem] bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-indigo-400 to-sky-200 "
            >
              Knowledge Hub
            </motion.h1>
            (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10 text-center mx-10"
              {...fadeAnimation}
            >
              {Data.map((item, index) => {
                return (
                  <Section2Cards
                    key={index}
                    issue={item.issue}
                    des={item.description}
                    imgLink={item.imgLink}
                    pageLink={item.pageLink}
                  />
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section2;
