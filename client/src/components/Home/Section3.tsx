import React, { useRef } from "react";
import Cards from "../Cards";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { slideAnimation } from "../../helpers/animations";

const data = [
  {
    img: "https://i.pinimg.com/564x/88/76/eb/8876eb7c2ee9c4706a7e143ee8b31585.jpg",
    name: "",
    sub: "Read how users like you are making a differ",
    btnText: "Read more",
  },
  {
    img: "https://i.pinimg.com/564x/84/3f/08/843f084562152993d8a8c9069e51e64f.jpg",
    name: "",
    sub: "Share your success story with user",
    btnText: "Community",
  },
  {
    img: "https://i.pinimg.com/564x/4a/47/20/4a47201c032b36fcc5becb21485243bc.jpg",
    name: "",
    sub: "See the positive environmental impact achieved by our community.",
    btnText: "Read more",
  },
];

const Section3 = () => {
  const tef = useRef(null);

  const containerRef = useInView(tef, { once: false });
  return (
    <div className="w-full" ref={tef}>
      <h1 className="text-center font-IstokWeb-Bold text-[5rem] bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-indigo-400 to-sky-200 ">
        Real Impact, Real Stories
      </h1>
      <AnimatePresence>
        {containerRef && (
          <motion.div className="w-full" {...slideAnimation("left")}>
            <div className="w-full flex flex-row gap-[8rem] pt-16 justify-center items-center">
              {data.map((item, index) => {
                return (
                  <Cards
                    key={index}
                    issue={item.name}
                    des={item.sub}
                    buttonText={item.btnText}
                    imgLink={item.img}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section3;
