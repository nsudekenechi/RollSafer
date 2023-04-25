import { VscSettings, VscChevronDown, VscClose } from "react-icons/vsc";
import { IoCarSportOutline } from "react-icons/io5";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const Favorite_section = () => {
  const [toggle, setToggle] = useState({ show: false, availability: "" });
  const handleToggle = () => {
    setToggle((prev) => ({ ...prev, show: !prev.show }));
  };

  const animateAvailability = () => {
    setToggle((prev) => ({
      ...prev,
      availability: " transition-[scale,bg] scale-95 bg-[rgba(0,0,0,.1)]",
    }));
  };

  const resetAvailability = () => {
    setToggle((prev) => ({
      ...prev,
      availability: " scale-100 bg-white",
    }));
  };

  const [From, setFrom] = useState({
    date: new Date(),
    time: new Date().setHours(10, 0),
  });
  const [Until, setUntil] = useState({
    date: new Date(
      `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${
        new Date().getDate() + 2
      }`
    ),
    time: new Date().setHours(10, 0),
  });
  const DateInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className="text-sm md:text-lg flex gap-2 items-center"
      onClick={onClick}
      ref={ref}
    >
      <p> {value}</p>
      <VscChevronDown />
    </div>
  ));

  const resetTime = () => {
    setFrom({
      date: new Date(),
      time: new Date().setHours(10, 0),
    });
    setUntil({
      date: new Date(
        `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${
          new Date().getDate() + 2
        }`
      ),
      time: new Date().setHours(10, 0),
    });
  };
  return (
    <section className=" px-10">
      <div className="md:py-10 md:px-20 relative">
        <div className="grid grid-cols-12 gap-5 md:gap-0">
          <h1 className=" col-span-12 md:col-span-10 text-4xl font-bold ">
            Nsude's Favorites
          </h1>
          <div
            className={`p-2 col-span-7 md:col-span-2 ${toggle.availability} duration-1000  rounded-full md:rounded-md flex items-center gap-2 cursor-pointer justify-center   md:border  availability-shadow  md:shadow-none`}
            onClick={handleToggle}
            onMouseDown={animateAvailability}
            onMouseUp={resetAvailability}
          >
            <VscSettings />
            <h1>Availability</h1>
          </div>
        </div>
        <div className=" absolute  w-[100%] left-0 md:grid md:justify-end md:px-20 py-5">
          <div
            className={` bg-white p-5 px-10  border right-0  ${
              !toggle.show ? "hidden" : ""
            }`}
          >
            <div className="flex  justify-between items-center">
              <p>Dates</p>
              <VscClose className="cursor-pointer" onClick={handleToggle} />
            </div>
            <div className="my-5">
              <p className="text-lg mb-2 text-blue-500">From</p>

              <div className="gap-2 md:gap-10 grid grid-cols-12 text-2xl border-b pb-3">
                <div className="col-span-6 md:col-span-6 flex gap-2 items-center ">
                  <DatePicker
                    selected={From.date}
                    onChange={(date) => {
                      setFrom((prev) => ({ ...prev, date }));
                      //Updating until whenever from's date > until's date
                      if (
                        date.getDate() > Until.date.getDate() ||
                        date.getMonth() > Until.date.getMonth()
                      ) {
                        setUntil((prev) => ({ ...prev, date }));
                      }
                    }}
                    customInput={<DateInput />}
                    selectsEnd
                    startDate={From.date}
                    endDate={Until.date}
                    minDate={new Date()}
                  />
                </div>

                <div className="col-span-6 md:col-span-5 flex gap-2 items-center ">
                  <DatePicker
                    selected={From.time}
                    onChange={(time) => setFrom((prev) => ({ ...prev, time }))}
                    customInput={<DateInput />}
                    showTimeSelect
                    showTimeSelectOnly
                    dateFormat="h:mm aa"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg mb-2 text-blue-500">Until</p>
              <div className="gap-2 md:gap-10 grid grid-cols-12 text-2xl border-b pb-3">
                <div className="col-span-6 md:col-span-6 flex gap-2 items-center ">
                  <DatePicker
                    selected={Until.date}
                    onChange={(date) => setUntil((prev) => ({ ...prev, date }))}
                    customInput={<DateInput />}
                    minDate={new Date()}
                  />
                </div>

                <div className="col-span-6 md:col-span-5 flex gap-2 items-center ">
                  <DatePicker
                    selected={Until.time}
                    onChange={(time) => setUntil((prev) => ({ ...prev, time }))}
                    customInput={<DateInput />}
                    showTimeSelect
                    showTimeSelectOnly
                    dateFormat="h:mm aa"
                  />
                </div>
              </div>
            </div>
            <div className="my-5 grid grid-cols-12 gap-4 md:gap-10 ">
              <button className="p-2 col-span-12 md:col-span-5 bg-blue-500 text-white rounded-md">
                Save
              </button>
              <button
                onClick={resetTime}
                className="p-2 col-span-12 md:col-span-5 border rounded-md"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className=" py-[25vh] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <IoCarSportOutline className="text-blue-500" size={40} />
          <h1 className="text-3xl font-extrabold">No favorites</h1>
          <p>You’ll be able to access your favorited cars here</p>
        </div>
      </section>
    </section>
  );
};
