import Link from 'next/link'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
       <section id='Navbar'>
            <div className='container'>
           <div className="navRow flex justify-between items-center py-[34px]">

                <div className="navLogo"> <Link href={"/"}><img src="/LuxuryCars.png" alt="logo" /></Link></div>
           <div className="navItem ">
            <ul className='flex gap-[25px]'>
                <li><Link href={"/"}>Home</Link></li>
                 <li><Link href={"/Services"}>Services</Link></li>
                <li><Link href={"/Blog"}>Blog</Link></li>
                <li><Link href={"/Contact Us"}>Contact Us</Link></li>
            </ul>
        </div>
        <div className="navIcon flex gap-[9px] items-center">
          <div className='text-[#F1BC00] text-[30px]'>
            <FaUserCircle/>
            </div>
           <h2><Link href={"/sign In"}>Sign In</Link></h2>
        </div>
            </div>
           </div>
       </section>
    </>
  )
}

export default Navbar