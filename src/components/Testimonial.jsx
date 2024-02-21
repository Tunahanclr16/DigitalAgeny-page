import React from 'react'
import andrew from "../assets/andrew.png"
import vera from "../assets/vera.png"
import mark from "../assets/mark.png"

export default function Testimonial() {
  return (
    <div className='mt-[136px] max-w-[1065px] mx-auto'>
        <h4 className=' text-[12px] sm:text-[16px] text-[#272D38] text-center '>
        TESTIMONIALS
        </h4>
        <h2 className='text-[#272D38] text-[32px] sm:text-[48px] font-bold  w-[320px] mx-auto leading-10 text-center mt-2 sm:mt-4 sm:w-[435px]'>
        Read What Other Have to Say
        </h2>
        <div className='mt-[38px] flex flex-col sm:flex-row justify-center items-center gap-4'>
            <div className='bg-[#F6F6F6]  rounded w-[345px] h-[345px] mx-auto'>
                <img className='mx-auto mt-[32px]' src={andrew} alt="" />
                <h4 className='text-[#272D38] mt-2 text-base font-bold text-center w-[138px] mx-auto'>Andrew Rathore</h4>
                <p className='mt-[27px] p-7 text-center text-[14px] text-[#272D38]  mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
            <div className='bg-[#F6F6F6]  rounded w-[345px] h-[345px] mx-auto'>
                <img className='mx-auto mt-[32px]' src={vera} alt="" />
                <h4 className='text-[#272D38] mt-2 text-base font-bold text-center w-[138px] mx-auto'>Vera Duncan</h4>
                <p className='mt-[27px] p-7 text-center text-[14px] text-[#272D38]  mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
            <div className='bg-[#F6F6F6]  rounded w-[345px] h-[345px] mx-auto'>
                <img className='mx-auto mt-[32px]' src={mark} alt="" />
                <h4 className='text-[#272D38] mt-2 text-base font-bold text-center w-[138px] mx-auto'>Mark Smith</h4>
                <p className='mt-[27px] p-7 text-center text-[14px] text-[#272D38]  mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
        </div>
    </div>
  )
}
