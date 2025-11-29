import React from 'react'
import { LuMapPinCheckInside } from "react-icons/lu";
import { RiCalendar2Fill } from 'react-icons/ri';



const Book = () => {
  return (
    <>
        <section className='Book mt-[15px]'>
        {/* BOOKING BOX */}
      <div className="w-full flex justify-center px-5">
        <div className="bg-gray-200 max-w-5xl w-full rounded-md p-8 shadow-md">

          <h2 className="text-2xl font-bold">Book Your Dream Car Now!</h2>
          <p className="mt-3 text-gray-600 max-w-xl">
            Rent a car online now from one of our worldwide locations.
            With 20+ years of experience in luxury car rental, all we need
            is your ID and you can book any car.
          </p>

          {/* INPUTS */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Pick-up */}
            <div className="bg-white p-3 rounded-full flex items-center gap-2 border">
              <LuMapPinCheckInside size={20} className="text-blue-600" />
              <input
                type="text"
                placeholder="Pick-up Location"
                className="outline-none w-full"
              />
            </div>

            {/* Drop-off */}
            <div className="bg-white p-3 rounded-full flex items-center gap-2 border">
              <LuMapPinCheckInside size={20} className="text-blue-600" />
              <input
                type="text"
                placeholder="Drop-off Location"
                className="outline-none w-full"
              />
            </div>

            {/* Date */}
            <div className="bg-white p-3 rounded-full flex items-center gap-2 border">
              <RiCalendar2Fill size={20} className="text-blue-600" />
              <input
                type="date"
                className="outline-none w-full"
              />
            </div>

            {/* Book Button */}
            <button className="bg-blue-700 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition">
              Book
            </button>

          </div>
        </div>
      </div>
        </section>
    </>
  )
}

export default Book