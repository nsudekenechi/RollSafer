import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Trips_booked } from "./Trips_booked";

export const Trips_section = ({ section }) => {
  return (
    <section className="px-[10vw]" id="trips_section">
      <nav className="mt-10 flex gap-5 text-xl border-b">
        {section.pages.map((item) => (
          <NavLink
            to={`/${section.type}/${item}`}
            className="cursor-pointer  pb-3 px-5 capitalize"
            key={item}
          >
            {item}
          </NavLink>
        ))}
      </nav>
      <Trips_booked section={section} />
    </section>
  );
};
