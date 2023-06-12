import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Main from "../components/Main";
import AnimatedPicComponent from "../components/AnimatedPicComponent";
import Calendy from "../components/Calendy";
import { useStateContext } from "../context/context_provider";
import { INPUT_DATA, INPUT_DATA_1, INPUT_SCHEMA, TEXTAREA_DATA } from "../Data/InputData";
import Carousel from "../components/Carousel";
import ScrollDown from "../components/ScrollDown";
import Casestudy from "../components/Casestudy";
import TextField from '@mui/material/TextField';
const Home = () => {
  const { language } = useStateContext();
  const [values, setValues] = useState(INPUT_SCHEMA);
  const form = useRef();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const {
    body: { section1, section2, section3, section4 },
  } = language?.content;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_auuf55h", // service key
        "template_2la2kqv", // template key
        form.current,
        "user_4qjomoYaesK6lyCVrjXKF" // public key
      )
      .then(
        (result) => {
          alert("Email sent!");
          setValues(INPUT_SCHEMA);
        },
        (error) => {
          alert("Email sent failed");
        }
      );
  };

  return (
    <main className="bg-white pt-[100px] w-full overflow-x-hidden ">
      {/* Section 01 */}
      <Main />
      <section className="md:p-[5%] md:pt-[5%] max-md:py-[8%] w-full max-w-[1600px] mx-auto">
          <div id="service" className="md:h-[25px]"></div>
          <h2 className="font-[yeezy-tstar-700] md:text-left text-center text-[34px]  leading-[39px] sm:leading-[34px] w-full md:mb-[30px]">
            {section3.title}
          </h2>

          <div className="flex max-md:flex-col justify-center gap-4 ">
            <AnimatedPicComponent
              title={section3.tag1.title}
              des={section3.tag1.des}
              btnText={section3.tag1.buttonText}
              url={"#"}
              src="https://nortalweb.wpenginepowered.com/wp-content/uploads/2022/05/img-future-portrait.jpg"
            />
            <div className="w-full border-t-[1px]  my-2 md:hidden block"></div>
            <AnimatedPicComponent
              title={section3.tag2.title}
              des={section3.tag2.des}
              btnText={section3.tag2.buttonText}
              url={"#"}
              src={
                "https://media.istockphoto.com/photos/office-skysraper-in-the-sun-picture-id523875332?b=1&k=20&m=523875332&s=612x612&w=0&h=hQrhhA0zbzz1l3ZVUXfwz7ou5Xig3kEw0rtGtj3ADO0="
              }
            />
            <div className="w-full border-t-[1px]  my-2 md:hidden block"></div>
            <AnimatedPicComponent
              title={section3.tag3.title}
              des={section3.tag3.des}
              btnText={section3.tag3.buttonText}
              url={"#"}
              src={`https://nortal.com/wp-content/uploads/2022/05/img-delivered-portrait.jpg`}
            />
          </div>
        </section>
      {/* <section className="flex justify-center mx-auto w-full topbottom-spacing max-w-[1600px]">
        <div className="font-roboto mt-[2%] md:w-full lg:w-[40%] lg:px-0 px-[5%]">
          <h5 className="text-black font-bold text-[26px]">{section1.para1}</h5>
          <p className="text-[36px] leading-[40px] font-bold">
            <strong>{section1.para2}</strong>
          </p>
          <h6 className="font-roboto font-medium text-[21px] mt-3">
            {section1.para3}
          </h6>
          <h6 className="font-roboto font-medium text-[21px] mt-5">
            {section1.para4}
          </h6>
          <HashLink
            smooth
            to="/#contact-us"
            className="flex items-center flex-col justify-center bg-[#D9D9D9] min-w-[332px] min-h-[74px] rounded-[15px] mx-auto mt-14 p-2"
          >
            <h2 className="font-[yeezy-tstar-700] text-[24px] leading-[29px]">
              {section1.buttonTitle}
            </h2>
            <h6 className="font-[yeezy-tstar-700] text-[12px] leading-[15px]">
              {section1.buttonSubTitle}
            </h6>
          </HashLink>
        </div>
        <div className="lg:block hidden">
          <img
            src={ZodbyteMan}
            alt="zodbyte"
            className="object-cover h-full float-right -mr-[60px] max-h-[700px] w-full"
          />
        </div>
      </section> */}
      <div className="w-full   overflow-hidden">
      <section className="my-10  after:z-10 after:absolute relative after:top-0 after:h-full after:w-full before:absolute before:z-10 before:text-4xl before:font-bold before:text-white before:top-1/2 before:left-1/2 carousel-div">
      
      <Carousel/>
      <div className='absolute top-1/2 left-[43.333%] z-50  '><p className="text-white  font-[yeezy-tstar-700] font-bold text-4xl shadow-lg">Updated Soon</p> </div>
    </section>
    
    </div>
      {/* Section 02 & 03 */}
      <div className="flex md:flex-col flex-col-reverse ">
        {/* In mobile version section 2 & 3 will be swaped */}

        {/* Section 02, Mob section 03 */}
        {/* <section className="bg-green-700 md:pt-2 md:pb-10 pt-14 pb-20 max-md:py-20 ">
          <div className="max-w-[1100px] mx-auto max-lg:px-[2%]">
            <h2 className="font-[yeezy-tstar-700] text-[32px] leading-[39px] md:text-right text-left w-full mb-3 md:mt-8 md:ml-0 max-md:ml-[18%]">
              {section2.title}
            </h2>
            <div className="flex md:flex-row flex-col items-center justify-between w-full md:mt-0 mt-6">
              <div className="w-[400px] md:m-0 ">
                <p className="font-[yeezy-tstar-700] text-[28px] leading-[24px] md:m-0 mb-5">
                  {section2.para1}
                </p>
                <p className="font-[yeezy-tstar-700] text-[28px] leading-[24px] mt-5 md:block hidden">
                  {section2.para2}
                </p>
              </div>
              <div className="flex-2 md:w-[60%] w-full">
                <SimpleCarousel />
              </div>
            </div>
          </div>
        </section> */}

        {/* Section 03, Mob section 02 */}
        <section className="md:p-[5%] md:pt-[5%] max-md:py-[8%] w-full max-w-[1600px] mx-auto">
          <div id="service" className="md:h-[25px]"></div>
          <h2 className="font-[yeezy-tstar-700] md:text-left text-center text-[34px]  leading-[39px] sm:leading-[34px] w-full md:mb-[30px]">
            {section3.title}
          </h2>

          <div className="flex max-md:flex-col justify-center gap-4 ">
            <AnimatedPicComponent
              title={section3.tag1.title}
              des={section3.tag1.des}
              btnText={section3.tag1.buttonText}
              url={"#"}
              src="https://nortalweb.wpenginepowered.com/wp-content/uploads/2022/05/img-future-portrait.jpg"
            />
            <div className="w-full border-t-[1px]  my-2 md:hidden block"></div>
            <AnimatedPicComponent
              title={section3.tag2.title}
              des={section3.tag2.des}
              btnText={section3.tag2.buttonText}
              url={"#"}
              src={
                "https://media.istockphoto.com/photos/office-skysraper-in-the-sun-picture-id523875332?b=1&k=20&m=523875332&s=612x612&w=0&h=hQrhhA0zbzz1l3ZVUXfwz7ou5Xig3kEw0rtGtj3ADO0="
              }
            />
            <div className="w-full border-t-[1px]  my-2 md:hidden block"></div>
            <AnimatedPicComponent
              title={section3.tag3.title}
              des={section3.tag3.des}
              btnText={section3.tag3.buttonText}
              url={"#"}
              src={`https://nortal.com/wp-content/uploads/2022/05/img-delivered-portrait.jpg`}
            />
          </div>
        </section>
      </div>
      <div className="w-full relative my-4 text-center">
        <div className="h-1 w-48 mx-auto border-2 my-8 border-black">
        </div>
        <h2 className="relative mb-5 font-[yeezy-tstar-700] md:text-[40px] max-md:text-[30px] md:leading-[36px] leading-[39px] max-md:text-center pb-5 w-full">
              Ready To collaborate?
            </h2>
            <div className="h-5"></div>
            <ScrollDown borderColor={'text-black '}/>
           
            
      </div>
      {/* Section 04 */}
      <section className="pt-[30px] pb-[49px] gap-10 w-full">
        <div id="contact-us" className="h-10"></div>
        <div className="flex flex-wrap md:flex-row flex-col items-top justify-center gap-10 w-full 2xl:max-w-[1400px] max-w-[1200px] mx-auto">
          <div className="w-full flex-1 h-auto max-md:px-[8%]">
            <h2 className="font-[yeezy-tstar-700]  md:text-[34px] max-md:text-[30px] md:leading-[36px] leading-[39px] max-md:text-center pb-5 w-full">
              {section4.subSec1.title}
            </h2>
            <div className="bg-[#283241] overflow-hidden  p-2 rounded-lg max-h-[870px] md:max-h-[870px] lg:max-h-[850px] contact-card">
              <Calendy />
            </div>
          </div>
          <div className="w-full border-t-[1px] my-2 md:hidden block"></div>
          <div className="flex-1 w-full max-md:px-[8%]">
           
            <div className="h-[70%]">
              <h2 className="font-[yeezy-tstar-700] md:text-[34px] max-md:text-[30px] md:leading-[36px] leading-[39px] max-md:text-center pb-5">
                {section4.subSec2.formtitle}
              </h2>
              
              
              <div className="bg-[#283241] flex justify-center items-center p-2 min-h-4xl rounded-lg contact-card">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white   h-[90%] md:px-5 px-10 py-24    max-md:py-14 flex flex-1 flex-col gap-0 max-md:gap-2  justify-between "
              >
                {INPUT_DATA_1.map((input, index) => (
                  <TextField id="outlined-basic" label='Full Name' variant="outlined"
                    key={index}
                    {...input}
                    
                    value={values[input.name]}
                    onChange={onChange}
                    className="bg-gray-100 border-black border-2 my-4"
                  />
                ))} 
                <div className="flex my-5 flex-wrap gap-3 lg:gap-5">
                {INPUT_DATA.map((input, index) => (
                  <TextField id="outlined-basic" label={section4.subSec2.form[input.name]} variant="outlined"
                    key={index}
                    {...input}
                    placeholder={input.placeholder}
                    value={values[input.name]}
                    onChange={onChange}
                    className="w-[48%]  px-4  my-4 bg-gray-100"
                  />
                ))}</div>
                {TEXTAREA_DATA.map((input, index) => (
                  <TextField id="outlined-multiline-static"
                  label="Tell us about your project"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                    key={index}
                    {...input}
                    
                    value={values[input.name]}
                    onChange={onChange}
                    className="w-[100%]     bg-gray-100 "
                  />
                ))}
                
                <div class="cont w-[100px] md:w-[310px]">
                  <button class="submit-btn mx-auto left-0 right-0 my-4">
                    <span>Submit</span>
                    <img
                      class="submit-img"
                      src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                      borderColor='black'
                      height="62"
                      width="62"
                    />
                  </button>
                </div>
              </form>
              </div>
            </div>
            <div className="h-8"></div>
            <div className="h-[30%]">
              <h2 className="font-[yeezy-tstar-700] md:text-[20px] max-md:text-[18px] max-md:text-center text-[20px] md:leading-[22px] leading-[22px]">
              We’re not just a marketing agency. We’re an extension of your team that integrates seamlessly with the other arms of your business, driving profound impact on your bottom line without creating more work. 
              <br />
              <br />
We’re not just a marketing agency. We’re an extension of your team that integrates seamlessly with the other arms of your business, driving profound impact on your bottom line without creating more work.
              </h2>
              {/* <h2 className="font-[yeezy-tstar-700] md:text-[50px] max-md:text-[45px] max-md:text-center text-[32px] md:leading-[66px] leading-[39px] pt-2">
                {section4.subSec2.demoCall}
              </h2> */}
              {/* <p className="font-[yeezy-tstar-700] text-[21px] max-md:text-[18px] leading-[22px] max-md:text-center md:m-0 my-8 md:my-3">
                {section4.subSec2.para}
              </p>
              <p className="font-[yeezy-tstar-700] text-[21px] max-md:text-[18px] leading-[22px] max-md:text-center md:m-0 mb-8 md:mt-5">
                {section4.subSec2.para2}
              </p> */}
            </div>
          </div>
        </div>
      </section>
              <Carousel/>
    </main>
  );
};

export default Home;
