'use client'
import React from 'react'

const Banner = () => {
  return (
    <>
       <section id='banner'>
         <div className="bannerBg relative w-full h-[600px] bg-[#c4c4c4]">
         <div className="banerImage absolute w-full h-[61px] bg-cover bg-center bg-no-repeat mt-[41px]">
            <img src="/banner lambo 1.png" alt="" />
           <div className="bannerPart float-end mt-[258px] mr-[42px]">
            <h2 className='font-Dm font-normal text-[32px] text-[#000000] w-[380px] mb-[18px]'>safer ,faster and comfortable</h2>
            <p className=' w-[286]font-normal font-roboto text-[26px] text-[#000000]'>Get in touch with ourluxury cars</p>
            <button className=' mt-5 w-[251px] h-[41px] bg-[#21408E] text-[#ffffff] font-normal font-roboto text-[22px] rounded-[17px]'>Rent Now</button>
           </div>
         </div>
         </div>
       </section>
    </>
  )
}

export default Banner