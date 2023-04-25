import { Profile_section_input } from "./Profile_section_input";
import { Profile_section_review } from "./Profile_section_review";
import { Profile_section_verifiedInfo } from "./Profile_section_verifiedInfo";

export const Profile_section_edit = () => {
  return (
    <section className="col-span-12">
      <form className=" grid grid-cols-2 gap-20">
        <div className="col-span-2 md:col-span-1 grid grid-cols-12 gap-1">
          <button className="outline-none col-span-7 md:col-span-6 text-sm md:text-xs  bg-blue-500 px-5 py-2 text-white rounded-md">
            Change Profile Photo
          </button>
          <div className="col-span-12 grid grid-cols-12 gap-5">
            <p className="text-sm md:text-xs col-span-8 mt-3 text-black/60">
              Add a face to the name. It’ll help other hosts and guests
              recognize you at the beginning of a trip.
            </p>
            <div className="col-span-12 grid grid-cols-12 gap-4">
              <h1 className="hidden md:block text-3xl font-bold col-span-12">
                Nsude K.
              </h1>

              <div className="col-span-10 flex flex-col gap-5">
                <div className="text-sm">
                  <Profile_section_input
                    title={"lives"}
                    placeholder="Boston, MA / Paris France"
                  />
                  <p className="text-xs italic text-black/30 mt-2">
                    Joined Apr 2023
                  </p>
                </div>
                <Profile_section_verifiedInfo />

                <Profile_section_input title={"languages"} />
                <Profile_section_input title={"works"} />
                <Profile_section_input title={"school"} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5 md:gap-10">
          <h1 className="uppercase text-xs font-bold text-black/30 ">
            about nsude
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed
            nemo cumque. Mollitia ipsum ratione alias corporis vitae neque
            expedita, cum qui corrupti sit quam. Repudiandae soluta aliquid
            obcaecati fugit quaerat illo doloribus nam autem aut, quod alias
            libero reprehenderit consequuntur sunt officiis temporibus deleniti.
            Nisi consectetur illo officia? Fugiat!
          </p>

          <textarea
            name=""
            id=""
            className="border resize-none outline-none p-3 w-[100%] h-[200px] focus:border-blue-500"
          ></textarea>
          <div className="my-10 md:my-0">
            <Profile_section_review />
          </div>
        </div>
      </form>
    </section>
  );
};
