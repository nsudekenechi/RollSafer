import { useEffect } from "react";
import { useState } from "react";

export const Trips_booked = ({ section }) => {
  // Messages to display whem users data is empty
  const [message, setMessage] = useState(
    section.type == "trips"
      ? section.path == "booked" //When Booked is Empty
        ? "No booked trips"
        : "No previous trips" //When History is Empty
      : section.path == "messages" //When Message is Empty
      ? "No Messages"
      : "No Notifications" //When Notification is Empty
  );

  return (
    <div className="py-10 flex flex-col gap-5">
      <h1 className="text-4xl font-bold uppercase">{section.path}</h1>
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-3xl font-extrabold">
          {section.data.length == 0 ? message : section.data}
        </h1>
        {section.type == "trips" && (
          <p className="text-black/50 text-center md:text-left">
            This is where you can access information about your trips
          </p>
        )}
      </div>
    </div>
  );
};
