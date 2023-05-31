import { IoMdStar } from "react-icons/io";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Section_Browse } from "../Home/Section_Browse";
import { byCategory, byMake, howTuroWorks, guestSays } from "./data";
import { GiRaceCar } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

export const WorkSection = () => {
  return (
    <section className="pt-[10vh] ">
      {/* Header */}
      <div className=" px-5 md:px-[5vw] lg:px[10vw] grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-6">
        <h1 className="text-6xl col-span-1 font-bold underline underline-offset-8 ">
          Wish to know how RollSafer works?
        </h1>
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2">
          <p className="col-span-1 text-black/70 md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            aut accusantium qui debitis minus ipsa, incidunt totam non sapiente
            libero officiis hic nesciunt. Maxime error omnis similique aliquid
            consectetur reiciendis.
          </p>
        </div>
      </div>
      {/* Header Ends */}

      {/* Section */}
      <section className="mt-[10vh] px-5 md:px-[5vw] lg:px[10vw] ">
        <section className="my-10 grid grid-cols-1 md:grid-cols-2 items-center md:gap-x-10 gap-y-10 md:gap-y-10">
          {howTuroWorks.map((item, index) => (
            <div className="col-span-1 flex flex-col gap-y-5" key={index}>
              <div className="flex text-2xl gap-x-3 items-center">
                <span className="flex justify-center items-center w-[60px] h-[60px] border border-black/50 text-black/50 rounded-full ">
                  {index + 1}
                </span>
                <h1>{item.heading}</h1>
              </div>
              <p className="text-xl md:text-lg text-black/70">
                {item.paragraph}
              </p>
            </div>
          ))}
          <div className="col-span-1 hidden md:flex items-center">
            <span className="text-2xl text-black/60">Vrooooooooooom</span>
            <GiRaceCar size={300} className=" px-0" />
          </div>
        </section>
        <section>
          <hr />
          <div className="my-10 flex flex-col gap-y-10">
            <div className="flex text-4xl gap-x-3 items-center justify-center">
              <span className="flex justify-center items-center w-[70px] h-[70px]  bg-black/20 text-white rounded-full ">
                1
              </span>
              <h1 className="text-black/50">Find the perfect car</h1>
            </div>
            <div className="gap-y-2 flex flex-col items-center justify-center ">
              <h1 className="text-lg font-bold">
                Browse the world’s largest car sharing marketplace
              </h1>

              <p className="italic w-[100%] md:w-[50%] md:text-center">
                Whether it’s an SUV for a family road trip, a pickup truck for
                some errands, or a classic sports car for a special night out,
                find the perfect car for all kinds of occasions and budgets on
                Turo.
              </p>
            </div>
            <Section_Browse data={byMake} text={"Cars"} />
            {/* <Section_Browse data={byCategory} text={"Category"} /> */}
          </div>
          <hr />
          <div className="my-10 flex flex-col gap-y-10">
            <div className="flex text-4xl gap-x-3 items-center justify-center">
              <span className="flex justify-center items-center w-[70px] h-[70px]  bg-black/20 text-white rounded-full ">
                2
              </span>
              <h1 className="text-black/50">Book a trip</h1>
            </div>
            <div className="gap-y-2 flex flex-col items-center justify-center ">
              <h1 className="text-lg font-bold">
                Browse the world’s largest car sharing marketplace
              </h1>

              <p className="italic w-[100%] md:w-[50%] md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, aliquam repellat. Laborum doloremque eum fugiat
                debitis ex nam quisquam itaque quae voluptas consequuntur, sunt
                numquam nostrum rerum neque sequi? Nisi vitae non in atque harum
                ipsa veniam ut repellat recusandae!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-0 md:gap-10 md:grid-cols-2 items-center">
              <div className="col-span-1 flex flex-col gap-5 md:gap-10">
                <div className="flex flex-col gap-3 md:gap-5">
                  <h1 className="text-4xl font-bold ">Where?</h1>
                  <p className="text-black/70">
                    Choose a city, airport, address or hotel where your host
                    will come pick you up,always contact your host before any
                    pick up. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Blanditiis reiciendis eum neque doloremque ipsum,
                    alias labore totam voluptas rerum necessitatibus laborum
                    unde debitis qui ut officiis expedita sed! Dolore, numquam.
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:gap-5">
                  <h1 className="text-4xl font-bold ">From?</h1>
                  <p className="text-black/70">
                    Choose the date and time you wish to rent the car, Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti, vitae est asperiores hic, inventore aspernatur
                    facilis ipsa quidem fugiat, velit iure sit eum error
                    provident harum mollitia unde? Debitis quibusdam explicabo
                    suscipit expedita soluta, odit alias nam eaque fuga sit?
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:gap-5">
                  <h1 className="text-4xl font-bold ">To?</h1>
                  <p className="text-black/70">
                    Choose the date and time you wish to drop off the car, Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti, vitae est asperiores hic, inventore aspernatur
                    facilis ipsa quidem fugiat, velit iure sit eum error
                    provident harum mollitia unde? Debitis quibusdam explicabo
                    suscipit expedita soluta, odit alias nam eaque fuga sit?
                  </p>
                </div>
              </div>

              <div className="col-span-1 h-[75%]  p-5 md:p-10 rounded-2xl ">
                <img
                  src="./Images/Host/7.jpg"
                  className="w-[100%] h-[100%] object-cover object-center rounded-weird border shadow-xl"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="my-10 flex flex-col gap-y-10">
            <div className="flex text-4xl gap-x-3 items-center justify-center">
              <span className="flex justify-center items-center w-[70px] h-[70px]  bg-black/20 text-white rounded-full ">
                3
              </span>
              <h1 className="text-black/50">Hit the road</h1>
            </div>
            <div className="gap-y-2 flex flex-col items-center justify-center ">
              <h1 className="text-lg">
                Browse the world’s largest car sharing marketplace
              </h1>

              <p className="italic w-[100%] md:w-[50%] md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, aliquam repellat. Laborum doloremque eum fugiat
                debitis ex nam quisquam itaque quae voluptas consequuntur, sunt
                numquam nostrum rerum neque sequi? Nisi vitae non in atque harum
                ipsa veniam ut repellat recusandae!
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* Section Ends */}
      {/* Footer  */}
      <footer className="bg-blue-500/5 px-5 md:px-[15vw] lg:px[10vw] py-[10vh] mt-[10vh] flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl">What Guests Say</h1>
          <div className="flex  text-2xl gap-3">
            <BiChevronLeft className="cursor-pointer" id="make_prev" />
            <BiChevronRight className="cursor-pointer" id="make_next" />
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <Swiper
            className="col-span-12 w-[100%] "
            modules={[Navigation]}
            navigation={{ prevEl: "#make_prev", nextEl: "#make_next" }}
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 10 },
              720: { slidesPerView: 4, spaceBetween: 15 },
              1028: { slidesPerView: 5, spaceBetween: 30 },
            }}
            pagination={{
              type: "fraction",
            }}
          >
            {guestSays.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="border flex flex-col gap-y-5 rounded-md p-5 h-[350px]">
                  <div className=" w-[100%] h-[150px]  ">
                    <img
                      src={`./Images/Host/${item.img}`}
                      className="w-[100%] h-[100%] object-cover rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <div className="flex gap-x-1  text-blue-500  ">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">{item.car}</h1>
                      <p className="text-sm h-[60px] ">
                        {/* Adding Elipsis if words exceed 50 */}
                        {item.message.split("").length < 60
                          ? item.message.split("").slice(0, 100).join("")
                          : item.message.split("").slice(0, 100).join("") +
                            "..."}
                      </p>
                    </div>
                    <div className="flex items-center text-xs gap-x-1">
                      <h1 className=" font-bold">{item.name}</h1>
                      <span>-</span>
                      <p className="">{item.date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </footer>
      {/* Footer Starts */}
    </section>
  );
};
