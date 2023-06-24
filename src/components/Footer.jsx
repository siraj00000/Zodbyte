import React from "react";
// import WaveSection from "./WaveSection";
import statue1 from "../assets/statuedarkquantized1.png";
import StripeGradient from './StripeGradient'


const Footer = () => {
  return (
    <>
    {/* <WaveSection/> */}
    <StripeGradient/>
    <footer className="">
      <section className="md:block hidden w-full md:px-[8%] pt-[39px] pb-10 justify-center relative overflow-hidden
      bg-[#5E6C8C]">
         {/* Footer Color above */}

        <div className="flex w-full justify-center gap-4">
          <div className="flex-1 z-10 bg-[#D9D9D9] rounded-xl p-3">
            <h6 className="font-[yeezy-tstar-700] font-bold">Contact</h6>
            <ul className="list-inside font-[yeezy-tstar-700] md:text-[20px] md:leading-[24px] pl-4">
              <li>X</li>
              <li>X</li>
              <li>X</li>
            </ul>
          </div>
          <div className="flex-1 z-10 bg-[#D9D9D9] rounded-xl p-3">
          <h6 className="font-[yeezy-tstar-700] font-bold">Services</h6>
            <ul className="list-inside font-[yeezy-tstar-700] md:text-[20px] md:leading-[24px] pl-4">
              <li>X</li>
              <li>X</li>
              <li>X</li>
            </ul>
          </div>
          <div className="flex-1 z-10 bg-[#D9D9D9] rounded-xl p-3">
          <h6 className="font-[yeezy-tstar-700] font-bold">Zodbyte</h6>
            <ul className="list-inside font-[yeezy-tstar-700] md:text-[20px] md:leading-[24px] pl-4">
              <li>X</li>
              <li>X</li>
              <li>X</li>
            </ul>
          </div>
          <div className="flex-1 z-10 bg-[#D9D9D9] rounded-xl p-3">
          <h6 className="font-[yeezy-tstar-700] font-bold">Insights</h6>
            <ul className="list-inside font-[yeezy-tstar-700] md:text-[20px] md:leading-[24px] pl-4">
              <li>X</li>
              <li>X</li>
              <li>X</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-4 relative z-10 mt-12">
          <img className="h-40" src={statue1} alt="" />
          <div className="text-center flex flex-col my-auto items-between">
            <h1 className="text-4xl font-tesla text-[#3C2B41] ">Zodbyte</h1>
            <p>© 2023 Zodbyte. All rights reserved.</p>
          </div>
          <img className="h-40 transform -scale-x-100" src={statue1} alt="" />
        </div>
      </section>
      <section className="max-md:block hidden px-[8%] py-10 w-full relative overflow-hidden bg-[#5E6C8C]">
        <h6 className="font-[yeezy-tstar-700] text-[32px] leading-[39px] ml-10 z-10">
          @zodbyte2k22
        </h6>
        <div className="flex-1 bg-[#D9D9D9] p-10 pb-20 mt-6 z-10">
          <ul className="list-inside list-disc font-[yeezy-tstar-700] min-h-[300px] text-[32px] leading-[39px]">
            <li>zodbyte 2k22</li>
            <li>zodbyte 2k22</li>
            <li>zodbyte 2k22</li>
          </ul>
        </div>
      </section>
    </footer>
    </>
  );
};

export default Footer;
