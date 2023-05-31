import { RentSection } from "../components/Rent/RentSection";
import { VscChevronDown } from "react-icons/vsc";
import { forwardRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
export const Rent = () => {
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
      className=" md:text-lg flex gap-2 items-center"
      onClick={onClick}
      ref={ref}
    >
      <p> {value}</p>
      <VscChevronDown />
    </div>
  ));

  return (
    <RentSection
      From={{ From, setFrom }}
      Until={{ Until, setUntil }}
      DateElement={DateInput}
    />
  );
};
