export const AccountSectionTransmission = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Transmission</h1>
      <div className="flex flex-col gap-3">
        <p className="text-sm text-black/40">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          aliquid sunt reprehenderit unde voluptatum et delectus repellendus
          maiores suscipit at?
        </p>
        <label className="flex items-center gap-5">
          <input type="radio" className="w-5 h-5" name="expert" />
          <span className="flex items-center gap-1 text-sm">
            Yes, I am an expert
          </span>
        </label>
        <label className="flex items-center gap-5">
          <input type="radio" className="w-5 h-5" name="expert" />
          <span className="flex items-center gap-1 text-sm">
            No, I am not an expert
          </span>
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
