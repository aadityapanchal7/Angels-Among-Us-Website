import React from 'react'
import Module from './stepModule';


function Steps() {
  return (
    <section className=' mt-10' id='Steps'> 
      <div className=' flex-col'>
      <span className="relative flex justify-center ">
      <h1 className={`text-3xl md:text-4xl mt-10 text-navy-blue font-bold `}>
        In Collaboration <span className="text-angel-blue md:pl-1">With</span>
      </h1>
      </span>
  
        <Module />
      </div>
    </section>
  )
}

export default Steps