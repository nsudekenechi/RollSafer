export const AccountSectionTravel = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Travel credit</h1>
      <div className="grid grid-cols-2 gap-y-5 md:gap-x-10 md:gap-y-2">
        <h1 className="text-black/50 col-span-2">Gift cards</h1>
        <p className="col-span-2 md:col-span-1">
          Gift cards get added to your travel credit balance and will
          automatically apply towards your next trip.
        </p>
        <div className="col-span-2 md:col-span-1">
          <a
            href=""
            className="border py-2 px-20 md:px-5 border-blue-500 text-sm rounded-md text-blue-500"
          >
            Reedem
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <h1 className="text-black/50 col-span-2">Travel Credit Code</h1>
        <p className="col-span-2 md:col-span-1">
          Travel credit will automatically apply towards your next trip. Promo
          codes must be entered at checkout. Gift cards get added to your travel
          credit balance and will automatically apply towards your next trip.
        </p>

        <div className="col-span-2 flex gap-5 md:gap-10">
          <input
            type="text"
            className="w-[100%] md:w-[30%] border outline-none px-5 text-sm"
            placeholder="Enter Code..."
          />
          <a
            href=""
            className="border py-2 px-5 border-blue-500 text-sm rounded-md text-blue-500"
          >
            Apply
          </a>
        </div>
      </div>
      <p className="text-black/40">Balance: $0</p>
    </>
  );
};
