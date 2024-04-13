import React from "react";

const Cards = () => {
  return (
    <div className=" w-full h-screen bg-zinc-100 px-32 flex items-center gap-5">
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card relative rounded-xl  w-full h-full  bg-[#004D43] flex items-center justify-center">
            <img className=" w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 border-2 border-[#a9c73b] text-[#a9c73b] left-5 bottom-5 text-sm rounded-full  ">&copy;2019-2022</button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card relative  rounded-xl w-full h-full  bg-[#212121] flex items-center justify-center">
        <img className=" w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className="absolute px-5 py-1 border-2 left-5 bottom-5 text-sm   rounded-full  ">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card relative rounded-xl  w-full h-full  bg-[#212121] flex items-center justify-center">
        <img className=" w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className="absolute px-5 py-1 border-2 left-5 bottom-5 text-sm rounded-full  ">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
