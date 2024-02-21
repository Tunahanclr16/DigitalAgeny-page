import React from 'react'
import spotify from "../assets/spotify.png"
import slack from "../assets/slack.png"
import dropbox from "../assets/dropbox.png"
import zoom from "../assets/zoom.png"

export default function CompaniesSection() {
  return (
    <div className='mt-32 mx-auto'>
            <h4 className='text-center text-[#667085] text-[16px]'>
            Trusted by 4,000+ companies
            </h4>
            <div className='mt-[16px] p-2 mx-auto z-10 bg-[#FAFAFA] max-w-[320px] sm:max-w-[915px] h-[86px] rounded'>
                    <div className='flex max-w-[348px] gap-1 sm:max-w-[867px] p-4 justify-between items-center'>
                        <img className=' sm:w-fit w-[70px]'  src={spotify} alt="" />
                        <img className=' sm:w-fit w-[70px]'  src={slack} alt="" />
                        <img className='sm:w-fit w-[70px]' src={dropbox} alt="" />
                        <img className='sm:w-fit w-[70px]'  src={zoom} alt="" />
                    </div>
            </div>
    </div>
  )
}
