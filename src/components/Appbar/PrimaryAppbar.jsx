/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../../assets/header logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStateContext } from "../../context/context_provider";

import { animated } from "react-spring";
import { HashLink } from "react-router-hash-link";

const PrimaryAppbar = (props) => {
  const { language } = useStateContext();
  const [visibility, setVisibility] = useState(false);
  const {
    content: { appbar },
  } = language;
  return (
    <animated.header
      {...props}
      className="fixed w-full z-50 bg-white h-[100px]"
    >
      <nav className="flex md:items-center  lg:max-w-full items-start md:flex-row w-full shadow-md py-2 lg:px-[24px]  h-[100%]">
        {/* brand */}
        <HashLink
          smooth
          to={"/#"}
          className="flex my-auto lg:ms-24 w-1/2 lg:w-1/4 items-center cursor-pointer"
        >
          <img src={Logo} alt="Logo" width={"100%"} />
          {/* <img src={LogoText} width={'50%'} alt="LogoText" /> */}
          {/* <p className="font-tesla text-[2B3241] text-4xl">Zodbyte</p> */}
        </HashLink>
        {/* <div className="flex items-center cursor-pointer">
        </div> */}
        {/* menu desktop*/}
        <div className="lg:flex flex-2 items-center justify-end w-3/4 border-1 gap-6 hidden">
          <HashLink
            smooth
            to={"/#service"}
            className={"font-[yeezy-tstar-700] text-[24px] leading-[39px]"}
          >
            {appbar.itemOne}
          </HashLink>
          <HashLink
            smooth
            to={"/#contact-us"}
            className={"font-[yeezy-tstar-700] text-[24px] leading-[39px]"}
          >
            {appbar.itemTwo}
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
          {/* <h6
            className={
              "font-[yeezy-tstar-700] text-[20px] leading-[24px] cursor-pointer uppercase"
            }
          >
            {appbar.langTag}
          </h6>
          <LangDrop onToggleLang={toggleLanguage} /> */}
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
          className={"font-[yeezy-tstar-700] text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          Service
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

        {/* lang converter */}
        {/* <h6
          onClick={toggleLanguageMob}
          className={
            "font-[yeezy-tstar-700] text-[20px] leading-[24px] cursor-pointer"
          }
        >
          {appbar.langTag}
        </h6> */}
        <HashLink
          smooth
          to={"/#contact-us"}
          className={"font-[yeezy-tstar-700] text-[20px] leading-[24px]"}
          onClick={() => setVisibility(false)}
        >
          <div className="login-box  flex ">
            <form>
              {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="font-[yeezy-tstar-700]  ">
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
