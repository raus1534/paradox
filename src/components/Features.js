import React from "react";
import pic from "../assets/work culture.png";

export default function Feature() {
  return (
    <section className="py-4 mx-auto overflow-hidden bg-white md:py-8 md:w-3/4">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image Container */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <img
                src={pic}
                alt="Feature"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg
                         transform transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional decorative element */}
              <div className="absolute w-24 h-24 rounded-full -bottom-4 -right-4 bg-orange-500/10 -z-10" />
              <div className="absolute w-32 h-32 rounded-full -top-4 -left-4 bg-blue-500/10 -z-10" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full space-y-2 text-center md:w-1/2">
            <h1 className="text-6xl font-bold text-gray-900 md:text-9xl lg:text-8xl">
              Features <span className="text-orange-500"> Ought</span> to
              Partake
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
