import React from "react";
import logo from "../assets/img/logo.svg";
import { motion, useScroll } from "framer-motion";
import { rotateAnimation } from "../helpers/animations";

const Nav = () => {
  const active = "text-orange-500 underline underline-offset-8 ";
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="font-IstokWeb nav-blur h-[116px]  flex justify-between px-8 w-full py-8 items-center fixed z-40 top-0">
        <motion.div className="" {...rotateAnimation}>
          <motion.img
            src={logo}
            alt=""
            className="w-[100px] origin-[0%] "
            style={{ rotateX: scrollYProgress }}
          />
        </motion.div>
        <div className="flex flex-row text-purple-600 gap-8 items-end text-[20px]">
          <a
            href="#home"
            className={` ${active} hover:text-blue-700 transition `}
          >
            Home
          </a>
          <a href="#about" className=" hover:text-blue-700 transition">
            Learn
          </a>
          <a href="#services" className=" hover:text-blue-700 transition">
            Challenges
          </a>
          <a href="#resources" className=" hover:text-blue-700 transition">
            Resources
          </a>
          <a href="#Community" className=" hover:text-blue-700 transition">
            Comunity
          </a>
          <a href="#New" className=" hover:text-blue-700 transition">
            News
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
