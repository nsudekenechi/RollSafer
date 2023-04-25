import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { VscChevronDown } from "react-icons/vsc";

export const Favorite_section_availability = ({ Until, setUntil }) => {
  const DateInput = forwardRef(({ value, onClick }, ref) => (
    <div className="flex gap-2 items-center" onClick={onClick} ref={ref}>
      <p> {value}</p>
      <VscChevronDown />
    </div>
  ));
  return (
    <div className="gap-10 grid grid-cols-12 text-2xl border-b pb-3">
      <div className="col-span-5 flex gap-2 items-center ">
        <DatePicker
          selected={Until.date}
          onChange={(date) => setUntil((prev) => ({ ...prev, date }))}
          customInput={<DateInput />}
          minDate={new Date()}
        />
      </div>

      <div className="col-span-5 flex gap-2 items-center ">
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
  );
};
