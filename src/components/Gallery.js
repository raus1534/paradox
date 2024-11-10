import React from "react";
import pic1 from "../assets/earth.png";
import pic2 from "../assets/1542298796.jpg";

export default function Gallery() {
  return (
    <section className="w-full py-4 mx-auto overflow-hidden bg-white md:py-24 md:w-3/4">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* First Image */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden group rounded-2xl">
              <img
                src={pic2}
                alt="Feature"
                className="w-full h-[400px] object-cover transform transition-transform 
                         duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 transform translate-y-6 group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold text-white">
                    Innovation
                  </h3>
                  <p className="mt-2 text-gray-200">
                    Discover our cutting-edge solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden group rounded-2xl">
              <img
                src={pic1}
                alt="Feature"
                className="w-full h-[400px] object-cover transform transition-transform 
                         duration-500 ease-out group-hover:scale-110"
              />
              {/* Optional hover overlay */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 transform translate-y-6 group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold text-white">
                    Excellence
                  </h3>
                  <p className="mt-2 text-gray-200">
                    Experience the difference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
