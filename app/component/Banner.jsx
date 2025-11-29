"use client";
import Image from "next/image";





const HeroSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] pb-20">
      {/* HERO TOP PART */}
      <div>
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-0 flex flex-col-reverse lg:flex-row items-center gap-10 py-10">

      
        {/* LEFT TEXT */}
        {/* <div className="flex-1"> */}
      
                 {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/banner lambo 1.png"
            width={1980}
            height={450}
            alt="Lamborghini"            
            className="drop-shadow-xl object-contain"
          />
        </div>

          <p className="mt-5 text-xl font-semibold text-black">
            Safer, Faster And Comfortable
          </p>
          <p className="text-gray-600 mt-2 max-w-sm">
            Get in touch with our luxury cars
          </p>

          <button className='bannerBtn'>
            Rent Now
          </button>
        </div>
 
      </div>

    
    </section>
  );
};

export default HeroSection;
