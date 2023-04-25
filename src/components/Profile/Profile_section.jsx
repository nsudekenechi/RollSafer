import { HiOutlineUserCircle } from "react-icons/hi";
import { Profile_section_view } from "./Profile_section_view";
import { useState } from "react";
import { Profile_section_edit } from "./Profile_section_edit";

export const Profile_Section = () => {
  const [editProfile, setEditProfile] = useState(false);
  const handleEditProfile = () => {
    setEditProfile((prev) => !prev);
  };
  return (
    <section className="min-h-[100vh]">
      {/* header */}
      <div className="relative h-[25vh] border-b flex  justify-between items-end py-5 px-5 md:px-[10vw] ">
        <div className="relative -bottom-[50%] ">
          <HiOutlineUserCircle className="text-9xl text-gray-200" />
          <div className="flex md:hidden flex-col gap-1 justify-center items-center">
            <h1 className="text-3xl  font-bold">Kenechi N.</h1>
            <p className="text-black/20">Joined Apr 2023</p>
          </div>
        </div>

        {editProfile ? (
          <div className=" grid grid-cols-2 gap-5 ">
            <button className="col-span-2 md:col-span-1 rounded-full transition-all hover:bg-blue-950 bg-blue-500 py-2 px-5 text-white">
              Save Changes
            </button>
            <button
              onClick={handleEditProfile}
              className="col-span-2 md:col-span-1 rounded-full border py-2 px-5 text-black"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEditProfile}
            className=" rounded-full transition-all hover:bg-blue-950 bg-blue-500 py-2 px-5 text-white"
          >
            Edit Profile
          </button>
        )}
      </div>
      {/* Section */}
      <section className="grid grid-cols-12 md:gap-20 px-5 md:px-[10vw] py-20 ">
        {editProfile ? <Profile_section_edit /> : <Profile_section_view />}
      </section>
    </section>
  );
};
