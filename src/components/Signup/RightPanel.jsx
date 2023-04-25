import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
export const RightPanel = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-7 px-3 md:px-10 md:overflow-hidden">
      <div className="flex items-center gap-2 py-5  px-3 md:px-[10vh]"></div>
      <div className="px-3 md:px-[10vh]  ">
        <div className="my-5 md:my-10">
          <h1 className="text-center text-4xl mt-5 mb-2 font-bold">
            Welcome To{" "}
            <Link className="text-blue-500" to={"/"}>
              RollSafer
            </Link>
          </h1>
          <p className="text-center px-5 md:px-20 text-[rgba(0,0,0,.4)] text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolore dolor placeat eos natus! Vitae tempora molestias at itaque
            ipsa!
          </p>
        </div>

        <div className="md:px-10 flex flex-col gap-3 md:gap-5">
          <div className="p-2 h-[55px]  bg-[rgba(87,87,87,0.04)] rounded-md grid grid-cols-12">
            <div className="h-[90%] col-span-2 md:col-span-1 bg-white rounded-md flex justify-center items-center">
              <MdEmail className="text-md text-blue-500" />
            </div>
            <div className="col-span-10 ">
              <input
                type="email"
                className="w-[100%] text-[rgba(87,87,87,0.3)] placeholder:text-[rgba(87,87,87,0.2)] h-[100%] bg-transparent outline-none px-5"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="p-2 h-[55px]  bg-[rgba(87,87,87,0.04)] rounded-md grid grid-cols-12">
            <div className="h-[90%] col-span-2 md:col-span-1 bg-white rounded-md flex justify-center items-center">
              <MdLock className="text-md text-blue-500" />
            </div>
            <div className="col-span-10 ">
              <input
                type="password"
                className="w-[100%] text-[rgba(87,87,87,0.3)] placeholder:text-[rgba(87,87,87,0.2)] h-[100%] bg-transparent outline-none px-5"
                placeholder="Enter Password"
              />
            </div>
          </div>

          <button className="bg-blue-500 p-2 md:p-3 text-white rounded-lg">
            Sign Up
          </button>
          <div className="grid grid-cols-12 justify-center items-center text-[rgba(0,0,0,.2)]">
            <span className="col-span-5 border-t "></span>
            <p className="col-span-2 text-center">Or</p>
            <span className="col-span-5 border-t "></span>
          </div>
          <div className="flex justify-center gap-2 md:gap-5 px-2 md:px-10">
            <button className="border flex  p-2  w-[50%] items-center justify-center gap-2 rounded-md">
              <FcGoogle /> <span>Google</span>
            </button>

            <button className="border flex  p-2  w-[50%] items-center justify-center gap-2 rounded-md">
              <FaFacebook className="text-blue-500" /> <span>Facebook</span>
            </button>
          </div>
          <p className="text-sm text-[rgba(0,0,0,.2)] flex justify-center gap-2">
            Already Have an account?
            <a href="" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
