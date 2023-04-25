export const Profile_section_input = ({ title, placeholder = "" }) => {
  return (
    <div>
      <p
        htmlFor="lives"
        className=" mb-3 uppercase text-sm font-bold text-black/30"
      >
        {title}
      </p>
      <input
        type="text"
        className="w-[100%] border focus:border-blue-500 outline-none py-1 px-3"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};
