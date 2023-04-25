import { browseMake } from "../../Data";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

export const Section_BrowseMake = () => {
  return (
    <section className="my-10 min-h-screen flex flex-col md:gap-8">
      <div className=" flex justify-between items-center px-5">
        <h1 className="text-xl font-bold">
          Browse by <span className="text-blue-500">make</span>
        </h1>
        <div className="flex justify-end text-2xl gap-3">
          <BiChevronLeft className="cursor-pointer" id="make_prev" />
          <BiChevronRight className="cursor-pointer" id="make_next" />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: "#make_prev", nextEl: "#make_next" }}
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1028: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        className="grid grid-cols-12    md:gap-5 items-center justify-center my-4"
      >
        {browseMake.carLogos.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center grayscale gap-2 hover:scale-110 hover:grayscale-0 duration-700 hover:text-blue-500 text-[rgba(0,0,0,.3)]">
              <img
                src={`./Images/CarLogos/${image}`}
                alt=""
                className="w-[35px] h-[35px] object-contain "
              />
              <h1>{browseMake.carNames[index]}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-12 md:gap-x-10 gap-3">
        {browseMake.carImage_Big.map((item, index) => (
          <div
            className={`${
              index == 2 ? "col-span-12" : "col-span-6"
            } md:col-span-4 h-[200px] `}
            key={item}
          >
            <img
              src={`./Images/Cars/${item}`}
              className="w-[100%] h-[100%] object-cover object-center rounded-2xl shadow-lg"
              alt=""
            />
          </div>
        ))}

        <div className="col-span-12 md:px-10 grid grid-cols-12 gap-3 md:gap-5">
          {browseMake.carImage_Small.map((item, index) => (
            <div
              className={`${
                index == 2 ? "col-span-12" : "col-span-6"
              } md:col-span-3 h-[150px] ${
                index == 3 ? "hidden md:block" : "block"
              }`}
              key={item}
            >
              <img
                src={`./Images/Cars/${item}`}
                className="w-[100%] h-[100%] object-cover object-center rounded-2xl shadow-lg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
