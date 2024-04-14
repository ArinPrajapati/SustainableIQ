import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { fadeAnimation, rotateAnimation } from "../helpers/animations";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { useSelector, useDispatch } from "react-redux"; // Import corrected
import {
  selectCurrentPage,
  setCurrentPage,
} from "../store/feature/currentPageSlice"; // Import setCurrentPage action

const Nav = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const active = "text-orange-500 underline underline-offset-8 ";
  const { scrollYProgress } = useScroll();
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, dispatch]);

  // Function to handle link click and dispatch action to update current page
  const handleLinkClick = (page: string) => {
    dispatch(setCurrentPage(page));
    setOpen(false); // Close the mobile menu after link click
  };

  return (
    <>
      <div className="font-IstokWeb nav-blur h-[116px]  flex justify-between px-8 w-full py-8 items-center sticky z-40 top-0">
        <motion.div className="" {...rotateAnimation}>
          <motion.img
            src={logo}
            alt=""
            className="w-[80px] sm:w-[100px] origin-[0%] "
            style={{ rotateX: scrollYProgress }}
          />
        </motion.div>
        <div className="hideInMobile flex flex-row text-purple-600 gap-8 items-end text-[20px] ">
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            className={`${
              current === "home"
                ? "text-orange-500 underline underline-offset-8"
                : ""
            } hover:text-blue-700 transition`}
          >
            Home
          </Link>
          <a
            href="/#section2"
            onClick={() => handleLinkClick("about")}
            className={`${
              current === "about" ? active : ""
            } hover:text-blue-700 transition`}
          >
            Learn
          </a>
          <Link
            to="/Challenges"
            onClick={() => handleLinkClick("challenges")}
            className={`${
              current === "challenges" ? active : ""
            } hover:text-blue-700 transition`}
          >
            Challenges
          </Link>
          <Link
            to="/resources"
            onClick={() => handleLinkClick("resources")}
            className={`${
              current === "resources" ? active : ""
            } hover:text-blue-700 transition`}
          >
            Resources
          </Link>
          <Link
            to="/community"
            onClick={() => handleLinkClick("community")}
            className={`${
              current === "community" ? active : ""
            } hover:text-blue-700 transition`}
          >
            Community
          </Link>
          <Link
            to="/news"
            onClick={() => handleLinkClick("news")}
            className={`${
              current === "news" ? active : ""
            } hover:text-blue-700 transition`}
          >
            News
          </Link>
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
                onClick={() => handleLinkClick("home")}
                className={`${
                  current === "home" ? active : ""
                } hover:text-blue-700 transition`}
              >
                Home
              </Link>
              <a
                href="#about"
                onClick={() => handleLinkClick("about")}
                className={`${
                  current === "about" ? active : ""
                } hover:text-blue-700 transition`}
              >
                Learn
              </a>
              <Link
                to="#services"
                onClick={() => handleLinkClick("services")}
                className={`${
                  current === "services" ? active : ""
                } hover:text-blue-700 transition`}
              >
                Challenges
              </Link>
              <a
                href="#resources"
                onClick={() => handleLinkClick("resources")}
                className={`${
                  current === "resources" ? active : ""
                } hover:text-blue-700 transition`}
              >
                Resources
              </a>
              <Link
                to="/community"
                onClick={() => handleLinkClick("community")}
                className={`${
                  current === "community" ? active : ""
                } hover:text-blue-700 transition`}
              >
                Community
              </Link>
              <a
                href="#New"
                onClick={() => handleLinkClick("news")}
                className={`${
                  current === "news" ? active : ""
                } hover:text-blue-700 transition`}
              >
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
