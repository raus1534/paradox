import React from "react";
import pic from "../assets/nature.jpg";

export default function Footer() {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src={pic}
        alt="Nature Background"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-white bg-black bg-opacity-40">
        <div className="relative max-w-xl p-10 text-center bg-white rounded-lg bg-opacity-20">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            Every Inspiration from nature
          </h2>
          <p className="mb-6 text-sm md:text-base lg:text-lg">
            Get started using our services with a 30-day free trial
          </p>
          <button className="px-6 py-2 text-sm text-white transition-colors bg-black rounded-full md:px-8 md:py-3 md:text-base">
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
}
