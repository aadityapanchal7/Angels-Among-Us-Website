import React from "react";
import { Updates } from "../utils/updates";


function News() {
  return (
    <section>
      <div className="w-full flex justify-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mt-10 text-navy-blue">
          Our News
        </h1>
      </div>

      <div className=" grid md:grid-cols-3 grid-cols-1 justify-center w-full items-center   ">
        {Updates.map((item, index) => (
          <div className=" w-full justify-center items-center flex mt-10" key={index}>
            <div className=" h-40 bg-gradient-to-r hover:scale-105 duration-300 transition from-grad-blue to-angel-blue rounded-lg w-80 shadow-lg text-white text-center items-center justify-center flex">
              <div className=" flex-col text-2xl font-bold">
                <p>{item.Number}</p>
                <span className=" mt-10">{item.Desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" mt-10 w-full justify-center items-center ">
        <a href='https://docs.google.com/spreadsheets/d/1z3PsdRlNxsqzwvy0S6SthbRKAgKhSFsQHdgous3_wGE/edit?gid=0#gid=0' target="__blank">
          <button className=" w-full h-20 border border-x-angel-blue text-2xl text-navy-blue font-semibold border-y-grad-blue hover:bg-angel-blue hover:scale-95 scale-90 duration-300 transition from-grad-blue to-angel-blue rounded-2xl">
            Chapter Database
          </button>
        </a>
      </div>

      <div className="w-full flex justify-center md:mt-5">
        <h1 className="text-4xl md:text-5xl font-bold mt-10 text-navy-blue">
          Our Achievements!
        </h1>
      </div>

      <div className=" md:mt-10 mt-10 w-full justify-center items-center px-20 ">
        <div className=" md:flex">
          <img className=" border-r-8 rounded-2xl" src='deca_aau.jfif'
          height={500}
          alt="decaimage"
          width={500}
          />
          <div className=" pl-10 md:text-3xl text-xl font-semibold">
            <ul className="list-disc md:space-y-16 mt-2 text-angel-blue">
              <li>DECA ‘23 MDA Corporate Challenge</li>
              <li>DECA ‘23 MDA Corporate Challenge</li>
              <li>10+ Partners</li>
              <li>3+ News Features</li>
            </ul>
          </div>
        </div >
      </div>
      
      <div className=" mt-10 w-full justify-center items-center ">
        <a href='mailto:aneesh@aaunonprofit.org' target="__blank">
          <button className=" w-full h-20 border text-2xl text-navy-blue font-semibold border-y-grad-blue hover:scale-95 scale-90 duration-300 transition bg-angel-blue hover:bg-inherit rounded-2xl">
            Contact Us!
          </button>
        </a>
      </div>

    </section>
  );
}

export default News;
