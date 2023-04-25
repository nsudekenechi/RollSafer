import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export const RightPanel = () => {
  return (
    <div className="col-span-5 grayscale hidden md:block">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        direction={"vertical"}
        className=" h-[100vh] rounded-tl-full rounded-bl-full  overflow-hidden"
        style={{ borderLeft: "10px solid rgba(0,0,0,.1)" }}
      >
        <SwiperSlide>
          <img
            src="./Images/1.jpg"
            className="w-[100%] h-[100%] object-cover  "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Images/2.jpg"
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Images/3.jpg"
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
