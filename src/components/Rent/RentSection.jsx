import { FiMapPin, FiCalendar, FiSearch } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { Car } from "./Car";
import { Rent_Cars } from "../../Data";
import { useState } from "react";
export const RentSection = ({ From, Until, DateElement }) => {
  // Pagination
  const page = useParams();
  const Items = 2;
  const startIndex = page.id - 1;
  const endIndex = startIndex + Items - 1;
  const pages = [];
  for (let i = 1; i <= Math.floor(Rent_Cars.length / Items); i++) {
    pages.push(i);
  }

  return (
    <section className="pt-[10vh] pb-[5vh]">
      <header className="flex flex-col gap-y-10 h-[60vh]">
        <div className="flex flex-col md:items-center gap-y-2 md:gap-y-5">
          <p className="text-lg text-center md:text-left">
            Discover Turo, the world's largest car sharing marketplace
          </p>
          <h1 className="text-5xl font-bold text-center md:text-left">
            Rent a Jeep
          </h1>
        </div>

        <div className="px-5 md:px-[10vw]">
          <div className="md:border rounded-full gap-y-5 md:gap-y-0 grid md:grid-cols-3 md:px-10 py-2">
            <div className="border md:border-none border-blue-500 rounded-full py-2 px-5 md:p-0 col-span-1 grid grid-cols-6 items-center">
              <div className="col-span-5 ">
                <div className=" flex items-center gap-x-2 md:text-sm text-black/40">
                  <span>Where</span>
                  <FiMapPin />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City, Address, Hotel, Airport"
                    className="placeholder:md:text-sm   w-[100%] outline-none"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full shadow-md flex items-center justify-center text-white cursor-pointer">
                  <FiSearch />
                </div>
              </div>
            </div>

            <div className="grid-cols-1 border md:border-none border-blue-500 rounded-full py-2 px-5 md:p-0 md:border-l md:border-r md:pl-5">
              <div className="mb-1 flex items-center gap-x-2 md:text-sm text-black/40">
                <span>From</span>
                <FiCalendar />
              </div>
              <div className="flex gap-x-5">
                {/* <DateInput
                  From={From}
                  Until={Until}
                  DateInput={DateElement}
                  type={"from"}
                /> */}
              </div>
            </div>

            <div className="grid-cols-1 border md:border-none border-blue-500 rounded-full py-2 px-5 md:p-0 md:border-l md:border-r md:pl-5">
              <div className="mb-1 flex items-center gap-x-2 text-sm text-black/40">
                <span>Until</span>
                <FiCalendar />
              </div>
              <div className="flex gap-x-5">
                {/* <DateInput
                  From={From}
                  Until={Until}
                  DateInput={DateElement}
                  type={"until"}
                /> */}
              </div>
            </div>
          </div>
          <div className="mt-5 text-sm pl-5 md:px-5 flex items-center gap-x-3">
            <a
              href=""
              className="flex items-center gap-x-1 hover:underline duration-1000 text-black/30"
            >
              <span>Home</span>
              <MdArrowRightAlt className="" />
            </a>
            <a
              href=""
              className="flex items-center gap-x-1 hover:underline duration-1000 text-black/30"
            >
              <span>Rent</span>
              <MdArrowRightAlt className="" />
            </a>
            <a href="" className="text-blue-500 flex items-center gap-x-1 ">
              <span>Jeep</span>
            </a>
          </div>
        </div>
      </header>

      <section className="px-5 md:px-[10vw]">
        <h1 className="text-2xl font-bold mb-10">Our Jeep Collections</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Rent_Cars.map(
            (item, index) =>
              (index == startIndex || index == endIndex) && (
                <Car
                  key={index}
                  data={{
                    img: item.img,
                    price: item.price,
                    place: item.place,
                    name: item.name,
                    seat: item.seat,
                    bag: item.bag,
                    rating: item.rating,
                  }}
                />
              )
          )}
        </div>

        <div className="flex gap-x-5 justify-center py-10">
          {pages.map((item, index) => (
            <Link
              to={`/rent/${item}`}
              className={`px-3 py-1  rounded-full  flex items-center justify-center ${
                (!page.id && item == 1) || item == page.id
                  ? "bg-blue-500 text-white shadow-md transition duration-1000"
                  : "border text-blue-500"
              }  `}
              key={index}
            >
              {item}
            </Link>
          ))}

          {/* <Link
            to=""
            className="px-3 py-1 border rounded-full  flex items-center justify-center text-blue-500 cursor-pointer"
          >
            2
          </Link> */}
        </div>
      </section>
    </section>
  );
};
