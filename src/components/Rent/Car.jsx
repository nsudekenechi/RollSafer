import { FiMapPin } from "react-icons/fi";

import { TbBackpack, TbStar } from "react-icons/tb";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
export const Car = ({ data }) => {
  return (
    <div className="hover:scale-90 scale-95 hover:shadow-card hover:shadow-black/10 duration-1000 col-span-1 flex flex-col gap-y-5 border px-4 py-5 rounded-tr-3xl rounded-bl-3xl ">
      <div className="h-[200px]">
        <img
          src={`../../../public/./Images/Cars/${data.img}`}
          className="w-[100%] h-[100%] object-cover rounded-tr-3xl rounded-bl-3xl"
          alt=""
        />
      </div>
      <div id="text-content" className="flex flex-col gap-y-2">
        <div id="priceLocation">
          <div className="flex justify-between">
            <div className="flex gap-x-1">
              <div>
                <span className="text-blue-500 text-xl font-bold">$</span>
                <span className="text-xl font-extrabold">{data.price}</span>
              </div>
              <span className="text-black/40 text-sm">/day</span>
            </div>
            <h1 className="font-bold italic flex gap-x-1">
              {data.place} <FiMapPin />
            </h1>
          </div>
        </div>
        <h1 className="text-lg font-extrabold mb-2">{data.name}</h1>
        <hr />
        <div id="carInfo" className="mt-2 flex gap-x-5">
          <div className="flex items-center gap-x-1">
            <MdOutlineAirlineSeatReclineExtra />
            <span className="text-xs">{data.seat} Seats </span>
          </div>
          <div className="flex items-center gap-x-1">
            <TbBackpack />
            <span className="text-xs">{data.bag} Air Bags </span>
          </div>
          <div className="flex items-center gap-x-1">
            <TbStar />
            <span className="text-xs">{data.rating} </span>
          </div>
        </div>
      </div>
    </div>
  );
};
