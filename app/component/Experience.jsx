import React from "react";

export default function ExperienceSection() {
  return (
    <section className="w-full py-20 bg-white">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold leading-tight mb-16">
        Fell the best experience <br /> with our luxury car
      </h1>

      {/* 3 Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <img src="/exp1.png" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-xl font-semibold mb-3">Book with flexibility</h2>

          <p className="text-gray-600 max-w-xs">
            Easily find car and book with no change fees.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <img src="/exp2.png" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-xl font-semibold mb-3">Trusted and free</h2>

          <p className="text-gray-600 max-w-xs">
            We’re completely free to use — no hidden charges or fees.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <img src="/exp3.png" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-xl font-semibold mb-3">We know travel</h2>

          <p className="text-gray-600 max-w-xs">
            With 10 years of experience, we're ready to help find your perfect car.
          </p>
        </div>
      </div>
    </section>
  );
}
