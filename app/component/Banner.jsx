"use client";

import bannerBg from '../../public/bannerlambo1.png'




const HeroSection = () => {
  return (
    <section  className="w-full banner  pb-20">
      {/* HERO TOP PART */}
      <div>
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-0 flex flex-col-reverse lg:flex-row items-center gap-10 py-10">

  
      
                 {/* banner IMAGE */}
        

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
