import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import {
  businessInfo,
  experienceLevels,
  infrastructure,
  successStories,
} from "./data";
import { Autoplay, Navigation } from "swiper";
import { BsArrowRight } from "react-icons/bs";

export const HostSection = () => {
  return (
    <section className="flex flex-col gap-20  py-[10vh]">
      <div className="px-5 md:px-[10vw]  md:gap-0 grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <p className="text-6xl capitalize font-bold">
            Accelerate your entrepreneurship
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-y-5 text-black/30 ">
          <p className="text-xl ">
            Start building a small car sharing business with RollSafer
          </p>
          <div className="flex items-center gap-x-5">
            <p className="text-xs">INSURANCE PROVIDER</p>
          </div>
        </div>
      </div>

      <div className="h-[90vh] bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,1)),url(./Images/getHost/1.jpg)] flex  flex-col justify-center items-center px-5 md:px-[20%] bg-fixed">
        <div className="text-white text-xl flex flex-col gap-5 ">
          <h1>
            Take control of your financial future while cultivating your
            entrepreneurial fire with RollSafer, the world’s largest car sharing
            marketplace.
          </h1>

          <h1>
            RollSafer gives budding entrepreneurs the tools and resources they
            need to build a small, successful portfolio of cars to share on the
            marketplace, and the opportunity to add thousands to their annual
            income.
          </h1>

          <h1>
            List your first car now to get started, then build your business
            plan and scale how you want
          </h1>
          <a
            href=""
            className="bg-blue-500 w-[100%] md:w-[20%] py-4 md:py-3 text-center rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="px-5 md:px-[10vw] flex flex-col gap-y-10">
        {/* Business Info */}
        <div>
          <h1 className="text-6xl capitalize font-bold">
            Build a business that’s...
          </h1>
          <section className="my-10 grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-10 md:gap-y-0">
            {businessInfo.map((item, index) => (
              <div className="col-span-1 flex flex-col gap-y-5" key={index}>
                <div className="flex text-2xl gap-x-3 items-center">
                  <span className="flex justify-center items-center w-[60px] h-[60px] bg-blue-500 text-white rounded-full shadow-lg">
                    {index + 1}
                  </span>
                  <h1>{item.heading}</h1>
                </div>
                <p className="text-xl md:text-lg text-black/70">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </section>
        </div>
        {/* Business Info Ends*/}

        {/* Experience Levels */}
        <div className="grid grid-cols-2 gap-y-10">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2">
            <h1 className="col-span-2 text-2xl capitalize font-bold mb-5">
              Entrepreneurs of all experience levels welcome
            </h1>
            <p className="col-span-1 text-black/70 text-lg md:text-[1rem]">
              Whether you want to host a few cars to earn extra income to pay
              for life’s expenses, or build a small shop with a portfolio of
              cars, start with one car and scale how you want.
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0">
            <div className="justify-items-center text-center md:justify-items-start md:text-left order-2 md:order-1 col-span-1 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0">
              {experienceLevels.map((item, index) => (
                <div
                  className="col-span-1 grid grid-cols-2 gap-y-1  md:gap-y-0 italic"
                  key={index}
                >
                  <h1 className="col-span-2 text-3xl md:text-xl font-bold">
                    {item.heading}
                  </h1>
                  <p className=" col-span-2 text-xl md:col-span-1 md:text-[1rem] text-black/70">
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2 col-span-1 flex justify-center items-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
                <img
                  src="./Images/getHost/4.jpg"
                  className="object-cover object-center w-[100%] h-[100%] rounded-full border-4  shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <a
              href=""
              className=" text-white shadow-lg duration-100 block hover:bg-black hover:shadow-xl bg-blue-500 w-[100%] md:w-[20%] py-4 md:py-3 text-center rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Experience Levels Ends*/}

        {/* Infrastructure */}
        <div className="grid grid-cols-2 md:grid-cols-2">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-5">
            <h1 className="text-5xl col-span-1">
              Built-in infrastructure to get you up & running
            </h1>
            <p className="col-span-2 text-lg md:text-[1rem] text-black/60">
              Turo provides the tools to help hosts thrive
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 my-10 gap-y-10 md:gap-10">
            {infrastructure.map((item, index) => (
              <div className="col-span-1 flex flex-col gap-y-4" key={index}>
                <div className="flex items-center gap-x-5 md:gap-x-2">
                  <div className="w-[60px] h-[60px] md:w-[40px] md:h-[40px] border border-blue-500    rounded-full flex items-center justify-center text-blue-500 text-3xl md:text-xl">
                    <item.icon />
                  </div>
                  <h1 className="text-2xl md:text-xl font-bold">
                    {item.heading}
                  </h1>
                </div>
                <p className="text-black/70 text-lg md:text-sm ">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Infrastructure Ends*/}

        {/* Success Stories */}
        <div className="px-0 md:px-[10vw]">
          <div>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
              }}
              className="w-[100%]"
              loop
            >
              {successStories.map((item, index) => (
                <SwiperSlide key={index} className="grid grid-cols-1">
                  <div className="col-span-1">
                    <div className="relative  h-[350px]  w-[100%] md:h-[500px] ">
                      <img
                        src={`./Images/getHost/${item.image}`}
                        className="object-fit object-cover w-[100%] h-[100%]  md:border-8 md:border-[#eee] rounded-lg md:rounded-weird"
                      />
                      <div className="hidden md:block md:w-[40%] p-5 shadow-lg text-sm  absolute right-0 bottom-0 bg-blue-500 text-white rounded-lg">
                        “{item.imageText}”
                      </div>
                    </div>

                    <div className="my-10 md:my-10 ">
                      <h1 className="text-4xl md:text-3xl font-bold mb-2 first-letter:text-6xl first-letter:text-blue-500">
                        {item.heading}
                      </h1>
                      <p className="my-3 text-xl  md:text-right md:text-lg text-black/70">
                        {item.paragraph}
                      </p>
                      <div className="flex md:justify-end">
                        <a
                          href=""
                          className="block my-5 border  border-blue-500 p-3 md:p-5 w-[100%] md:w-[30%] text-center  text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-xl rounded-full duration-1000 text-xl md:text-lg"
                        >
                          Read their story
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Success Stories Ends */}
      </div>
      <div className="px-2 py-[10vh] md:px-[10vw] grid grid-cols-1 md:grid-cols-2 bg-blue-500/10  md:gap-x-10 gap-y-10 md:gap-y-0">
        <h1 className="text-4xl md:text-6xl col-span-1 font-bold capitalize text-center md:text-right">
          Start building your business <span className="text-white">plan</span>
        </h1>
        <div className="col-span-1 text-lg flex flex-col gap-y-5 md:gap-y-2 items-center md:items-end">
          <p className="text-center md:text-right text-xl">
            List your first car to get started today and build your plan to take
            control of your financial future tomorrow.
          </p>
          <a
            href=""
            className="bg-blue-500  w-[70%] md:w-[40%] text-center  py-5 md:py-3 rounded-full text-white text-xl md:text-[1rem] flex items-center justify-center gap-x-2"
          >
            Get Started <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
