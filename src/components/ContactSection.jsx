import React from "react";
import support from "../assets/support.png";
export default function ContactSection() {
  return (
    <div className="mt-[136px] max-w-[1065px] mx-auto  ">
      <div className="bg-[#f6f6f6] w-379px  rounded h-[450px]">
        <div className="flex items-center p-2 sm:gap-[90px] gap-0 justify-center">
          <img className=" sm:flex hidden " src={support} alt="" />
          <div>
            <h2 className="text-[#272D38] font-bold text-[32px] leading-10 w-[309px] sm:mx-0 mx-auto text-center sm:text-left sm:w-[361px] sm:text-[48px]">
              Be a part of the next big thing
            </h2>
            <p className="mt-[16px]  text-[12px] mx-auto w-[309px] sm:w-[330px]  sm:mx-0 sm:text-left text-center sm:text-[16px] text-[#272D38]">
              We work with Brans, Startups, to SMEs. Colaborate for more impact
              and growt
            </p>
            <div className=" sm:block flex justify-center">
            <button className="text-[16px] hover:bg-[#8EACC8] transition-all text-[#ffff] w-[167px] h-[48px] rounded mt-[36px] bg-[#8EADD5]">
              Contact US
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
