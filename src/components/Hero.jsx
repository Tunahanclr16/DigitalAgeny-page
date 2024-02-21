import React from 'react'
import hero from "../assets/hero.png"
export default function Hero() {
  return (
    <div className='max-w-[1065px] mx-auto mt-[20px] overflow-hidden md:mt-[97px] p-2'>
            <div className='flex  flex-col md:flex-row justify-between items-center'>
                <div className=' md:text-left text-center'>
                    <h1 className=' w-[378px] text-[32px] sm:text-[40px] mx-auto md:w-[540px] text-[#272D38] font-bold  md:font-extrabold leading-10 md:text-6xl'>Building digital products, brands & experience</h1>
                    <p className='mt-4  w-[320px] mx-auto md:w-[525px] text-[#272D38]  text-[12px] md:text-lg'>Digital Agency is your online team mangement tool that easy and prompt</p>
                    <button  className='text-[16px] hover:bg-[#8EACC8] transition-all text-[#ffff] w-[167px] h-[48px] rounded mt-[36px] bg-[#8EADD5]'>
                    Contact US
                    </button>
                </div>
                <div><img src={hero} className=' object-cover' alt="" /></div>
            </div>
    </div>
  )
}
