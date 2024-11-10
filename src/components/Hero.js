import React from "react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full md:h-[90vh] md:py-0 py-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden bg-white shadow-2xl rounded-xl">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/RK1RRVR9A2g?autoplay=1&mute=1"
                title="[4K] Beauty Of Nature | Drone Aerial View | Free stock footage | Free HD Videos - No Copyright"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
