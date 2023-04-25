import { browseExperience } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
export const Section_Experience = () => {
  return (
    <section className="min-h-screen ">
      <div className="md:px-20 mb-20">
        <div className="bg-black  p-10 rounded-lg shadow-lg text-white flex flex-col justify-center items-center">
          <h1 className=" text-3xl text-center font-bold mb-5 md:mb-10">
            Get Professional <span className="text-blue-500">Experience</span>
          </h1>
          <p className="text-xl md:px-[10rem] text-center my-5 md:mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
            minima quasi distinctio aspernatur minus molestias suscipit fugit
            harum facilis.
          </p>
          <a
            href=""
            className="block w-[100%] md:w-[25%] text-center px-5 py-2 bg-white text-black rounded-lg"
          >
            Get Experience
          </a>
        </div>
      </div>
      <div className="">
        <div className="col-span-12  flex justify-between items-center md:px-5">
          <h1 className="text-xl font-bold">
            Browse by <span className="text-blue-500">experience</span>
          </h1>

          <div className="flex justify-end text-2xl gap-3">
            <BiChevronLeft className="cursor-pointer" id="exp_prev" />
            <BiChevronRight className="cursor-pointer" id="exp_next" />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            720: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="my-10"
          navigation={{ prevEl: "#exp_prev", nextEl: "#exp_next" }}
        >
          <div className="grid grid-cols-12 py-10 gap-10">
            {browseExperience.map((item) => (
              <SwiperSlide key={item.image}>
                <div className="">
                  <img
                    src={`./Images/Experience/${item.image}`}
                    alt=""
                    className="h-[50vh] w-[100%] object-cover rounded-xl"
                  />
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full bg-black text-white flex justify-center items-center">
                      <item.icon />
                    </div>

                    <h1>{item.text}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
