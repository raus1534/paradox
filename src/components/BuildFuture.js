import React from "react";
import pic from "../assets/original.jpg";

export default function BuildFuture() {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
      <img
        src={pic}
        alt="Feature Banner"
        className="object-cover w-full h-full brightness-75"
      />
      <div className="absolute inset-0 bg-black/30" />{" "}
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="px-4 text-4xl font-bold tracking-wide text-center text-white md:text-5xl lg:text-6xl drop-shadow-lg">
          Building The Future
        </h1>
      </div>
    </section>
  );
}
