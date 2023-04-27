import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
export const Section_Browse = ({ data, text }) => {
  return (
    <section className="col-span-12  md:gap-2 grid grid-cols-12  items-center">
      <div className="col-span-12  flex justify-between items-center md:px-5 mb-5">
        <h1 className="text-xl font-bold">
          Browse by <span className="text-blue-500">{text}</span>
        </h1>

        <div className="flex justify-end text-2xl gap-3">
          <BiChevronLeft className="cursor-pointer" id="des_prev" />
          <BiChevronRight className="cursor-pointer" id="des_next" />
        </div>
      </div>
      <Swiper
        className="col-span-12 grid grid-cols-12"
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={5}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 10 },
          720: { slidesPerView: 4, spaceBetween: 15 },
          1028: { slidesPerView: 4, spaceBetween: 20 },
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={{ prevEl: "#des_prev", nextEl: "#des_next" }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[200px] mb-2 rounded-xl overflow-hidden">
              <img
                src={`./Images/Cars/${item.img}`}
                alt=""
                className="w-[100%] h-[100%] object-cover object-center duration-1000  hover:scale-105"
              />
            </div>
            <h1 className="">{item.make}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
