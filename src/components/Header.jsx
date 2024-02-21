import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <div className="max-w-[1076px] p-2 mx-auto">
        <div className="flex sm:p-0 p-4 justify-between h-[78px] items-center">
          <div>
            <h1 className="font-black text-[#272D38] text-2xl">
              Digital Agency
            </h1>
          </div>
          <ul className="hidden sm:flex items-center gap-[44px] text-[18px] text-[#272D38]">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">testimonials</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
          <div className="sm:hidden">
            <FaBars onClick={openNav} className="cursor-pointer" size={20} />
            {nav && (
              <div className="absolute bg-black/30 w-full h-full top-0 left-0"></div>
            )}
            <div className={`fixed left-0 top-0 bg-white w-[260px] z-10 h-full transform transition-transform ease-in-out duration-300 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
              <div className="flex cursor-pointer justify-end p-4">
                <AiOutlineClose size={20} onClick={openNav} />
              </div>
              <ul className="flex flex-col justify-center items-center mt-28 gap-4 text-[18px] text-[#272D38]">
                <li>
                  <a href="">home</a>
                </li>
                <li>
                  <a href="">about</a>
                </li>
                <li>
                  <a href="">testimonials</a>
                </li>
                <li>
                  <a href="">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
