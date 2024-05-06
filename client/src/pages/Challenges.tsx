import CPart from "@/components/Challenges/CPart";
import React from "react";
import Data from "@/data/Challenges.json";
import { AnimatePresence } from "framer-motion";

// const style = "flex flex-wrap justify-center mt-10 gap-10";
const style =
  "md:columns-2 lg:columns-3 columns-1 space-y-10 gap-10 my-10 mx-10";
const Challenges = () => {
  return (
    <div className=" w-full h-full ">
      <h1 className="text-center font-IstokWeb-Bold text-[5rem] bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-indigo-400 to-sky-200">
        Challenges
      </h1>

      <div className={style}>
        <AnimatePresence>
          {Data &&
            Data.map((item, index) => {
              return (
                <CPart
                  key={index}
                  description={item!.description}
                  color={item!.color}
                  challenge={item!.challenge}
                  steps={item!.steps}
                  textColor1={item!.textColor1}
                  textColor2={item!.textColor2}
                />
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Challenges;
