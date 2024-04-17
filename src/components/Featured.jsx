import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className=" w-full sm:py-10 md:py-20 bg-slate-900 ">
      <div className=" w-full sm:px-5 md:px-20 border-b-[1px] border-zinc-700 sm:pb-10 md:pb-20">
        <h1 className=" sm:text-4xl md:text-7xl">Featured projects :</h1>
      </div>
      <div className=" sm:px-5 md:px-20">
        <div className="cards w-full flex  sm:gap-3 md:gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative md:w-1/2 md:h-[75vh] sm:h-[35vh] "
          >
            <h1 className="absolute  left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[999] text-8xl tracking-tighter text-[#a9c73b] overflow-hidden flex">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                 key={index} className=" inline-block    "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full  rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative  md:w-1/2 md:h-[75vh] sm:h-[35vh] "
          >
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[999] text-8xl tracking-tighter text-[#a9c73b] flex overflow-hidden ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                 key={index} className=" inline-block    "
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
