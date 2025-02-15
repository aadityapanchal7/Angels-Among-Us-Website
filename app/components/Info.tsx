import React from 'react'


function Info() {
  return (
    <section className="flex justify-center w-full mt-20" id='Purpose'>
      <div className="w-full max-w-4xl text-center">
        <h1 className={`text-3xl font-bold md:text-4xl px-5 text-navy-blue `}>
          Transforming Lives Through <span className="text-angel-blue md:pl-1">Fundraising</span>
        </h1>
        <div className= {` flex items-center text-2xl md:text-2xl p-10 md:p-0 pt-10 `}>

          <div className=" bg-grad-blue/80 p-5 text-2xl shadow-2xl rounded-2xl  mt-5 ">
          At Angels Among Us, our mission is to honor the legacy of those we&apos;ve lost to cancer by providing unwavering support to those still fighting, while building a compassionate community dedicated to fundraising, advocacy, and raising awareness.
          </div>

        </div>        

      </div>
    </section>
  )
}

export default Info