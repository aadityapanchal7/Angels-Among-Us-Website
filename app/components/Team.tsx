import React from "react";
import Image from "next/image";
import { Teamutil, BoardMembers, Directors } from "../utils/Teamutil";

function Team() {
  return (
    <section>
      <div className="w-full flex justify-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mt-10 text-navy-blue">
          Our <span className="text-angel-blue md:pl-1">Team</span>!
        </h1>
      </div>

      <hr className="mt-5" />

      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-10 text-angel-blue">
            Founders
          </h2>

          <div className="mt-5 mx-10">
            {/* Adjust grid to be responsive */}
            <div className="grid grid-cols-1 md:space-y-0 space-y-2 sm:grid-cols-2 md:grid-cols-3 md:gap-36 ">
              {Teamutil.map((item, index) => (
                <div key={index} className="flex flex-col items-center  text-center mx-2">
                  <Image 
                    src={item.image}
                    alt="img"
                    width={200}
                    height={200}
                    className=" rounded-xl border-4 border-black"
                  />

                  <div className="font-semibold mt-2">{item.name}</div>

                  <span className="mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 text-angel-blue">
            National Board Vice Presidents
          </h2>

          <div className="mt-5">
            {/* Adjust grid to be responsive */}
            <div className="grid grid-cols-1 md:space-y-0 space-y-2 sm:grid-cols-2 md:grid-cols-5 gap-5 ">
              {BoardMembers.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center md:mx-10">
                  <Image 
                    src={item.boardimage}
                    alt="img"
                    width={200}
                    height={200}
                    className=" rounded-xl border-4 border-black"
                  />

                  <div className="font-semibold mt-2">{item.boardname}</div>

                  <span className="mt-1">{item.boarddesc}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 text-angel-blue">
            National Board Directors
          </h2>

          <div className="mt-5 mx-10">
            {/* Adjust grid to be responsive */}
            <div className="grid grid-cols-1 md:space-y-0 space-y-2 sm:grid-cols-2 md:grid-cols-4 md:gap-32 ">
              {Directors.map((item, index) => (
                <div key={index} className="flex flex-col items-center  text-center mx-2">
                  <Image 
                    src={item.dirimage}
                    alt="img"
                    width={200}
                    height={200}
                    className=" rounded-xl border-4 border-black"
                  />

                  <div className="font-semibold mt-2">{item.dirname}</div>

                  <span className="mt-1">{item.dirdesc}</span>
                </div>
              ))}
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}

export default Team;
