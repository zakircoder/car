import React from "react";

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden mt-[49px]">
      {/* Background Shapes */}
      {/* <div className="absolute left-0 top-10 w-[380px] h-[380px] bg-[#e8e6e6] rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute left-20 top-20 w-[420px] h-[260px] bg-[#e6b92c] rounded-[90px] opacity-80 -z-10"></div> */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Image */}
        <div className="relative w-full flex justify-center">
          <img
            src="/Group 24.png"
            alt="Car"
            className="w-[90%] md:w-[80%] drop-shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-10">Our Services</h2>

          <div className="space-y-10">
            {/* Service 1 */}
            <div className="flex items-start gap-4">
              <span className="w-12 h-7 bg-yellow-500 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">Car Hire</h3>
                <p className="text-gray-600 text-sm max-w-sm">
                  We pride ourselves in always going the extra mile for our customers.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start gap-4">
              <span className="w-12 h-7 bg-yellow-500 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">Car Sales</h3>
                <p className="text-gray-600 text-sm max-w-sm">
                  We sale the best luxury cars across the world at a competitive price.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start gap-4">
              <span className="w-12 h-7 bg-yellow-500 rounded-full mt-2"></span>
              <div>
                <h3 className="text-xl font-semibold">Hire a driver</h3>
                <p className="text-gray-600 text-sm max-w-sm">
                  If you want to travel and feel comfortable, our drivers are available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
