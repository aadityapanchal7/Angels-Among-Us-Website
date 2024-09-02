import React from "react";
import Image from "next/image";


function Module() {
  return (
    <article className="md:space-x-8 space-y-8 px-10 md:space-y-0 md:flex-row flex flex-col mt-10 justify-center ">
      <section>
        <div className="bg-angel-blue rounded-3xl p-6 md:p-8 flex flex-col items-center md:w-80">
          <div className="w-40 h-auto">
            <Image
              src="/NPCF.png"
              width={160}
              height={160}
              alt="Thinking"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start mt-6">
            <h2 className="font-semibold text-2xl md:text-3xl text-blue-950">
              NPCF
            </h2>
            <p
              className={`text-md text-left mt-3 leading-relaxed text-balance `}
            >
              The National Pediatric Cancer Foundation (NPCF) is dedicated to
              funding research aimed at developing less toxic and more effective
              treatments for pediatric cancer.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-grad-blue rounded-3xl p-7 flex flex-col items-center md:w-64">
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-xl md:text-2xl text-navy-blue mt-4">
              NFCR
            </h2>
            <p
              className={`text-md text-left mt-3 leading-relaxed text-balance text-white `}
            >
              The National Foundation for Cancer Research (NFCR) is a global
              leader in funding cancer research, education, and public outreach.
              Their efforts span across various types of cancer.
            </p>
          </div>
          <div className="w-40 h-auto mt-6">
            <Image
              src="/NFCR.png"
              width={160}
              height={160}
              alt="Plane"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-angel-blue rounded-3xl p-6 md:p-8 flex flex-col items-center md:w-80">
          <div className="flex flex-col items-start mt-6">
            <h2 className="font-semibold text-2xl md:text-3xl text-blue-950">
              NBCF
            </h2>
            <p
              className={`text-lg text-left mt-3 leading-relaxed text-balance `}
            >
              The National Breast Cancer Foundation (NBCF) is committed to
              providing early detection, education, and support services for
              women facing breast cancer
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Module;
