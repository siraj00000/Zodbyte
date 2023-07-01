import React, { useState } from "react";
import Logo from "../../assets/header logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

import { animated } from "react-spring";
import { HashLink } from "react-router-hash-link";


const PrimaryAppbar = (props) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <animated.header
      {...props}
      className="fixed w-full z-50 bg-white border-b-2 border-white"
    >
      <nav className="flex md:items-center  lg:max-w-full items-start md:flex-row w-full shadow-md  lg:px-[24px]  h-[100%] bg-white">
        {/* brand */}
        <HashLink smooth to={"/#"} className="flex  lg:ms-24 w-1/2 lg:w-1/4 h-full items-center relative cursor-pointer">
          <img className="absolute bottom-0" src={Logo} alt="Logo" width={'auto'} height={''} />
        </HashLink>
       
        {/* menu desktop*/}
        <div className="lg:flex flex-2 items-center justify-end w-3/4 border-1 gap-6 hidden">
          <HashLink
            smooth
            to={"/#service"}
            className={"font-[yeezy-tstar-700] text-[24px] leading-[39px]"}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to={"/#service"}
            className={"font-[yeezy-tstar-700] text-[24px] flex items-center  leading-[39px]"}
          >
            Services <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </HashLink>
          <HashLink
            smooth
            to={"/#contact-us"}
            className={"font-[yeezy-tstar-700] text-[24px] leading-[39px]"}
          >
            {"Results"}
          </HashLink>
          <HashLink
            smooth
            to={"/#contact-us"}
            className={"font-[yeezy-tstar-700] text-[24px] leading-[39px]"}
          >
            {"Insights"}
          </HashLink>
          
          <div className="login-box  flex justify-center items-center">
            <form>
              <a href="/" className=" font-[yeezy-tstar-700] text-[20px] ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Work with us
              </a>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile humburger icon */}
      <div className="lg:hidden flex items-center border-[1px] rounded-md border-black p-2 gap-5 w-[56px] h-[56px] absolute top-5 right-5">
        <GiHamburgerMenu
          onClick={() => setVisibility(!visibility)}
          fontSize={50}
        />
      </div>

      {/* menu mobile */}
      <nav
        className={`${
          visibility ? "flex" : "hidden"
        } lg:hidden flex-col justify-end w-full absolute top-[5.5rem] bg-white z-10 border-[1px] gap-3 p-[24px]`}
      >
        <HashLink
          smooth
          to={"/#service"}
          className={"font-[yeezy-tstar-700] flex text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          Service <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </HashLink>
        <HashLink
          smooth
          to={"/#contact-us"}
          className={"font-[yeezy-tstar-700] text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          Contact Us
        </HashLink>
        <HashLink
          smooth
          to={"/#contact-us"}
          className={"font-[yeezy-tstar-700] text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          Results
        </HashLink>
        <HashLink
          smooth
          to={"/#contact-us"}
          className={"font-[yeezy-tstar-700] text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          Insights
        </HashLink>
       
        <HashLink
          smooth
          to={"/#contact-us"}
          className={"font-[yeezy-tstar-700] text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          <div className="login-box  flex ">
            <form>
              <a href="/" className=" font-[yeezy-tstar-700]">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Work with us
              </a>
            </form>
          </div>
        </HashLink>
      </nav>
    </animated.header>
  );
};

export default PrimaryAppbar;
