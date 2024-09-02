import React from 'react'
import { Karla } from "next/font/google";
import { Outfit } from "next/font/google";

const outfit = Outfit({subsets: ['latin'], weight: ['400'] })
const karla = Karla({ subsets: ['latin'], weight: ['700']})

function Info() {
  return (
    <section className="flex justify-center w-full mt-20" id='About'>
      <div className="w-full max-w-4xl text-center">
        <h1 className={`text-3xl md:text-4xl px-5 text-navy-blue ${karla.className}`}>
          Transforming Lives Through <span className="text-angel-blue md:pl-1">Fundraising</span>
        </h1>
        <div className= {` flex items-center text-2xl md:text-2xl p-10 md:p-0 pt-10  ${outfit.className}`}>

          <div className=" bg-grad-blue/80 p-5 text-2xl shadow-2xl rounded-2xl  mt-5 ">
          At Angels Among Us, our mission is to honor the legacy of those we've lost to cancer by providing unwavering support to those still fighting, while building a compassionate community dedicated to fundraising, advocacy, and raising awareness."
          </div>

        </div>        

      </div>
    </section>
  )
}

export default Info