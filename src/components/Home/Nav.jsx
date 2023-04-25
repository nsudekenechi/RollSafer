import { IoCarSport } from "react-icons/io5";
import { BiCar } from "react-icons/bi";
import { GiCarKey } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4, HiOutlineUserCircle } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Logo } from "../Logo";
export const Nav = () => {
  const [shadow, setShadow] = useState("border-b");
  const [showNav, setShowNav] = useState("hidden");
  const handleShowNav = () => {
    setShowNav((prev) => {
      let hidden = prev == "hidden" ? "" : "hidden";
      return hidden;
    });
  };
  useEffect(() => {
    // Add Shadow to nav OnScroll
    window.onscroll = (e) => {
      if (window.scrollY > 0) {
        setShadow("shadow-md");
      } else {
        setShadow("border-b");
      }
    };
    document.body.onclick = (e) => {
      // alert(e.target);
      if (!e.target.classList.contains("showNav")) {
        setShowNav("hidden");
      }
    };
  }, []);
  return (
    <nav
      className={`${shadow} grid grid-cols-12  sticky top-0 bg-white px-5 md:px-10 py-5  z-10`}
      style={{ transition: "1s" }}
    >
      <Logo shadow={shadow} />

      <ul className="flex items-center md:gap-10 relative justify-end  col-span-6">
        <li className="border py-2 px-5 border-black rounded-sm text-sm hidden md:block">
          <a href="">Become a host</a>
        </li>
        <li className="pl-5 md:px-5 border-l ">
          <div
            onClick={handleShowNav}
            className={`flex items-center gap-2  px-5 py-2 rounded-md hover:bg-[rgba(0,0,0,.03)] cursor-pointer showNav ${
              showNav == "" ? "bg-[rgba(0,0,0,.03)]" : ""
            }`}
          >
            <HiOutlineMenuAlt4 className="text-3xl showNav" />
            <HiOutlineUserCircle className="text-xl showNav" />
          </div>
        </li>

        <div className={`${showNav} absolute w-[100%] top-[100%] pt-[3vh] `}>
          <ul className="bg-white w-[100%] h-fit border rounded-b-md shadow p-5 flex flex-col gap-1">
            <li className="">
              <Link
                href=""
                className="hover:bg-[rgba(0,0,0,.03)] w-[100%] block py-2 px-5 rounded-lg"
                to="/login"
              >
                Login
              </Link>
            </li>

            <li className="">
              <Link
                href=""
                className="hover:bg-[rgba(0,0,0,.03)] w-[100%] block py-2 px-5 rounded-lg"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
            <hr className="my-2" />
            <li className="">
              <a
                href=""
                className="hover:bg-[rgba(0,0,0,.03)] w-[100%] block py-2 px-5 rounded-lg "
              >
                <span className="flex items-center gap-2">
                  <BiCar className="text-2xl" />
                  Become a host
                </span>
              </a>
            </li>

            <li className="">
              <a
                href=""
                className="hover:bg-[rgba(0,0,0,.03)] w-[100%] block py-2 px-5 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <GiCarKey className="text-2xl" />
                  How Rollsafe Works
                </span>
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};
