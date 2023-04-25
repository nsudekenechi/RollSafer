import { destination } from "../../Data";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
export const Section_BrowseDestination = () => {
  return (
    <section className="col-span-12 md:my-10  md:py-10   md:gap-10 grid grid-cols-12  items-center my-10">
      <div className="col-span-12  flex justify-between items-center md:px-5 mb-5">
        <h1 className="text-xl font-bold">
          Browse by <span className="text-blue-500">destination</span>
        </h1>

        <div className="flex justify-end text-2xl gap-3">
          <BiChevronLeft className="cursor-pointer" id="des_prev" />
          <BiChevronRight className="cursor-pointer" id="des_next" />
        </div>
      </div>
      <Swiper
        className="col-span-12 grid grid-cols-12 h-[200px]"
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={5}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 10 },
          720: { slidesPerView: 4, spaceBetween: 15 },
          1028: { slidesPerView: 6, spaceBetween: 20 },
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={{ prevEl: "#des_prev", nextEl: "#des_next" }}
      >
        {destination.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="col-span-12 md:col-span-2  h-[150px]">
              <img
                src={`./Images/Destination/${item.img}`}
                alt=""
                className="w-[100%] h-[100%] object-cover object-center rounded-xl mb-3"
              />
              <h1 className="">{item.place}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
