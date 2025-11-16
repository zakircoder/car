import React from 'react'
import { LuMapPinCheckInside } from "react-icons/lu";
import { BiCalendar } from "react-icons/bi";



const Book = () => {
  return (
    <>
        <section className='Book'>
            <div className="container w-full h=[315px] bg-[#C4C4C4]">
                <div className="Book_Car">
                    <h2 className='w-[308px] font-normal font-'>Book Your Dream Car Now!</h2>
                    <p className=''>Rent a car online now from one of our worldwide locations.
                  With over 20 years’ experience in luxury car and customer services, all we need is your ID and you can book any car.</p>
                </div>
                <div className="Cook_Car_Option">
                    <div><LuMapPinCheckInside /></div>
                    <div><LuMapPinCheckInside /></div>
                    <div><BiCalendar /></div>
                    <div className="button">Book</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Book