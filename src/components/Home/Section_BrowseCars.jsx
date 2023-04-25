import { IoCarSport } from "react-icons/io5";
import { Section_BrowseDestination } from "./Section_BrowseDestination";
import { AiOutlineSwapRight, AiOutlineSwapLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { browseCars } from "../../Data";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import { Navigation } from "swiper";

export const Section_BrowseCars = () => {
  return (
    <section className="">
      <div className="mb-5 flex justify-end text-2xl gap-5 md:gap-3">
        <AiOutlineSwapLeft className="cursor-pointer" id="cars-prev" />
        <AiOutlineSwapRight className="cursor-pointer" id="cars-next" />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: "#cars-next", prevEl: "#cars-prev" }}
        loop={true}
      >
        {browseCars.map((item) => (
          <SwiperSlide
            key={item.headingText}
            className="grid grid-cols-12  items-center gap-y-10 md:gap-y-0 md:gap-20"
          >
            <div className="col-span-12 md:col-span-6 ">
              <div className="h-[400px]">
                <img
                  src={`./Images/Cars/${item.img}`}
                  className="w-[100%] h-[100%] object-cover object-center rounded-xl md:rounded-[37%] md:border-l-[10px] md:border-[rgba(0,0,0,.1)]"
                  style={
                    {
                      // borderRadius: "37% 63% 75% 25% / 73% 52% 48% 27% ",
                    }
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <p className="capitalize text-[rgba(0,0,0,.2)] text-2xl mb-2">
                {item.headingText}
              </p>
              <h1 className="uppercase text-6xl font-extrabold">
                {item.bigText}
              </h1>
              <div className="mt-5">
                <p className="mb-10 text-xl">{item.subText}</p>

                <a
                  href=""
                  className="bg-black items-center justify-center gap-2 p-3  rounded-full w-[100%] md:w-[30%] text-white flex  hover:shadow-lg"
                >
                  {item.buttonText}
                  <IoCarSport />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Section_BrowseDestination />
    </section>
  );
};