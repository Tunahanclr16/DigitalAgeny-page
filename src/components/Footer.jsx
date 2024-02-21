import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[1440xp] bg-[#f6f6f6] h-full mt-[113px]">
       <div className="max-w-[1065px]  mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col items-center mt-8 sm:mt-32">
            <h3 className="text-2xl font-bold text-[#272D38]">
              Digital Agency
            </h3>
            <p className="text-[16px] w-[240px] text-[#272D38] mt-4">
              Building digital products, brands & experiences
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 sm:mt-32">
            <h3 className="text-2xl font-bold text-[#272D38]">Resources</h3>
            <p className="text-[16px] text-[#272D38] mt-4">Guides</p>
            <p className="text-[16px] text-[#272D38] mt-2">Tutorials</p>
            <p className="text-[16px] text-[#272D38] mt-2">Blog</p>
            <p className="text-[16px] text-[#272D38] mt-2">FAQ</p>
          </div>
          <div className="flex flex-col items-center mt-8 sm:mt-32">
            <h3 className="text-2xl font-bold text-[#272D38]">Company</h3>
            <p className="text-[16px] text-[#272D38] mt-4">About US</p>
            <p className="text-[16px] text-[#272D38] mt-2">Careers</p>
            <p className="text-[16px] text-[#272D38] mt-2">Partners</p>
            <p className="text-[16px] text-[#272D38] mt-2">Contact US</p>
          </div>
          <div className="flex flex-col items-center mt-8 sm:mt-32">
            <h3 className="text-2xl font-bold text-[#272D38]">Social Media</h3>
            <p className="text-[16px] text-[#272D38] mt-4">Linkedin</p>
            <p className="text-[16px] text-[#272D38] mt-2">Facebook</p>
            <p className="text-[16px] text-[#272D38] mt-2">İnstagram</p>
            <p className="text-[16px] text-[#272D38] mt-2">Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
