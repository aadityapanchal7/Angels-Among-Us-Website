import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { Joinlinks } from "../utils/Joinlinks";
import Link from "next/link";

function Positions() {
  return (
    <section id="Join">
      <div className="max-w-screen-xl px-16 pt-20 pb-10 md:px-28 md:py-8 mt-20">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="max-w-lg mx-auto text-center md:text-left lg:mx-0">
            <h1
              className={`text-4xl md:text-5xl font-bold mt-10 text-navy-blue `}
            >
              Join <span className="text-angel-blue md:pl-1">AAU</span> Today!
            </h1>

            <p className="mt-4 text-navy-blue">
              Join us to make a real impact by raising funds and awareness for
              cancer research and support. Additionally, you’ll help spread cancer
              awareness and advocate for those battling the disease through
              social media, events, and community outreach.
            </p>

            <Link
              href="#"
              target="_blank"
              className="md:inline-block hidden  px-12 py-3 mt-8 text-sm font-medium text-white transition border border-navy-blue rounded-md bg-angel-blue hover:bg-white hover:text-navy-blue"
            >
              Get Started 
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {Joinlinks.map((item, index) => (
              <Link
                className="block p-4 border-2 border-angel-blue shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring "
                key={index}
                href="#"
              >
                <span className="inline-block p-3 rounded-lg bg-gray-50">
                  <LuGraduationCap />
                </span>

                <h2 className="mt-2 font-bold text-left text-angel-blue">
                  {item.name}
                </h2>

                <p className="hidden text-left sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {item.Reqs}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Positions;
