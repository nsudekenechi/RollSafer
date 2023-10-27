export const Header = () => {
  const images = [1, 2, 3, 4];
  return (
    <header className="mb-[100px] md:mb-[30vh] ">
      <div className="my-10 grid grid-cols-12 md:gap-10 items-center">
        <div className="col-span-12 md:col-span-5 ">
          <h1 className=" text-[5rem] font-bold" style={{ lineHeight: "5rem" }}>
            <span className="text-blue-500">Rent</span> the best cars in the
            <span className="text-blue-500"> world</span>
          </h1>
          <p className="text-black/40 text-xl md:text-sm mb-8 my-2 md:my-4 md:mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sunt
            soluta illum repudiandae expedita? Cumque provident hic repellat
            est, enim cum eius, quidem aut quia obcaecati maxime blanditiis
            dolorem quam!
          </p>
          <a
            href=""
            className="block w-[50%] bg-blue-500 px-5 py-4 rounded-full text-white text-center btn_blue-shadow hover:bg-black"
          >
            Find Your Drive
          </a>
        </div>

        <div className="hidden md:block md:col-span-7 ">
          <div className="h-[400px] flex justify-center items-center">
            <img src="./Images/Cars/1.png" alt="" className="h-[100%] w-[100%]"/>
          </div>
          <div className="flex gap-x-20 items-center justify-center ">
            {images.map((image) => (
              <div className="" key={image}>
                <img
                  src={`./Images/CarLogos/${image}.png`}
                  alt=""
                  className="w-[50px] h-[50px] object-contain grayscale hover:grayscale-0 duration-700 hover:scale-150 scale-110 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
