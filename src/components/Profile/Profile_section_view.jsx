import { BsFillPersonCheckFill } from "react-icons/bs";
import { Profile_section_review } from "./Profile_section_review";
import { Profile_section_verifiedInfo } from "./Profile_section_verifiedInfo";
export const Profile_section_view = () => {
  return (
    <>
      <div className="col-span-12  md:col-span-4 flex flex-col  ">
        <div className="hidden md:flex flex-col gap-1 mb-5">
          <h1 className="text-3xl  font-bold">Kenechi N.</h1>
          <p className="text-black/20">Joined Apr 2023</p>
        </div>

        <Profile_section_verifiedInfo />
      </div>
      <div className="col-span-12 md:col-span-5 my-10 md:my-0">
        <Profile_section_review />
      </div>
    </>
  );
};
