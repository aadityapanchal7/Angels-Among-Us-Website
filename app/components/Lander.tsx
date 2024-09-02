'use client';

import React from 'react';
import  {ReactTyped} from 'react-typed';

function Lander() {
  return (
    <section className="text-white pt-12">
      <div className="mx-auto max-w-screen-xl px-8 flex lg:h-[500px] items-center h-[800px]">
        <div className="mx-auto max-w-3xl text-center justify-center">
          <h1 className="bg-gradient-to-r from-angel-blue via-grad-blue to-angel-blue bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl  leading-tight md:leading-[1.2]">
            Angels Among Us
            <span className="sm:block py-2"></span>
          </h1>
          <ReactTyped
            className="mx-auto mt-10 max-w-xl sm:text-xl/relaxed text-2x text-angel-blue"
            
            strings={[
              'A 501(c)3 Nonprofit Organization.',
            ]}
            typeSpeed={40}
          />
        </div>
      </div>
    </section>
  );
}

export default Lander;
