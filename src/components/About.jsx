import React from "react";

const About = () => {
  return (
    <div className=" w-full sm:p-5 md:p-20 bg-[#CDEA68] text-black">
      <h1 className=" sm:text-2xl md:text-6xl">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex sm:flex-col gap-5 w-full border-t-2 md:pt-10 sm:mt-5 md:mt-20 border-[#a2bf3b]">
        <div className="  md:w-1/2 ">
          <h1 className="sm:text-5xl md:text-7xl">Our approach:</h1>
          <button className=" flex sm:gap-3 md:gap-10 items-center bg-black text-white sm:px-5 sm:py-3 md:px-10 md:py-6 sm:mt-5 md:mt-10 rounded-full uppercase">
            
            Read More
            <div className=" w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=" md:w-1/2  md:h-[70vh] overflow-hidden  rounded-3xl bg-[#a9c73b]">
          <img className=" w-full h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
