import React from "react";

const About = () => {
  return (
    <div className=" w-full p-20 bg-[#CDEA68] text-black">
      <h1 className=" text-6xl">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex  gap-5 w-full border-t-2 pt-10 mt-20 border-[#a2bf3b]">
        <div className="  w-1/2 ">
          <h1 className=" text-7xl">Our approach:</h1>
          <button className=" flex gap-10 items-center bg-black text-white px-10 py-6 mt-10 rounded-full uppercase">
            {" "}
            Read More
            <div className=" w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] overflow-hidden  rounded-3xl bg-[#a9c73b]">
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
