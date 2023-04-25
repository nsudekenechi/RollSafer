import { MdEventAvailable } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
export const Section_Client = () => {
  return (
    <section className="md:py-10 grid grid-cols-12 md:gap-10 md:mb-[20vh] items-center">
      <div className="col-span-12 md:col-span-5 mb-10 md:mb-0">
        <p className="capitalize text-[rgba(0,0,0,.2)] text-md mb-2">
          taking care of every client
        </p>
        <h1 className="uppercase text-4xl font-extrabold mb-3">Key Features</h1>
        <p className="text-lg md:text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
          consequatur possimus consectetur sequi maiores ipsa esse commodi sit
          molestiae.
        </p>
      </div>

      <div className="col-span-12 md:col-span-12 grid grid-cols-12 md:gap-20 gap-5">
        <div className="col-span-6 md:col-span-3 h-[200px] ">
          <div className="flex flex-col justify-between  border p-5 rounded-xl h-[100%]">
            <div className=" w-[40px] h-[40px] rounded-full bg-green-100 flex justify-center items-center">
              <MdEventAvailable className="" />
            </div>

            <div className="grid grid-cols-12">
              <p className="text-sm font-bold capitalize col-span-12 md:col-span-7">
                24-hour car delivery
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 h-[200px] ">
          <div className="flex flex-col justify-between  border p-5 rounded-xl h-[100%]">
            <div className=" w-[40px] h-[40px] rounded-full bg-red-100 flex justify-center items-center">
              <IoChatbubblesOutline className="" />
            </div>

            <div className="grid grid-cols-12">
              <p className="text-sm font-bold capitalize col-span-12 md:col-span-7">
                24/7 Technical Support
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 h-[200px] ">
          <div className="flex flex-col justify-between  border p-5 rounded-xl h-[100%]">
            <div className=" w-[40px] h-[40px] rounded-full bg-yellow-100 flex justify-center items-center">
              <TbPremiumRights className="" />
            </div>

            <div className="grid grid-cols-12">
              <p className="text-sm font-bold capitalize col-span-12 md:col-span-7">
                All models have premium package
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 h-[200px] ">
          <div className="flex flex-col justify-between  border p-5 rounded-xl h-[100%]">
            <div className=" w-[40px] h-[40px] rounded-full bg-orange-100 flex justify-center items-center">
              <SiGnuprivacyguard className="" />
            </div>

            <div className="grid grid-cols-12">
              <p className="text-sm font-bold capitalize col-span-12 md:col-span-7">
                Absolute Confidentiality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
