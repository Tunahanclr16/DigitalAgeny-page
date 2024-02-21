import React from 'react'
import custome from "../assets/custome.png"
export default function CustomeSection() {
  return (
    <div className='max-w-[1065px]  mx-auto mt-[88px] sm:mt-[120px]'>
    <div className='flex  justify-between items-center sm:flex-row flex-col '>
        <div>
            <h2 className='font-bold text-[#272D38] text-[32px] sm:text-[48px] mx-auto leading-[52px] w-[380px] sm:text-left text-center sm:w-[435px]'> 
            Custome & Plugin Development
            </h2>
            <p className='text-[#272D38] p-2 sm:text-left text-center mx-auto sm:mx-0   w-[330px] sm:w-[392px] text-[14px] mt-5 sm:text-[16px]'>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
        </div>
        <div>
            <img src={custome} alt="" />
        </div>
    </div>
</div>
  )
}
