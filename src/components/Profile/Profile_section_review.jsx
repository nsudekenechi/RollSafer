import { BsStarFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

export const Profile_section_review = () => {
  return (
    <>
      <h1 className=" uppercase font-bold  text-black/50 mb-2">
        reviews from host
      </h1>
      <div className="relative flex gap-1">
        <div className="">
          <HiOutlineUserCircle className="text-7xl text-gray-200" />
        </div>
        <div className="">
          <div className="flex text-[10px] gap-1 text-gray-200">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <h1 className="text-sm mb-1 font-bold">No reviews yet</h1>
          <h1 className="text-sm">
            Nsude haven't received a review on Turo yet.
          </h1>
        </div>
      </div>
    </>
  );
};
