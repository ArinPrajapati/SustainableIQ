import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { fadeAnimation, rotateAnimation } from "../helpers/animations";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

const Nav = () => {
  const active = "text-orange-500 underline underline-offset-8 ";
  const { scrollYProgress } = useScroll();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="font-IstokWeb nav-blur h-[116px]  flex justify-between px-8 w-full py-8 items-center sticky z-40 top-0">
        <motion.div className="" {...rotateAnimation}>
          <motion.img
            src={logo}
            alt=""
            className="w-[100px] origin-[0%] "
            style={{ rotateX: scrollYProgress }}
          />
        </motion.div>
        <div className="hideInMobile flex flex-row text-purple-600 gap-8 items-end text-[20px] ">
          <Link to="/" className={` ${active} hover:text-blue-700 transition `}>
            Home
          </Link>
          <a href="#about" className=" hover:text-blue-700 transition">
            Learn
          </a>
          <Link to="#services" className=" hover:text-blue-700 transition">
            Challenges
          </Link>
          <a href="#resources" className=" hover:text-blue-700 transition">
            Resources
          </a>
          <Link to="/community" className=" hover:text-blue-700 transition">
            Comunity
          </Link>
          <a href="#New" className=" hover:text-blue-700 transition">
            News
          </a>
        </div>
        <div className="showInMobile text-white hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-[9rem] right-9 w-[150px] text-center  z-[999] bg-white flex flex-col text-black p-5 gap-3 rounded-3xl"
              {...fadeAnimation}
            >
              <Link
                to="/"
                className={` ${active} hover:text-blue-700 transition `}
              >
                Home
              </Link>
              <a href="#about" className=" hover:text-blue-700 transition">
                Learn
              </a>
              <Link to="#services" className=" hover:text-blue-700 transition">
                Challenges
              </Link>
              <a href="#resources" className=" hover:text-blue-700 transition">
                Resources
              </a>
              <Link to="/community" className=" hover:text-blue-700 transition">
                Comunity
              </Link>
              <a href="#New" className=" hover:text-blue-700 transition">
                News
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Nav;
