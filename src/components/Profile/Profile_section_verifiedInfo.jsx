import { BsFillPersonCheckFill } from "react-icons/bs";

export const Profile_section_verifiedInfo = () => {
  return (
    <>
      <div className="md:text-sm">
        <h1 className="uppercase font-bold  text-black/50 mb-5">
          verified info
        </h1>

        <div className=" flex flex-col gap-1 md:gap-2">
          <div className="grid grid-cols-2 gap-2 md:gap-10 ">
            <h1 className="col-span-2 md:col-span-1">Approved to drive</h1>
            <h1 className="flex md:justify-end col-span-2 md:col-span-1  text-blue-500 ">
              Verified ID
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-10 ">
            <h1 className="col-span-2 md:col-span-1">Email Address</h1>
            <h1 className="flex md:justify-end col-span-2 md:col-span-1  text-blue-500 ">
              <BsFillPersonCheckFill />
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-10 ">
            <h1 className="col-span-2 md:col-span-1">Phone number</h1>
            <h1 className="flex md:justify-end col-span-2 md:col-span-1  text-blue-500 ">
              Verify Phone number
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-10 ">
            <h1 className="col-span-2 md:col-span-1">Facebook</h1>
            <h1 className="flex md:justify-end col-span-2 md:col-span-1  text-blue-500 ">
              Connect account
            </h1>
          </div>
        </div>
      </div>
      <p className="text-xs text-black/40 mt-5">
        Build trust with other users on Turo by verifying your contact
        information.
      </p>
    </>
  );
};
