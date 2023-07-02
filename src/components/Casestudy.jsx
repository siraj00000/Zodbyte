import React from "react";

const Casestudy = (props) => {
  return (
    <div className={`${props.bgColor} flex items-center max-w-7xl md:max-h-[700px] h-full py-10 w-full relative`}>
      <div className="flex w-[90%] flex-col h-[90%] my-auto mx-auto md:flex-row max-md:py-8 max-w-6xl">
        <div className="w-[5%]"></div>
        <div className="h-[20%] w-[30%] md:w-[30%] md:h-full flex items-center mr-4 relative justify-center flex-row">
          <img
            className="md:w-2/5 h-40 md:h-[90%]"
            src={props.img}
            alt=""
          />
        </div>
        <div className="w-[5%]"></div>
        <div className="h-[80%] gap-4 relative md:w-[60%] flex items-start text-start justify-around flex-col">
          <h1 className="font-bold mt-4 md:mt-0 font-[yeezy-tstar-700]  md:text-3xl">
            {props.main}{" "}
          </h1>
          <div className="flex flex-row ">
            <p className="font-bold md:text-xl font-[yeezy-tstar-700] mr-4">
              {props.name}
            </p>
            <span>
              <p className="font-tesla text-xl">{props.logo}</p>
            </span>
          </div>
          <div className="h-10"></div>
          <div>
            <h1 className="font-bold font-[yeezy-tstar-700]  md:text-2xl">
              {props.tag2}{" "}
            </h1>
            <h1 className=" font-[yeezy-tstar-700]  md:text-lg mt-2">
              {props.tag3}{" "}
            </h1>
          </div>
        </div>
      </div>
      <p className="absolute md:-left-8 left-64 md:top-[27%] top-[15%] md:rotate-[270deg] rotate-90 font-[yeezy-tstar-700]">
        What people are saying
      </p>
    </div>
  );
};

export default Casestudy;
