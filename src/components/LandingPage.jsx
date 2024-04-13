import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="  w-full h-screen bg-slate-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "  EYE OPENING ", " PRESENTATIONS "].map(
          (item, index) => {
            return (
              <div key={index} className="masker ">
               <div className=" w-fit flex items-center">
                {index === 1 && (  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className=" mr-[2vw]  h-[5vw] w-[9vw]  rounded-md overflow-hidden
                "> <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div> )}
                
               <h1 className=" h-full text-8xl tracking-tighter   leading-[7.5vw] font-semibold">
                  {item}
                </h1>
               </div>
              </div>
            );
          }
        )}
      </div>
      <div className=" border-t-2 border-zinc-500  mt-10 flex justify-between items-center px-20 py-5">
        {[
          "For public and private  companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p key={index} className="  text-xl  ">{item}</p>;
        })}

        <div className=" flex items-center gap-5 ">
          <div className=" border border-zinc-400 rounded px-4 py-1 uppercase ">
            start project
          </div>
          <div className=" w-10 h-10 rounded-full  border border-zinc-400    flex items-center justify-center">
          <span className=" rotate-45"><FaArrowUpLong /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
