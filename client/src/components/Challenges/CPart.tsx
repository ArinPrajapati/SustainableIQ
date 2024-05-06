import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slideAnimation } from "@/helpers/animations";

type Props = {
  color: string;
  challenge: string;
  description: string;
  steps: string[];
  textColor1: string;
  textColor2: string;
};

const CPart = ({
  color,
  challenge,
  description,
  steps,
  textColor1,
  textColor2,
}: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        {...slideAnimation}
        className="text-white h-fit w-[400px] p-5 inline-block  rounded-lg  "
        style={{ background: `${color}`, color: `${textColor1}` }}
      >
        <div className=" flex flex-col justify-center items-center h-full ">
          <h1 className="text-4xl font-bold mb-8">{challenge}</h1>
          <p className="text-lg text-center px-4">{description}</p>
          <ul className="flex flex-col justify-center ">
            {steps.map((item, index) => {
              return (
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full ">
                        {index + 1}
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step {index + 1}</p>
                    <p className="" style={{ color: `${textColor2}` }}>
                      {item}
                    </p>
                  </div>
                </div>
              );
            })}
          </ul>
          <Link
            to={`/community`}
            type="button"
            className="flex items-center justify-center w-[90%] m-4 p-3 font-semibold tracki active:scale-95 rounded-md bg-violet-400 text-gray-900"
          >
            Share
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CPart;
