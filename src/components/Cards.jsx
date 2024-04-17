import React from "react";

const Cards = () => {
  return (
    <div className=" w-full h-screen bg-zinc-100 sm:px-5 pt-32 md:px-32 flex sm:flex-col md:flex-row  items-center gap-5">
      <div className="card-container sm:w-full md:w-1/2 sm:h-[35vh] md:h-[50vh]">
        <div className="card relative rounded-xl  w-full h-full  bg-[#004D43] flex items-center justify-center">
            <img className=" sm:w-24 md:w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 border-2 border-[#a9c73b] text-[#a9c73b] left-5 bottom-5 text-sm rounded-full  ">&copy;2019-2022</button>
        </div>
      </div>
      <div className="card-container sm:w-full md:w-1/2 sm:h-[35vh] md:h-[50vh] flex sm:gap-3 md:gap-5">
        <div className="card relative  rounded-xl w-full h-full  bg-[#212121] flex items-center justify-center">
        <img className="sm:w-24 md:w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className="absolute sm:px-2 md:px-5 py-1 border-2 sm:left-2 md:left-5 sm:bottom-2 md:bottom-5 sm:text-xs md:text-sm   rounded-full  ">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card relative rounded-xl  w-full h-full  bg-[#212121] flex items-center justify-center">
        <img className=" sm:w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className="absolute sm:px-2 md:px-5 py-1 border-2 sm:left-0 sm:bottom-2 md:left-5   md:bottom-5 sm:text-xs md:text-sm rounded-full  ">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
