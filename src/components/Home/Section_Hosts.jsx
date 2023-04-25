import { HiOutlineUser, HiStar } from "react-icons/hi";
import { GiCarKey } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Host } from "../../Data";
import "swiper/swiper-bundle.min.css";

export const Section_Hosts = () => {
  return (
    <section className="py-20 min-h-screen ">
      <div>
        <div className="col-span-12  flex justify-between items-center px-5">
          <div>
            <p className="capitalize text-[rgba(0,0,0,.2)] text-md mb-2">
              meet the hosts
            </p>
            <h1 className="uppercase text-4xl font-extrabold ">
              top hosts on turo
            </h1>
          </div>

          <div className="flex justify-end text-2xl gap-3">
            <BiChevronLeft className="cursor-pointer" id="host_prev" />
            <BiChevronRight className="cursor-pointer" id="host_next" />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            720: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="grid grid-cols-12 py-10 "
          navigation={{ prevEl: "#host_prev", nextEl: "#host_next" }}
        >
          {Host.map((item, index) => (
            <SwiperSlide
              className="grid grid-cols-12  h-[40vh] rounded- gap-x-5 md:gap-5 p-3 md:p-5"
              style={{ boxShadow: "0px 0px 20px rgba(0,0,0,.2)" }}
              key={index}
            >
              <div className="col-span-5 md:col-span-3">
                <div className="w-[100%] h-[100px] md:w-[70px] md:h-[70px]  rounded-full">
                  <img
                    src={`./Images/Host/${item.img}`}
                    alt=""
                    className="w-[100%] h-[100%] object-cover object-center "
                    style={{
                      borderRadius: "37% 63% 75% 25% / 73% 52% 48% 27% ",
                    }}
                  />
                </div>
              </div>
              <div className=" col-span-7 md:col-span-9 ">
                <h1 className="text-2xl md:text-md font-bold">{item.name}</h1>
                <div className="flex items-center text-xl md:text-sm  gap-2">
                  <HiOutlineUser />
                  <p>All-star Host</p>
                </div>
                <div className="block md:flex md:items-center leading-1 mt-1 text-lg md:text-sm md:gap-2 text-black/50">
                  <p className="">{Math.floor(Math.random() * 300)} trips</p>
                  <div className="hidden md:block bg-black w-[4px] h-[4px] rounded-full"></div>
                  <p className="">Joined {item.joined}</p>
                </div>
              </div>

              <div className="col-span-12 flex flex-col gap-3">
                <div className="flex items-center gap-1 text-blue-500">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </div>
                <p className="text-lg text-black/50">{item.text}</p>

                <p className="text-lg text-black/50">
                  {item.fullname} - {item.year}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-12 py-20 md:gap-20 md:items-center md:px-10 gap-y-10">
        <div className="col-span-12 md:col-span-5  h-[300px] ">
          <img
            src="./Images/Cars/11.jpg"
            className="w-[100%] h-[100%] object-cover object-center "
            alt=""
            style={{
              borderRadius: "37% 63% 75% 25% / 73% 52% 48% 27% ",
              borderLeft: "10px solid rgba(59,130,246,.3)",
              borderRight: "10px solid rgba(59,130,246,.3)",
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <h1 className="uppercase text-6xl font-extrabold">book car</h1>
          <div className="mt-5 text-xl">
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              maxime et nesciunt a rem sequi earum ab similique quibusdam cumque
              eius, possimus repellat illo numquam accusantium porro ut
              dignissimos, ipsum incidunt accusamus assumenda deleniti sunt
              ullam? Odit quod iusto sequi.
            </p>

            <a
              href=""
              className="bg-black items-center justify-center gap-2 p-3  rounded-full w-[100%] md:w-[30%] text-white flex  hover:shadow-lg"
            >
              Book a Car
              <GiCarKey />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
