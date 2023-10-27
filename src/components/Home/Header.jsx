import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
export const Header = () => {
  const images = [1, 2, 3, 4];
  return (
    <header className="mb-[100px] md:mb-[30vh] ">
      <div className="my-10 grid grid-cols-12 md:gap-10 items-center">
        <div className="col-span-12 md:col-span-5 ">
          <h1 className=" text-[5rem] font-bold" style={{ lineHeight: "5rem" }}>
            <span className="text-blue-500">Rent</span> the best cars in the
            <span className="text-blue-500"> world</span>
          </h1>
          <p className="text-black/40 text-xl md:text-sm mb-8 my-2 md:my-4 md:mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sunt
            soluta illum repudiandae expedita? Cumque provident hic repellat
            est, enim cum eius, quidem aut quia obcaecati maxime blanditiis
            dolorem quam!
          </p>
          <a
            href=""
            className="block w-[50%] bg-blue-500 px-5 py-4 rounded-full text-white text-center btn_blue-shadow hover:bg-black"
          >
            Find Your Drive
          </a>
        </div>

        <div className="hidden md:block md:col-span-7 ">
          <div className="h-[400px] flex justify-center items-center">
            <Swiper modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".con",
                renderBullet: (index, className) => (
                  `<span class='${className} w-fit h-fit bg-transparent' >
            <img  src=./Images/CarLogos/${images[index]}.png  class="w-[50px] h-[50px] object-contain grayscale hover:grayscale-0 duration-700 hover:scale-150 scale-110 cursor-pointer"/>
            </span> `
                )
              }}
              loop={true} >
              <SwiperSlide>
                <img src="./Images/Cars/rolls.png" alt="" className="h-[100%] w-[100%]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./Images/Cars/1.png" alt="" className="h-[100%] w-[100%]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./Images/Cars/tesla.png" alt="" className="h-[100%] w-[100%]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./Images/Cars/benz.png" alt="" className="h-[100%] w-[100%]" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex gap-x-20 items-center justify-center con"></div>
        </div>
      </div>
    </header>
  );
};
