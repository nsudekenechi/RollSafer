import { BsCheck2Circle } from "react-icons/bs";

export const AccountSectionContact = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Contact Information</h1>
      <div className="flex flex-col gap-3">
        <p className="text-lg md:text-sm text-black/40">Email</p>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <input
            type="email"
            className="border outline-none py-2 px-3 text-lg md:text-sm w-[100%] md:w-[40%] focus:border-blue-500"
            value={"nsudekenechi2@gmail.com"}
          />
          <span className="text-blue-500 flex items-center gap-1 text-lg md:text-sm">
            Verified <BsCheck2Circle />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-lg md:text-sm text-black/40 w-[100%] md:w-[40%]">
          Password
        </p>
        <a
          href=""
          className="text-blue-500 border py-1 px-5 border-blue-500 text-lg md:text-sm rounded-md"
        >
          Update
        </a>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-lg md:text-sm text-black/40 w-[100%] md:w-[40%]">
          Mobile Phone
        </p>
        <a
          href=""
          className="text-blue-500 border py-1 px-5 border-blue-500 text-lg md:text-sm rounded-md"
        >
          Update
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg md:text-sm text-black/40 capitalize">
          Mobile notifications
        </p>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-500 rounded-xl"
            checked
          />
          <span>Enable text message notifications</span>
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg md:text-sm text-black/40 capitalize">
          Email notifications
        </p>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-500 rounded-xl"
          />
          <span>Promotions and announcements</span>
        </label>
      </div>
      <div>
        <button className="bg-blue-500 px-5 py-2 text-white rounded-full">
          Save Changes
        </button>
      </div>
    </>
  );
};
