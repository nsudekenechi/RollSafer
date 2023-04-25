import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Logo = ({ shadow }) => {
  return (
    <div className="col-span-6 flex">
      <Link to="/" className="flex items-center gap-2 ">
        <span
          className={`${
            shadow == "" ? "bg-blue-500" : "bg-black"
          } p-1 rounded-full text-white duration-1000`}
        >
          <IoCarSport />
        </span>
        <p className="text-2xl tracking-widest">RollSafer</p>
      </Link>
    </div>
  );
};
