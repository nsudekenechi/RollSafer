export const AccountSectionDownloadAccount = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Download account data</h1>
      <div className="grid grid-cols-2 gap-y-5  md:gap-x-10 md:gap-y-2">
        <p className="col-span-2  md:col-span-1 text-black/50 ">
          You can download a copy of all information Turo has accumulated
          throughout your time as a Turo user. You may download your data as
          often as you’d like.
        </p>

        <div className="col-span-2  md:col-span-1">
          <a
            href=""
            className="border py-2 px-20 md:px-5 border-blue-500 text-sm rounded-md text-blue-500"
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
};
